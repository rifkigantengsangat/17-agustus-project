import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Data} from '../../Context/Data'
import {User} from '../../Context/UserAuth'
import { Line,Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {Link} from 'react-router-dom'
import {
  Chart as ChartJS,
  registerables,
} from "chart.js"
const DashboardUser = () => {
    const {nilaiUser,spesificDataById} = Data()
    const [name,setName] = useState('')
    const [jumlahSubmitUser,setJumlahSubmitUser] = useState([])
    const [nilaiRata,setNilaiRata] = useState(0)
    const {user} = User()
    const data = {
        labels: ["10", "20", "30", "40", "50", "60","70", "80", "90", "100"],
        datasets: [
          {
            label : 'Nilai Anda',
            
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
         
        ]
      };
       useEffect(()=>{
        spesificDataById(user?.uid) 
        let result = []
        nilaiUser?.map((x)=> {
          const poin = x.poin
           result.push(poin)
           setJumlahSubmitUser(x.submit)
           const average = result?.reduce((a,b)=>{
            return  a+b
             },0)/result?.length
             setNilaiRata(average)
          return result
        })
        const SplitName = user?.email?.split('@')
         const names = SplitName?.[0]
         setName(names)
       },[user,nilaiUser])
    return (
    <div className='w-screen h-screen'>
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
      <div className='w-96 bg-gray-200 h-4/5 rounded-lg '>
     
      <h1 className='font-bold font-Montserrat text-lg text-white'>Jumlah Submit Quiz </h1>
        <h1 className='font-bold font-Montserrat tex-md pt-2 text-white'>{}</h1>
      </div>
      <div className='w-96 bg-gray-200 rounded-lg h-4/5  '>
      <h1>Ok</h1>
      </div>
     </div>
    </div>
  )
}

export default DashboardUser