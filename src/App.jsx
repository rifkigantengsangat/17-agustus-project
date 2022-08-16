import {Routes,Route} from 'react-router-dom'
import React from 'react'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home'
import Question from './Pages/Question'
import History from './Pages/History'
function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='/question/:questionID' element={<Question/>}/>
    <Route path='/history' element={<History/>}/>
  </Routes>
  </>
  )
}
export default App
