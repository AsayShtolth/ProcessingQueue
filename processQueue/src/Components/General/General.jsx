import  { useEffect, useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import './General.css';

const saveChanges=(ingredient, time, monitor, row)=>{
		fetch('https://check.detexline.ru/processingqueue/serp/saveGeneralSettings.php?', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'areaView': ingredient, 'timeView': time, 'row':row, 'monitor':monitor })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
	}
  const getSettings=(monitor, setIngredient, setTime, setRow)=>{
    fetch('https://check.detexline.ru/processingqueue/serp/getGeneralSettings.php', {
  method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ 'monitor': monitor})
})
  .then(response => response.json())
  .then(data => {
	JSON.stringify(data);
	console.log(data);
	setIngredient(data[0]);
	setTime(data[1]);
  setRow(data[2]);
  })
  .catch(error => console.error(error))
  }
const General = (props) => {
	const [ingredient, setIngredient] = useState();
	const [time, setTime] = useState();
  const [row, setRow] = useState('gorizontal');
  let monitor=props.monitor.label;
  useEffect(()=>{
    getSettings(monitor, setIngredient,setTime,setRow);
  },[monitor]);
    useEffect(()=>{
      saveChanges(ingredient, time, monitor,row);
    }, [ingredient, time, row])
console.log(props);
	return ( 
		<>
		<div className="card flex justify-content-center">
          {/* <p>{row}</p> */}
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
                    <RadioButton inputId="ingredient0" name="numAreas" value={0.3} onChange={(e) => setTime(e.value)} checked={time == 0.3} />
                    <label htmlFor="ingredient0" className="ml-2"> 30 секунд</label>
                </div>
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
          <div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
				<span className="font-bold margin-top-25 margin-botton-10">Отображение 2-х  таблиц</span>
                <div className="flex-row align-items-center">
                    <RadioButton inputId="ingredient1" name="numAreas" value={'gorizontal'} onChange={(e) => setRow(e.value)} checked={row == 'gorizontal'} />
                    <label htmlFor="ingredient1" className="ml-2"> Горизонтальное</label>
                </div>
                <div className="flex-row align-items-center">
                    <RadioButton inputId="ingredient2" name="numAreas" value={'vertical'} onChange={(e) => setRow(e.value)} checked={row == 'vertical'} />
                    <label htmlFor="ingredient2" className="ml-2"> Вертикальное</label>
                </div>
            </div>
        </div>
		{/* <Button className='margin-top-25' label="Сохранить изменения" rounded onClick={saveChanges(ingredient, time, monitor, row)}/> */}
		
    </>
	);
}
 
export default General;