import './App.css'
import Home from './Pages/MainPages/Home'
import { Route, Routes } from 'react-router-dom'
import Navigator from './Comp/Navigator'
import ParamAndStates from './Pages/MainPages/ParamAndStates'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Navigator/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/ParamAStates' element={<ParamAndStates/>}></Route>
    </Routes>
    </>
  )
}

export default App
