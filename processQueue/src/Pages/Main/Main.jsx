import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Main = () => {
	// Нужно получить общие настройки и сделать отправку запроса в зависимости от настроек времени
	// Нужно получить порядок участков и вызывать по сет таймаут
	const [tz, setTZ] = useState([]);
	const [columns, setColumns]= useState([]);
	const getAllColumns=()=>{
	fetch('https://check.detexline.ru/processingqueue/api/getColumnSettings.php', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	//   body: JSON.stringify({ products })
	})
	.then(response => response.json())
	.then(data => {
		setColumns(data);
		// /console.log(data);
	})
	.catch(error => console.error(error))
}
	const getAllTz=(area)=>{
	fetch('https://check.detexline.ru/processingqueue/api/getInfo.php?area='+area, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	//   body: JSON.stringify({ products })
	})
	.then(response => response.json())
	.then(data => {
		setTZ(data);
		// console.log(data);
	})
	.catch(error => console.error(error))
}
		useEffect(() => {
			// здесь нужно сделать таймаут и по нему дергать функцию getAllTz, меняя idArea 
			// + нужно учесть отображение 1 или 2 таблицы
        getAllTz(1);
		getAllColumns();
    }, []);
	const hasColumn=(name, arr)=>{
		arr.forEach(element => {
			// console.log(element.code)
			if(element.code==name)
			{
				// console.log(true)
				return true
			}
			else{
				// console.log(false)
				// return false
			}
		});
	}
	useEffect(()=>{
		let dateCreated=hasColumn("DateCreated", columns)
	},[columns])
	return ( 
		<>
		<div className="card">
            <DataTable value={tz} tableStyle={{ minWidth: '50rem' }}>
				{
					columns.forEach(element=>{
						if(element.code=='DateCreated'){
							console.log(element.code);
							<Column field="DateCreated" header="Добавлено"></Column>
						}
			
					})
				}
                {hasColumn("NumRow", columns) && <Column field="NumRow" header="#"></Column>}
                <Column field="id" header="ID"></Column>
                <Column field="DateCreated" header="Добавлено"></Column>
                 <Column field="IdOrder" header="№ заказа"></Column>
				<Column field="AccNum" header="№ счета"></Column>
                <Column field="NumTZ" header="№ ТЗ"></Column>
                <Column field="ShortName" header="Короткое название"></Column>
                <Column field="NameDetail" header="Наименование детали"></Column> 				
				<Column field="StuffName" header="Материал"></Column>
                <Column field="BlankStr" header="Размеры заготовки"></Column>
                <Column field="Quan" header="Задание, шт."></Column>
                <Column field="NumanOperation" header="Наим. операции (рабоч.)"></Column>           								
				<Column field="RouteType" header="Тип"></Column>
                <Column field="QuanReady" header="Выполнено, шт."></Column>
                <Column field="QuanDefect" header="Брак, шт."></Column>
                <Column field="CountInForm" header="Количество изделий в форме"></Column> 		                
				<Column field="CircleTime" header="Время цикла сек."></Column>
                <Column field="OutStuffQuan" header="Списать материала, кг."></Column>
                <Column field="EquipmentStr" header="Станок"></Column>
                <Column field="DateSupposedEnd" header="Выполнить до"></Column> 	                
				<Column field="EndDateProcessing" header="Окончание обработки"></Column>
                <Column field="AreaNextName" header="След. участок"></Column>
                <Column field="PerformerStr" header="Исполнитель"></Column>
                <Column field="AuthorName" header="Автор"></Column>
				<Column field="IsMoscow" header="М"></Column>
                <Column field="IsSerp" header="С"></Column>
                <Column field="DateStartPlan" header="План. дата начала"></Column>
                {hasColumn("DateEndPlan", columns) &&<Column field="DateEndPlan" header="План. дата окончания"></Column>}
            </DataTable>
        </div>
		</>
	);
}
 
export default Main;