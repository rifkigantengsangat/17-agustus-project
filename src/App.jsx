import { useState,useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import {db} from './Firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'
import Login from './Pages/Login'
import Register from './Pages/Register/Register'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home'
function App() {
  const [data,setData] = useState([])


  return (
  <>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='home' element={<Home/>}/>
  </Routes>
  </>
  )
}

export default App
