import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';
const saveChanges=(products)=>{
    fetch('https://check.detexline.ru/processingqueue/api/saveAreaSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ products })
})
  .then(response => response.json())
  .then(data => console.log('save'))
  .catch(error => console.error(error))
}
const Areas = () => {
	const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
	useEffect(() => {
        // ProductService.getProducts().then((data) => setProducts(data));
        
        fetch('https://check.detexline.ru/processingqueue/api/getAreaSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
//   body: JSON.stringify({ products })
})
  .then(response => response.json())
  .then(data => {
    // JSON.stringify(data);
     //console.log(JSON.parse(data));
    // setNewProducts(data);
    setProducts(data);
     //setProducts(JSON.parse(data));
  })
  .catch(error => console.error(error))
         
    }, []);
	const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                </div>
            </div>
        );
    };
	return ( 
		<>
        <div className="card xl:flex xl:justify-content-center">
            <OrderList dataKey="id" value={products} onChange={(e) => {setProducts(e.value); saveChanges(products);}} itemTemplate={itemTemplate} header="Порядок участков" dragdrop></OrderList>
        </div>
		</>
	);
}
 
export default Areas;