import React,{useState,useEffect} from 'react'
import {User} from '../../Context/UserAuth'
import Cookies from 'js-cookie'
import {Data} from '../../Context/Data'
import { useNavigate } from 'react-router-dom'
import {setDoc,collection,doc,addDoc} from 'firebase/firestore'
import { db } from '../../Firebase'
const Dashboard = () => {
  const [question,setQuestion] = useState({
    soal : '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    answer:''
  })
  const [tokens,setTokens] = useState(null)
  const navigate = useNavigate()
  const {data} = Data()
  const {user,logout} = User()
  const token = user.accessToken

 useEffect(()=>{
   Cookies.set('token', token)

  const getCookie = Cookies.get('token')
  setTokens(getCookie)
  if(tokens === null){
  //  navigate('/')
   }
 },[tokens])
 const handleLogout = ()=>{
  logout()
  Cookies.destroy()
 }
 const handleChange = (e)=>{
   setQuestion({
    ...question,
    [e.target.name] : e.target.value
   })
 }
 const handleSubmit = async(e)=>{
  e.preventDefault()
  const response = await addDoc(collection(db,"pahlawans"),{
    soal : question.soal,
    question1 : question.question1,
    question2 : question.question2,
    question3 : question.question3,
    question4 : question.question4,
    answer : question.answer

  }) 
 }
  return (
    <div>
      <form onSubmit={handleSubmit}>  
          <input className='border-red-100 border-2' name='soal' onChange={handleChange} placeholder='Masukan Soal Anda'/>
    <input className='border-red-100 border-2' name='question1' onChange={handleChange} placeholder='Masukan Option Answer Anda'/>
    <input className='border-red-100 border-2' name='question2' onChange={handleChange}/>
    <input  className='border-red-100 border-2' name='question3' onChange={handleChange}/>
    <input className='border-red-100 border-2'  name='question4' onChange={handleChange}/>
    <input  className='border-red-100 border-2' name='answer' onChange={handleChange}/>
    <button type='submit'>tambah</button>
    </form>

    </div>
  )
}

export default Dashboard