import React,{useState,useEffect} from 'react'
import googleIcon from '../../Assets/google.svg'
import GithubIcon from '../../Assets/GithubIcon.png'
import {User} from '../../Context/UserAuth'
import {Link} from 'react-router-dom'
const RightRegister = () => {
    const {register,user,signInWithGoogle,signInWithGithub,logout} = User()
    const [form,setForm] = useState({
        username:'',
        email : '',
        password : ''
    })
    const handleFormChange = (e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        register(form.email,form.password)
    }
    const loginGoogle = ()=>{
        signInWithGoogle()
    }
    const loginGithub = ()=>{
   signInWithGithub()
    }
    const logoutAccount =()=>{
        logout()
    }
  return (
    <div className='basis-3/5 bg-[#F5F5F5]' style={{  }}>
        <div className='w-11/12  h-32 mx-auto my-16  '>
       <div className='flex justify-end mr-5 items-center'>
       <div className='px-16'>
        <h1 className='font-bold text-sm '>Already have an account ?</h1>
       </div>
       <div className='bg-gray-200 px-4 py-2 rounded-full'>
        <Link to='/' className='font-medium'>Sign In</Link>
       </div>
       </div>
       <div className='flex flex-col justify-center items-center mt-28'>
          <div>
            <h1 className='text-4xl'>Create your Free Account</h1>
          </div>
         <div className='mt-10 '>
            <div className='shadow-lg bg-gray-200 w-96 h-12 flex justify-start items-center px-6 rounded-lg cursor-pointer' onClick={()=>loginGoogle()}>
                <div className='mr-4'>
                    <img src={googleIcon}/>
                </div>
                <div className='ml-10'>
                    <h1 className='font-bold '>Signup With Google</h1>
                </div>
        
            </div>
            <div className='cursor-pointer shadow-lg mt-6 bg-gray-200 w-96 h-12 flex justify-start items-center px-6 rounded-lg' onClick={()=>loginGithub()}>
                <div className='mr-4'>
                    <img src={GithubIcon} className='w-8'/>
                </div>
                <div className='ml-10'>
                    <h1 className='font-bold '>Signup With Github</h1>
                </div>
        
            </div>
           
         </div>
         <div className='mt-10 flex items-center'>
            <div className='w-44 h-1 bg-gray-200'></div>
            <div className='mx-2'>Or</div>
            <div className='w-44 h-1 bg-gray-200'></div>
         </div>
         <div className='mt-10'>
            <div className='flex flex-col'>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label className='font-medium text-sm'>Username</label>
            </div>
            <div>
                <input className='w-96 border-4 border-[#002B5B] px-2 py-2 rounded-xl' onChange={handleFormChange} name='username' />
            </div>
            <div className='mb-2 mt-4'>
                <label className='font-medium text-sm'>Email</label>
            </div>
            <div>
                <input className='w-96 border-4 border-[#002B5B] px-2 py-2 rounded-xl' onChange={handleFormChange} name='email' />
            </div>
            <div className='mb-2 mt-4'>
                <label className='font-medium text-sm'>Password</label>
            </div>
            <div>
                <input type='password' className='w-96 border-4 border-[#002B5B] px-2 py-2 rounded-xl' onChange={handleFormChange} name='password' />
            </div>
            <div className='mb-2 mt-6'>
                <button className='shadow-lg bg-[#002b5b] block w-96 px-3 py-3 rounded-xl text-white font-bold text-md'>Register</button>
            </div>
           </form>
           </div>
             
         </div>
       </div>
      
        </div>
        
    </div>
  )
}

export default RightRegister