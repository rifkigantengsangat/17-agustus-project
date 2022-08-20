import React,{useState,useEffect} from 'react'
import {Data} from '../../Context/Data'
import { Line,Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import {
  Chart as ChartJS,
  registerables,
} from "chart.js"

const Dashboard = () => {
  const {jumlahSubmit,getValueSubmit} = Data()
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Jumlah Submit",
        data: [jumlahSubmit.length, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
     
    ]
  };
  const datas = {
    labels: ["Jumlah Submit", "Total Quiz", "III"],
    datasets: [
      {
        data: [jumlahSubmit.length, 3,3],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 2
      }
    ]
  };
  useEffect(()=>{
    getValueSubmit()
  },[])
 
  return (
    <div className='w-screen h-screen bg-[#F4F6FF] flex'>
      <div className='basis-[10%] bg-white shadow-lg'>
        <div className='mt-6'>
          <h1 className='text-center font-bold font-Montserrat'>Dashboard</h1>
        </div>
        <div className='flex flex-col  items-center h-96 mt-20'>
          <div className='w-4/5 mx-auto bg-[#F4F6FF] px-2 py-1 rounded-lg shadow-md text-center my-3'>
          <h1>Ok</h1>         
          </div>
          <div className='w-4/5 mx-auto bg-[#F4F6FF] px-2 py-1 rounded-lg shadow-md text-center my-3'>
          <h1>Ok</h1>         
          </div>
          <div className='w-4/5 mx-auto bg-[#F4F6FF] px-2 py-1 rounded-lg shadow-md text-center my-3'>
          <h1>Ok</h1>         
          </div>
        </div>
      </div>
      <div className='basis-[70%] mx-12 '>
        <div className='mt-6 w-full h-80'>
        <div className='flex flex-row items-center justify-between w-full h-full '>
          <div className='h-3/6 bg-white w-72 shadow-lg rounded-lg pl-4'>
          <div className='h-3/6 pt-14'>
          <h1 className='font-bold font-Montserrat'>Jumlah Submit</h1>
          </div>
          <div className='h-3/6'>
          <h1>{jumlahSubmit.length}</h1>
          </div>
          </div>
          <div className='h-3/6 bg-white w-72 shadow-lg rounded-lg pl-4'>
          <div className='h-3/6 pt-14'>
          <h1 className='font-bold font-Montserrat'>Jumlah Quiz</h1>
          </div>
          <div className='h-3/6'>
          <h1>3</h1>
          </div>
          </div>
          <div className='h-3/6 bg-white w-72 shadow-lg rounded-lg'>
           
          </div>
          <div className='h-3/6 bg-white w-72 shadow-lg rounded-lg'>

          </div>
        </div>
        </div>
        <div className='h-3/6 w-full flex flex-row justify-between items-center'>
          <div className='w-3/6 h-full  '>
        <Line  data={data} width={2} height={5} objectfit="contain" options={{maintainAspectRatio: false}}/>
        </div>
        <div>
        <Doughnut data={datas}/>
        </div>
        </div>
      </div>
      <div className='basis-[20%]'>
       
      </div>
    </div>
  )
}

export default Dashboard