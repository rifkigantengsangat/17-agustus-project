import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {db} from '../../Firebase'
import { User } from '../../Context/UserAuth'
import {setDoc,collection,doc,addDoc} from 'firebase/firestore'
import {Data} from '../../Context/Data'
import Swal from 'sweetalert2'
const Question = () => {
  const {user} = User();
  console.log(user)
const {data,dataGet} = Data()
const [nomor,setNomor] = useState(1)
const [message,setMessage] = useState('')
const [poin,setPoin] = useState(0)
  const [nextData,setNextData] = useState(0)
  const {questionID} = useParams()
  const nextPageData = ()=>{
  setNextData(nextData + 1)
    console.log(nextData)
    setNomor(nomor +1)
  }
  const dataUnique = [...new Set(data)]
  console.log(dataUnique)
  const previuesData = ()=>{
    setNextData(nextData<1  ?nextData==0 : nextData - 1)
    setNomor(nomor -1)
  }
  const validate = (answer,pilihan) =>{
    if(answer === pilihan){
      setMessage("anda Benar" )
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: message
      })
      setPoin((poin)=> poin + 10)
    }else{
      setMessage(`Anda Salah` )
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: message
      })
      setPoin((poin)=> poin ===0 ? poin = 0  : poin - 10)
    
       
    }
  }
  const hasilNilai = async ()=>{
    const queryDataAdd = await addDoc(collection(db,'hasilQuiz'),{
      idUser : user.uid,
      email : user.email,
      poin : poin,
      pelajaran : questionID
    })
    console.log(queryDataAdd)
  }
  
useEffect(() => {
dataGet(questionID)
}, [nextData])
  return (
    
    <div className='w-full h-screen bg-gray-200 flex justify-center items-center flex-col'>
     <div className='w-11/12 h-4/5 bg-white shadow-lg mx-auto rounded-lg'>
    <div className='h-32 w-full '>
    
       <h1 className='text-center pt-20 font-bold font-Montserrat '>{nomor}. {data?.[nextData]?.soal}</h1>
       </div>
       <div className='flex flex-col items-center w-full mt-20'>
       <div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer mb-6'  onClick={()=>validate(data?.[nextData]?.answer,data?.[nextData]?.question)}>

        <h1 className='font-Montserrat pl-2'>A. {data?.[nextData]?.question}</h1>
       </div>
       <div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer my-6'  onClick={()=>validate(data?.[nextData]?.answer,data?.[nextData]?.question2)}>

<h1 className='font-Montserrat pl-2'>B. {data?.[nextData]?.question2}</h1>
</div>
<div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer my-6' onClick={()=>validate(data?.[nextData]?.answer,data?.[nextData]?.question3)}>

<h1 className='font-Montserrat pl-2'>C. {data?.[nextData]?.question3}</h1>
</div>
<div className='w-4/6 bg-gray-200 py-4 items-center rounded-lg shadow-md cursor-pointer my-6'  onClick={()=>validate(data?.[nextData]?.answer,data?.[nextData]?.question4)}>

<h1 className='font-Montserrat pl-2'>D. {data?.[nextData]?.question4}</h1>
</div>
<div className='w-full flex justify-around mt-20'>
  <div className=''>
    <button className='block bg-gray-200 w-32 px-3 py-2 rounded-lg font-Montserrat font-medium ' onClick={()=>previuesData()}>Previeus</button>
  </div>
  <div>
    <button className='block bg-gray-200 w-32 px-3 py-2 rounded-lg font-Montserrat font-medium ' onClick={()=>nextPageData()}>Next</button>
  </div>
<button onClick={()=>hasilNilai()}>Add</button>
</div>
       </div>
     </div>
    </div>
  )
}

export default Question