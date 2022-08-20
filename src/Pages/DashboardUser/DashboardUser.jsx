import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Data} from '../../Context/Data'
import {User} from '../../Context/UserAuth'
import { Line,Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
  Chart as ChartJS,
  registerables,
} from "chart.js"
const DashboardUser = () => {
    const {nilaiUser} = Data()
    console.log(nilaiUser);
    const [name,setName] = useState('')
    const [nilaiTertinggi,setNilaiTertinggi] = useState ([])
    const {user} = User()
    const data = {
        labels: ["10", "20", "30", "40", "50", "60","70", "80", "90", "100"],
        datasets: [
          {
            label : 'Nilai Anda',
            data: nilaiTertinggi,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
         
        ]
      };
      useEffect(()=>{
       const SplitName = user?.email.split('@')
        const names = SplitName[0]
        console.log(name)
        setName(names)
      },[])
   
    let result = []
     nilaiUser.map((x)=> {
        result.push(x.poin)
       return result
     })

    useEffect(()=>{
        setNilaiTertinggi(result)
    },[])
    console.log(nilaiTertinggi);
    return (
    <div className='w-screen h-screen'>
        <div className='w-full h-32'>
             <h1>Selamat Datang Di Dashboad Anda {name}</h1>
        </div>
      <div className='w-2/5 h-2/5'>
      <Line  data={data} width={2} height={5} objectfit="contain" options={{maintainAspectRatio: false}}/>
      </div>
    </div>
  )
}

export default DashboardUser