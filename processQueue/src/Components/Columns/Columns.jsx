
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
const Columns = () => {
	const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
const saveChanges=()=>{
    fetch('https://check.detexline.ru/processingqueue/api/saveColumnSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ selectedProducts })
})
  .then(response => response.json())
  .then(data => console.log('save'))
  .catch(error => console.error(error))
}
    useEffect(() => {
         ProductService.getProducts().then((data) => setProducts(data));
          fetch('https://check.detexline.ru/processingqueue/api/getColumnSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
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
    }, []);
    useEffect(()=>{
      saveChanges(selectedProducts);
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