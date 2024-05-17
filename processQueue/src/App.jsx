
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Settings from './Pages/Settings/Settings';
import Main from './Pages/Main/Main';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="settings" element={<Settings/>} />
        <Route path="dist/s" element={<Main />} />
        
      </Routes>
    </BrowserRouter>
      {/* <Settings></Settings> */}
    </>
  )
}

export default App
