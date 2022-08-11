import { useState,useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import {db} from './Firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'
import Login from './Pages/Login'
import Register from './Pages/Register/Register'
function App() {
  const [data,setData] = useState([])
const dataGet =async ()=>{
  const query = await getDocs(collection(db,"pahlawans"))
  query.forEach((q)=>{
    setData([...data,q.data()])

  })

}
console.log(data)
useEffect(()=>{
dataGet()

},[])
  return (
  <>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
  </>
  )
}

export default App
