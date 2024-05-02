import { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';
const Areas = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
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
            <OrderList dataKey="id" value={products} onChange={(e) => setProducts(e.value)} itemTemplate={itemTemplate} header="Порядок участков" dragdrop></OrderList>
        </div>
		</>
	);
}
 
export default Areas;