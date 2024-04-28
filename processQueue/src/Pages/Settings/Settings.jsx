import { Card } from 'primereact/card';
import { TabMenu } from 'primereact/tabmenu';
import { useState } from 'react';
import './Setting.css';
import General from '../../Components/General/General';
import Areas from '../../Components/Areas/Areas';
import Columns from '../../Components/Columns/Columns';
const Settings = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	// useEffect(()=>{
	// 	switch(activeIndex){
	// 		case '0':
			
    //     break;
	// 	}
	// },[activeIndex]);
	const items = [
        { label: 'Общие' },
        { label: 'Порядок участков' },
        { label: 'Колонки'}
    ];
	return ( 
		<>
			<Card title="Настройки" className='general'>
				<TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => {setActiveIndex(e.index); console.log(activeIndex)}}/>
			</Card>
		</>
	);
}
 
export default Settings;