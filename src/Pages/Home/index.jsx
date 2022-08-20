import React,{useState,useEffect} from 'react'
import {User} from '../../Context/UserAuth'
import Cookies from 'js-cookie'
import {Data} from '../../Context/Data'
import { useNavigate } from 'react-router-dom'
import {MdOutlineDashboard,MdQuiz,MdOutlineLogout} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Avatar from '../../Assets/man.png'
const Home = () => {
    const [tokens,setTokens] = useState(null)
  const navigate = useNavigate()
  const {data} = Data()
  const {user,logout} = User()
 useEffect(()=>{
  if(!user){
    navigate('/')
   }
 },[user])
 console.log(user)
 const handleLogout = ()=>{
  logout()
  navigate('/')
 }
 const gotoQuestion = ( id) =>{
  navigate(`/question/${id}`)
 }

  return (
    <div className='w-screen h-screen bg-[#F7F7F7] flex'>
     <div className='basis-[12%] bg-white shadow-lg'>
    <div className='mt-10 flex flex-col items-center'>
      <h1 className='font-bold text-2xl font-Montserrat'>ShotQuiz</h1>
    </div>
    <div className='flex flex-col  justify-center mt-48'>
       <div className='flex justify-start px-10 items-center bg-gray-200 py-2 shadow-lg w-52 rounded-lg mx-auto my-4'>
        <div>
          <h1><MdQuiz/></h1>
        </div>
        <div className='ml-4'>
          <h1 className='font-bold font-Montserrat text-sm'>Question</h1>
        </div>
       </div>
      
       <div className='flex justify-start px-10 items-center bg-gray-200 py-2 shadow-lg w-52 rounded-lg mx-auto my-4'>
        <div>
          <h1><MdOutlineDashboard/></h1>
        </div>
        <div className='ml-4'>
          <Link to='/history' className='font-bold font-Montserrat text-sm'>History</Link>
        </div>
       </div>
       {user?.uid === import.meta.env.VITE_ID_ADMIN ?   <div className='flex justify-start px-10 items-center bg-gray-200 py-2 shadow-lg w-52 rounded-lg mx-auto my-4'>
        <div>
          <h1><MdOutlineDashboard/></h1>
        </div>
        
        <div className='ml-4'>
          <Link to='/dashboard'className='font-bold font-Montserrat text-sm'>Dashboard</Link>
        </div>
       </div>   :  <div className='hidden  bg-gray-200 py-2 shadow-lg w-52 rounded-lg mx-auto my-4'>
        <div>
          <h1><MdOutlineDashboard/></h1>
        </div>
        
        <div className='ml-4'>
          <h1 className='font-bold font-Montserrat text-sm'>Dashboard</h1>
        </div>
       </div> }
     
       <div className='flex justify-start px-10 items-center bg-gray-200 py-2 shadow-lg w-52 rounded-lg mx-auto my-4'>
        <div>
          <h1><MdOutlineDashboard/></h1>
        </div>
        <div className='ml-4'>
          <h1 className='font-bold font-Montserrat text-sm'>Dashboard</h1>
        </div>
       </div>
    </div>
    <div className='mt-64 flex flex-col justify-center items-center'>
    <div className='flex justify-start px-10 items-center bg-gray-200 py-2 shadow-lg w-52 rounded-lg mx-auto my-4' onClick={()=>handleLogout()}>
        <div>
          <h1><MdOutlineLogout/></h1>
        </div>
        <div className='ml-4'>
          <h1 className='font-bold font-Montserrat text-sm'>Logout</h1>
        </div>
       </div>
    </div>
     </div>
     <div className='basis-[88%] bg-gray-300 pl-3'>
      <div className='w-full h-24 '>
        <div className='flex  justify-between items-center h-full'>
        <div className='w-4/12 ml-6 relative'>
          <input className='w-full bg-white px-2 py-2 rounded-lg ' placeholder='Search Quiz'/>
          <h1 className='absolute top-3 right-3'><AiOutlineSearch/></h1>
        </div>
        <div className='flex items-center mr-10 w-16 justify-around'>
        <div className='hover:bg-white rounded-lg trani'>
         <img src={Avatar}/>
        </div>
        <div className='ml-2'>
          <h1 className='text-md font-bold font-Montserrat'>{user?.email}</h1>
        </div>
        </div>
        </div>
      </div>
      <div className='w-11/12  h-4/5 mx-auto mt-10'>
        <div className='w-full h-32 text-center pt-5 '>
          <h1 className='font-Montserrat font-bold text-2xl'>All Quizz List</h1>
        </div>
        <div className='flex justify-between items-center flex-row '>
         <div className='rounded-xl bg-white shadow-lg w-96 h-96 ml-10 overflow-hidden'>
          <div>
           <img  className=''src={'https://www.zenius.net/blog/wp-content/uploads/2020/01/simbol_matematika_zenius_education1.webp'}/>
         </div>
         <div className='w-full bg-gray-200 h-full'>
          <h1 className='font-bold font-Montserrat text-center pt-4'>Matematika</h1>
          <button className='block w-11/12 mx-auto px-4 py-2 shadow-md rounded-lg font-bold font-Montserrat mt-6 bg-white'id='matematika' onClick={(e)=>gotoQuestion(e.target.id)}>Lihat Soal</button>
         </div>
         </div>

         <div className='rounded-xl bg-white shadow-lg w-96 h-96 overflow-hidden'>
          <div>
            <img className='h-64' src={'https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=1060&t=st=1660397262~exp=1660397862~hmac=ce40a1a518cbc0be4365570f47afffcb2dee15111547667a1fd7bfb384278545'}/>
          </div>
          <div className='w-full h-full bg-gray-200'>
          <h1 className='font-bold font-Montserrat text-center pt-4'>Bahasa Indonesia</h1>
          <button className='block w-11/12 mx-auto px-4 py-2 shadow-md rounded-lg font-bold font-Montserrat mt-6 bg-white' id='bahasaIndonesia' onClick={(e)=>gotoQuestion(e.target.id)}>Lihat Soal</button>
          </div>
         </div>
         <div className='rounded-xl bg-white shadow-lg w-96 h-96 mr-10 overflow-hidden' >
         <div>
            <img className='h-64' src={'https://img.freepik.com/free-vector/group-students-watching-online-webinar_74855-5514.jpg?w=1380&t=st=1660397771~exp=1660398371~hmac=316c1c398e60d4b18e875d5b421e24e525dd7089717f8b16a48236f02ff03777'}/>
          </div>
          <div className='w-full h-full bg-gray-200'>
          <h1 className='font-bold font-Montserrat text-center pt-4'>PPKN</h1>
          <button className='block w-11/12 mx-auto px-4 py-2 shadow-md rounded-lg font-bold font-Montserrat mt-6 bg-white ' id='PPKN' onClick={(e)=>gotoQuestion(e.target.id)}>Lihat Soal</button>
          </div>
         </div>
        </div>
      </div>
     </div>
  
    </div>
  )
}

export default Home