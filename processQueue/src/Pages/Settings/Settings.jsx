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
        { label: 'Инженеры'},
		{ label: '1'},
		{ label: '2'},
		{ label: '3'},
		{ label: '4'},
		{ label: '5'},
		{ label: '6'},
		{ label: '7'},
		{ label: '8'},
		{ label: '9'},
		{ label: '10'},
		{ label: '11'},
		{ label: '12'},
		{ label: '13'},
		{ label: '14'},
		{ label: '15'},
		{ label: '16'},
		{ label: '17'},
		{ label: '18'},
		{ label: '19'},
		{ label: '20'},
		{ label: '21'},
		{ label: '22'},
		{ label: '23'},
		{ label: '24'},
		{ label: '25'},
		{ label: '26'},
		{ label: '27'},
		{ label: '28'},
		{ label: '29'},
		{ label: '30'},
		{ label: '31'},
		{ label: '32'},
		{ label: '33'},
		{ label: '34'},
		{ label: '35'},
		{ label: '36'},
		{ label: '37'},
		{ label: '38'},
		{ label: '39'},
		{ label: '40'},
		{ label: '41'},
		{ label: '42'},
		{ label: '43'},
		{ label: '44'},
		{ label: '45'},
		{ label: '46'},
		{ label: '47'},
		{ label: '48'},
		{ label: '49'},
		{ label: '50'},



		
    ];
	const items = [
        { label: 'Общие' },
        { label: 'Порядок участков' },
        { label: 'Колонки'}
    ];
	return ( 
		<>
			<Card title="Настройки" className='general'>
				<TabMenu style={{flexWrap: 'wrap'}} model={itemsMonitor} activeIndex={activeIndexMonitor} onTabChange={(e) => {setActiveIndexMonitor(e.index); console.log(activeIndexMonitor)}}/>	
				<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => {setActiveIndex(e.index); console.log(activeIndex)}}/>
				{activeIndex==0&&<General monitor={itemsMonitor[activeIndexMonitor] }></General>}
				{activeIndex==1&&<Areas monitor={itemsMonitor[activeIndexMonitor] }></Areas>}
				{activeIndex==2&&<Columns monitor={itemsMonitor[activeIndexMonitor] }></Columns>}			
			</Card>
		</>
	);
}
 
export default Settings;