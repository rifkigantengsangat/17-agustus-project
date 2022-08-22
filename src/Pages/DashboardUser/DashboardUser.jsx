import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Data} from '../../Context/Data'
import {User} from '../../Context/UserAuth'
import { Line,Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {Link} from 'react-router-dom'
import Modal from './Modal';
import {
  Chart as ChartJS,
  registerables,
} from "chart.js"
const DashboardUser = () => {
    const {nilaiUser,spesificDataById} = Data()
    const [name,setName] = useState('')
    const [jumlahSubmitUser,setJumlahSubmitUser] = useState([])
    const [nilaiTertinggi,setNilaiTinggi] = useState([])
    const [nilaiRata,setNilaiRata] = useState(0)
    const [nilaiRemedial,setNilaiRemedial] = useState([]) 
    const [open,setOpen] = useState(false)
    const {user} = User()
    const data = {
      labels: ["Jan"],
      datasets: [
        {
          label: "Jumlah Submit",
          data: [ nilaiTertinggi?.[0],nilaiTertinggi?.[1]],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        },
       
      ]
    };
  
       useEffect(()=>{
        spesificDataById(user?.uid) 
        let result = []
        let result2 = []
        let poins = []
        nilaiUser?.map((x)=> {
           result.push(x)
           const poin = x.poin
           poins.push(poin)
           result2.push(x.submit);
           setJumlahSubmitUser(result2);
           const filterRemed = result.filter((x)=> x.poin < 75)
           setNilaiRemedial(filterRemed)
           const average = poins?.reduce((a,b)=>{
            return  a+b
             },0)/result?.length
             setNilaiRata(average)
          return [result,result2,poins]
         
        })
        const SplitName = user?.email?.split('@')
         const names = SplitName?.[0]
         setName(names)
         const nilaiTertinggi = poins?.sort((a,b)=>a-b)[poins.length - 1];
         const nilaiTerendah = poins?.sort((a,b)=>a+b)?.[0]
       console.log(nilaiTerendah);
         console.log(nilaiTertinggi);
         console.log(nilaiTerendah,nilaiTertinggi);
         const nilaiTinggiDanPendek = [nilaiTertinggi,nilaiTerendah]
          setNilaiTinggi(nilaiTinggiDanPendek)
       },[user])
    return (
      <>
    <div className={`w-screen h-screen ${open? 'blur-sm' : 'blur-none'}`  }>
     <div className='w-full h-24 bg-gray-200 flex justify-center items-center '>
      <div className='w-5/6 mx-auto h-3/5 flex justify-between items-center'>
        <div>
          <h1 className='font-bold font-Montserrat text-lg'>ShotQuiz</h1>
        </div>
        <div className='flex'>
        <div className='mx-4'>
        <Link to='/home' className='font-medium font-Montserrat text-md'>Nilai Anda</Link>
        </div>
        <div className='mx-4'>
        <Link to='/home' className='font-medium font-Montserrat text-md'>Nilai Anda</Link>
        </div>
        <div className='mx-4'>
        <Link to='/home' className='font-medium font-Montserrat text-md'>Nilai Anda</Link>
        </div>
        </div>
      </div>
     </div>
     <div className='w-full h-72 flex justify-center items-center '>
      <div>
        <h1 className=' font-light font-Montserrat text-3xl'>Keren Kamu {name},Mamahmu Pasti Bangga Nilai Rata-Ratamu {nilaiRata}</h1>
      </div>
     </div>
     <div className='w-4/5 h-2/5  flex justify-between  mx-auto items-center'>
      <div className='w-96 bg-black h-4/5 rounded-lg flex flex-col items-center justify-center'>

        <h1 className='font-bold font-Montserrat text-lg text-white'>Nilai Rata-Rata </h1>
        <h1 className='font-bold font-Montserrat tex-md pt-2 text-white'>{nilaiRata}</h1>
     
      </div>
      <div className='w-96 bg-gray-200 h-4/5 rounded-lg flex flex-col items-center justify-center '>
     
      <h1 className='font-bold font-Montserrat text-lg text-black'>Jumlah Submit Quiz </h1>
        <h1 className='font-bold font-Montserrat tex-md pt-2 text-black'>{jumlahSubmitUser.length}</h1>
      </div>
      <div className='w-96 bg-black rounded-lg h-4/5 flex flex-col items-center justify-center'>
      <h1 className='font-bold font-Montserrat text-lg text-white'>Jumlah Nilai Remedial </h1>
        <h1 className='font-bold font-Montserrat tex-md pt-2 text-white'>{nilaiRemedial.length}</h1>
        <div className='w-full relative'>
        <button className='bg-white block w-3/5 mx-auto absolute -bottom-20 left-[20%] rounded-lg py-1 ' onClick={()=>{setOpen(true)}}>Lihat Remedial</button>
 
        </div>
             </div>
   
     </div>
    
    </div>
    <div>
    {open&&<Modal setOpen={setOpen} open={open} nilai={nilaiRemedial}/>}
    </div>
    <div className='w-full h-64'>
      <div className='w-3/5 mx-auto h-full bg-black '>
      <Line data={data} width={2} height={5} objectfit="contain" options={{maintainAspectRatio: false}}/>
      </div>
    </div>
    </>
  )
}

export default DashboardUser