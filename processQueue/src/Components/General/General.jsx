import  { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';
const General = () => {
	const [ingredient, setIngredient] = useState('');
	const [time, setTime] = useState(1);
	return ( 
		<>
		<div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
				<span className="font-bold">Отображение</span>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient1" name="numAreas" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="ml-2">1 участок</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="ml-2">2 участка</label>
                </div>
            </div>
        </div>
		<div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
				<span className="font-bold">Время смены участков</span>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient1" name="numAreas" value="1" onChange={(e) => setTime(e.value)} checked={time == 1} />
                    <label htmlFor="ingredient1" className="ml-2">1 минута</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value="3" onChange={(e) => setTime(e.value)} checked={time == 3} />
                    <label htmlFor="ingredient2" className="ml-2">3 минуты</label>
                </div>
				<div className="flex align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value="6" onChange={(e) => setTime(e.value)} checked={time == 6} />
                    <label htmlFor="ingredient2" className="ml-2">6 минут</label>
                </div>
            </div>
        </div>
		<Button label="Сохранить изменения" rounded />
		</>
	);
}
 
export default General;