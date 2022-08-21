import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../../Firebase'
import { User } from '../../Context/UserAuth'
import {setDoc,collection,doc,addDoc} from 'firebase/firestore'
import {Data} from '../../Context/Data'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
const Question = () => {
  const navigate = useNavigate()
  const {user} = User();
const {data,dataGet} = Data()
const [nomor,setNomor] = useState(1)
const [message,setMessage] = useState('')
const [finished,setFinished] = useState("Next")
const [showButton,setShowButton] = useState(false)
const [display,setDisplay] = useState("block")
const [poin,setPoin] = useState(0)
  const [nextData,setNextData] = useState(0)
  const [disable,setDisable] =useState(true)
  
  const {questionID} = useParams()
  const nextPageData = ()=>{
  setNextData(nextData + 1)
    setNomor(nomor +1)
    if(nextData >=4){
      setFinished("Finished")
      setShowButton(true)
      setDisplay("none")
    }
  }
  const dataUnique = [...new Set(data)]
  const previuesData = ()=>{
    setNextData(nextData<1  ?nextData==0 : nextData - 1)
    setNomor(nomor -1)
  }
  const validate = (answer,pilihan) =>{
    if(answer === pilihan){
      setMessage("anda Benar" )
      console.log(message)
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: "Kamu Benar"
      })
     
      setPoin((poin)=> poin + 10)
    }else{
      setMessage(`Anda Salah` )
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: "kamu Salah"
      })
      setPoin((poin)=> poin ===0 ? poin = 0  : poin - 10)
     
       
    }
  }
  
  const hasilNilai = async ()=>{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your Quiz Has Been Saved',
      showConfirmButton: false,
      timer: 1500
    })
    const date = new Date();
const formatDate = date.toLocaleDateString('en-US');
  await addDoc(collection(db,'hasilQuiz'),{
      idUser : user.uid,
      email : user.email,
      poin : poin,
      pelajaran : questionID,
      waktu : formatDate,
      submit :true,
    })
       setTimeout(() => {
        navigate('/home')
       }, 2000);
  }
  const finishedQuestion =()=>{
 if(nextData === 5){
  setDisable(false)
 }

  }
useEffect(() => {
dataGet(questionID)
finishedQuestion()
}, [nextData,disable,message,finished,questionID])
  return (
    
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center flex-col'>
     <div className='w-11/12 h-5/6 bg-white shadow-lg mx-auto rounded-lg'>
    <div className='h-32 w-full '>
    
       <h1 className='text-center pt-20 font-bold font-Montserrat '>{nomor}. {dataUnique?.[nextData]?.soal}</h1>
       </div>
       <div className='flex flex-col items-center w-full mt-20'>
       <div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer mb-6'  onClick={()=>validate(dataUnique?.[nextData]?.answer,dataUnique?.[nextData]?.question)}>

        <h1 className='font-Montserrat pl-2'>A. {dataUnique?.[nextData]?.question}</h1>
       </div>
       <div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer my-6'  onClick={()=>validate(dataUnique?.[nextData]?.answer,dataUnique?.[nextData]?.question2)}>

<h1 className='font-Montserrat pl-2'>B. {dataUnique?.[nextData]?.question2}</h1>
</div>
<div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer my-6' onClick={()=>validate(dataUnique?.[nextData]?.answer,dataUnique?.[nextData]?.question3)}>

<h1 className='font-Montserrat pl-2'>C. {dataUnique?.[nextData]?.question3}</h1>
</div>
<div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer my-6'  onClick={()=>validate(dataUnique?.[nextData]?.answer,dataUnique?.[nextData]?.question4)}>

<h1 className='font-Montserrat pl-2'>D. {dataUnique?.[nextData]?.question4}</h1>
</div>
<div className='w-full flex justify-around mt-20'>
  <div className=''>
    <button className='block bg-gray-200 w-32 px-3 py-2 rounded-lg font-Montserrat font-medium ' onClick={()=>previuesData()}>Previeus</button>
  </div>
  <div>
    <button className='block bg-gray-200 w-32 px-3 py-2 rounded-lg font-Montserrat font-medium 'style={{ display : display }} onClick={()=>nextPageData()}>{finished}</button>
  </div>
</div>
       </div>
       <div className='w-full flex flex-col items-center mt-4'>
        {showButton &&  
       <button onClick={()=>hasilNilai()}  disabled={disable}className='w-64 bg-gray-200 px-2 py-2 rounded-lg font-Montserrat font-bold'>Finish</button>
        }

       </div>
     </div>
    </div>
  )
}

export default Question