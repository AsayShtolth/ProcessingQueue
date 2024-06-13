
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Settings from './Pages/Settings/Settings';
import Main from './Pages/Main/Main';


function App() {
  return (
    <>
    <Settings></Settings>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/dist" element={<Settings/>} />
        <Route path="dist/s" element={<Main />} />
        
      </Routes>
    </BrowserRouter> */}
      {/* <Settings></Settings> */}
    </>
  )
}

export default App