
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
const Columns = () => {
	const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);
	return ( 
		<>
		<div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
            </div>
            <DataTable value={products}  selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Наименование"></Column>
				<Column field="code" header="Код"></Column>                
                <Column field="category" header="Тип данных"></Column>
            </DataTable>
        </div>
		{/*     [AreaName] => Siemens МОЦ - фрезерный ЧПУ
    [AreaID] => 11
    [Stateid] => 2
    [IsPriority] => 0
    [NumRow] => 18
    [id] => 75189
    [DateCreated] => 2024-05-02 10:24:39.247
    [WithoutOperator] => 0
    [IdOrder] => 0
    [AccNum] => 
    [NumTZ] => DL_ZS_0002
    [ShortName] => Стойка Digital
    [NameDetail] => Доработка паза под вставку
    [StuffName] => 
    [BlankStr] => 
    [Quan] => 4
    [NumanOperation] => 
    [RouteType] => О
    [QuanReady] => 4
    [QuanDefect] => 
    [CountInForm] => 
    [CircleTime] => 
    [OutStuffQuan] => 
    [EquipmentStr] => # 3  HV-50, 15 000, Siemens 828
    [DateSupposedEnd] => 
    [StartDateProcessing] => 2024-05-02 11:06:34.853
    [EndDateProcessing] => 2024-05-02 11:42:58.770
    [IsProgramm] => 0
    [AreaNextName] => 
    [PerformerStr] => Фанеев Денис Артемович
    [AuthorName] => Фанеев Денис Артемович
    [IsMoscow] => 0
    [IsSerp] => 0
    [DateStartPlan] => 
    [DateEndPlan] =>  */}
		</>
	);
}
 
export default Columns;