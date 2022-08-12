import React from 'react'
import LeftLogin from './LeftLogin'
import RightLogin from './RightLogin'

const Login = () => {
  return (
    <div className='flex w-screen min-h-screen'>
      <LeftLogin/>
      <RightLogin/>
    </div>
  )
}

export default Login