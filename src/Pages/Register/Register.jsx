import React,{useState,useEffect} from 'react'
import {User} from '../../Context/UserAuth'
import LeftRegister from './LeftRegister'
import RightRegister from './RightRegister'
const Register = () => {
    const [form,setForm] = useState({
        name : '',
        email : '',
        password : '',

    })

  return (
  <div className='flex w-sceen min-h-screen'>
 <LeftRegister/>
 <RightRegister/>
  </div>
  )
}

export default Register