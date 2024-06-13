import { Card } from 'primereact/card';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import './Setting.css';
import General from '../../Components/General/General';
import Areas from '../../Components/Areas/Areas';
import Columns from '../../Components/Columns/Columns';
const Settings = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeIndexMonitor, setActiveIndexMonitor] = useState(0);
	// useEffect(()=>{
	// 	switch(activeIndex){
	// 		case '0':
			
    //     break;
	// 	}
	// },[activeIndex]);
	const itemsMonitor = [
        { label: 'Администрация ДетексЛайн Серпухов' },
        { label: 'Администрация Детекслайн Москва' },
		{ label: 'Администрация Декор Серпухов' },
        { label: 'Инженеры'}
    ];
	const items = [
        { label: 'Общие' },
        { label: 'Порядок участков' },
        { label: 'Колонки'}
    ];
	return ( 
		<>
			<Card title="Настройки" className='general'>
				<TabMenu model={itemsMonitor} activeIndex={activeIndexMonitor} onTabChange={(e) => {setActiveIndexMonitor(e.index); console.log(activeIndexMonitor)}}/>	
				<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => {setActiveIndex(e.index); console.log(activeIndex)}}/>
				{activeIndex==0&&<General monitor={itemsMonitor[activeIndexMonitor] }></General>}
				{activeIndex==1&&<Areas monitor={itemsMonitor[activeIndexMonitor] }></Areas>}
				{activeIndex==2&&<Columns monitor={itemsMonitor[activeIndexMonitor] }></Columns>}			
			</Card>
		</>
	);
}
 
export default Settings;