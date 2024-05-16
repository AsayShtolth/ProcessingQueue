import  { useEffect, useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';
import './General.css';

const saveChanges=(ingredient, time)=>{
		fetch('https://check.detexline.ru/processingqueue/api/saveGeneralSettings.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'areaView': ingredient, 'timeView': time })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
	}
const General = () => {
	const [ingredient, setIngredient] = useState();
	const [time, setTime] = useState();
  useEffect(()=>{
  fetch('https://check.detexline.ru/processingqueue/api/getGeneralSettings.php', {
  method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
//   body: JSON.stringify({ 'areaView': ingredient, 'timeView': time })
})
  .then(response => response.json())
  .then(data => {
	JSON.stringify(data);
	console.log(data);
	setIngredient(data[0]);
	setTime(data[1]);
  })
  .catch(error => console.error(error))
  });
    useEffect(()=>{
      saveChanges(ingredient, time);
    }, [ingredient, time])

	return ( 
		<>
		<div className="card flex justify-content-center">
          
            <div className="flex flex-wrap gap-3">
				<span className="font-bold margin-top-25 margin-botton-10">Отображение</span>
                <div className="flex-row align-items-center gap-3">
                    <RadioButton inputId="ingredient1" name="numAreas" value={1} onChange={(e) => setIngredient(e.value)} checked={ingredient == 1} />
                    <label htmlFor="ingredient1" className="ml-2 margin-botton-10"> 1 участок</label>
                </div>
                <div className="flex-row align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value={2} onChange={(e) => setIngredient(e.value)} checked={ingredient == 2} />
                    <label htmlFor="ingredient2" className="ml-2"> 2 участка</label>
                </div>
            </div>
        </div>
		<div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
				<span className="font-bold margin-top-25 margin-botton-10">Время смены участков</span>
                <div className="flex-row align-items-center">
                    <RadioButton inputId="ingredient1" name="numAreas" value={1} onChange={(e) => setTime(e.value)} checked={time == 1} />
                    <label htmlFor="ingredient1" className="ml-2"> 1 минута</label>
                </div>
                <div className="flex-row align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value={3} onChange={(e) => setTime(e.value)} checked={time == 3} />
                    <label htmlFor="ingredient2" className="ml-2"> 3 минуты</label>
                </div>
				<div className="flex-row align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value={6} onChange={(e) => setTime(e.value)} checked={time == 6} />
                    <label htmlFor="ingredient2" className="ml-2"> 6 минут</label>
                </div>
            </div>
        </div>
		<Button className='margin-top-25' label="Сохранить изменения" rounded onClick={saveChanges(ingredient, time)}/>
		
    </>
	);
}
 
export default General;