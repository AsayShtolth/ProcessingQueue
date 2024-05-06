
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Settings from './Pages/Settings/Settings';
import Main from './Pages/Main/Main';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="dist/settings" element={<Settings/>} />
        <Route path="dist/" element={<Main />} />
        
      </Routes>
    </BrowserRouter>
      {/* <Settings></Settings> */}
    </>
  )
}

export default App
