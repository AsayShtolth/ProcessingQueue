import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';
import { Checkbox } from 'primereact/checkbox';
const saveChanges=(products, ingredients,monitor)=>{
    fetch('https://check.detexline.ru/processingqueue/serp/saveAreaSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'product':products, 'ingridients':ingredients, 'monitor':monitor })
})
  .then(response => response.json())
  .then(data => console.log('save'))
  .catch(error => console.error(error))
}

const getSettings=(monitor, setProducts)=>{
  fetch('https://check.detexline.ru/processingqueue/serp/getAreaSettings.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
   body: JSON.stringify({ 'monitor':monitor })
  })
    .then(response => response.json())
    .then(data => {
      if (data == undefined) {
        // ProductService.getProducts().then((data) => setProducts(data));
      }
      else{
        console.log(data);
        setProducts(data);
        // setIngredients(data);
      }
    
      setProducts(JSON.parse(data));
    })
    .catch(error => console.error(error))
}

const getArea=(monitor, setIngredients)=>{
  fetch('https://check.detexline.ru/processingqueue/serp/getAreaSettingsCheck.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
   body: JSON.stringify({ 'monitor':monitor })
  })
    .then(response => response.json())
    .then(data => {
      if (data == undefined) {
        // ProductService.getProducts().then((data) => setProducts(data));
      }
      else{
        console.log(data);
        setIngredients(data);
        // setIngredients(data);
      }
    
      setIngredients(JSON.parse(data));
    })
    .catch(error => console.error(error))
}
const Areas = (props) => {
  const [ingredients, setIngredients] = useState([]);
	const [products, setProducts] = useState([]);
  //setIngredients(2);
  let monitor=props.monitor.label;
    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

	useEffect(() => {
    //  ProductService.getProducts().then((data) => setProducts(data));
        getSettings(monitor,setProducts)
         getArea(monitor, setIngredients);
      }, [monitor]);
    useEffect(()=>{
      if  (Object.keys(products)!=0){
        saveChanges(products, ingredients,monitor);
       // console.log(ingredients);
      }  
    }, [products, ingredients])
	const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3" >
                <div className="flex flex flex-column gap-2 xl:mr-8" >
                  <div>
                    <Checkbox inputId="ingredient1" name={item.name} value={item.id} onChange={onIngredientsChange} checked={ingredients.includes(item.id)} />
                    <span className="font-bold" > {item.name}</span>
                  </div>
                    
                </div>
            </div>
        )       
    };
	return ( 
		<>
        <div className="card xl:flex xl:justify-content-center">
            <OrderList dataKey="id" value={products} onChange={(e) => {setProducts(e.value); }} itemTemplate={itemTemplate} header="Порядок участков" dragdrop></OrderList>
        </div>
		</>
	);
}
 
export default Areas;