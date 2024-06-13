
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
const saveChanges=(selectedProducts, monitor)=>{
    fetch('https://check.detexline.ru/processingqueue/serp/saveColumnSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'selectedProducts':selectedProducts, 'monitor':monitor })
})
  .then(response => response.json())
  .then(data => console.log('save'))
  .catch(error => console.error(error))
}

const getSettings=(monitor, setSelectedProducts, setProducts)=>{
  
  fetch('https://check.detexline.ru/processingqueue/serp/getColumnSettings.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'monitor': monitor})
})
  .then(response => response.json())
  .then(data => {
    if (data === undefined) {
    ProductService.getProducts().then((data) => setProducts(data));
    } else {
    setSelectedProducts(data);
    }
    
  })
  .catch(error => console.error(error))
}

const Columns = (props) => {
	const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    let monitor=props.monitor.label;

    useEffect(() => {
      ProductService.getProducts().then((data) => setProducts(data));
      getSettings(monitor, setSelectedProducts, setProducts);
    }, [monitor]);
    useEffect(()=>{
      saveChanges(selectedProducts, monitor);
    },[selectedProducts])
	return ( 
		<>
		<div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
            </div>
            <DataTable value={products}  selection={selectedProducts} onSelectionChange={(e) => {setSelectedProducts(e.value); }} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Наименование"></Column>
				<Column field="code" header="Код"></Column>                
                <Column field="category" header="Тип данных"></Column>
            </DataTable>
        </div>
		</>
	);
}
 
export default Columns;