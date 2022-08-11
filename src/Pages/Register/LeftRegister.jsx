import React from 'react'
import fotoRegister from '../../Assets/register.jpg'
const LeftRegister = () => {
  return (
    <div className='basis-2/5' style={{
        backgroundImage:`url(${fotoRegister})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        backgroundSize:'cover'
     }}></div>
  )
}

export default LeftRegister