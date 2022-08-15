import React,{useState,useEffect}from 'react'
import googleIcon from  '../../Assets/google.svg'
import GithubIcon from  '../../Assets/GithubIcon.png'
import { User } from '../../Context/UserAuth'
import { Link, useNavigate } from 'react-router-dom'
const LeftLogin = () => {
  const navigate = useNavigate()
  const {Login,signInWithGoogle,sigInWithGithub} = User()
  const [form,setForm] = useState({
    email : '',
    password : ''
})
  const handleFormChange = (e)=>{
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
}
  const handleSubmit = (e) => {
    e.preventDefault()
    Login(form.email,form.password)
    navigate('/home')
  }
  const loginGoogle = ()=>{
    signInWithGoogle()
    navigate('/home')
    
}
const loginGithub = ()=>{
  sigInWithGithub()
navigate('/dashboard')
}
  return (
    <div className='basis-1/2 bg-[#F5F5F5] '>
        <div className='flex justify-center items-center flex-col mt-10 h-5/6'>
        <div className='w-10/12 mx-auto text-center h-4/6'>
           <div className=''>
            <h1 className='text-2xl font-bold '>Welcome to the ShotQuiz</h1>
           </div>
           <div className=' mt-10 h-5/6'>
          <div className=''>
            <h1 className='font-medium text-lg '>Sign In </h1>
          </div>
          <div className='mt-4'>
            <div className='flex flex-col items-center'>
          <form onSubmit={handleSubmit}>
            <div className='mb-2 mt-4'>
                <label className='font-medium text-sm'>Email</label>
            </div>
            <div>
                <input className='w-96 border-4 border-[#002B5B] px-2 py-2 rounded-xl' onChange={handleFormChange} name='email' />
            </div>
            <div className='mb-2 mt-4'>
                <label className='font-medium text-sm text-left'>Password</label>
            </div>
            <div>
                <input className='w-96 border-4 border-[#002B5B] px-2 py-2 rounded-xl' onChange={handleFormChange} name='password' />
            </div>
            <div className='mb-2 mt-6'>
                <button className='shadow-lg bg-[#002b5b] block w-96 px-3 py-3 rounded-xl text-white font-bold text-md'>Login</button>
            </div>
           </form>
           </div>
             
         </div>
         <div className='mt-10 flex items-center justify-around h-32'>
            <div className='shadow-lg bg-gray-200 w-96 h-12 flex justify-start items-center px-6 rounded-lg cursor-pointer' onClick={()=> loginGoogle()}>
                <div className='mr-4'>
                    <img src={googleIcon}/>
                </div>
                <div className='ml-10'>
                    <h1 className='font-bold '>Signin With Google</h1>
                </div>
        
            </div>
            <div className='cursor-pointer shadow-lg mt-6 bg-gray-200 w-96 h-12 flex justify-start items-center px-6 rounded-lg mb-6' onClick={()=> loginGithub()}>
                <div className='mr-4'>
                    <img src={GithubIcon} className='w-8'/>
                </div>
                <div className='ml-10'>
                    <h1 className='font-bold '>Signin With Github</h1>
                </div>
        
            </div>
           
         </div>
         <div className='w-full'>
            <h1 className='font-Montserrat font-medium'>don't have an account yet? <Link to='/register' className='font-bold'>Register now</Link></h1>
         </div>
           </div>
        </div>
        </div>
    </div>
  )
}

export default LeftLogin