import React from 'react'

const Modal = ({setOpen,nilai}) => {
  return (
    <div className={`z-10 absolute top-[20%] right-[50%] translate-x-1/2 translate-y-1/2 w-2/5 h-96 bg-white shadow-lg  rounded-lg transition-all duration-700 `}>
       <div className='w-full h-12'>
        <button className='text-right w-full pr-4 font-bold block' onClick={()=> setOpen(false)}>X</button>
       </div>
       <div className='w-full h-full '>
        <div className ='w-4/5 h-4 mx-auto my-2 flex justify-between items-center'>
        <div>
         <h1 className ='font-bold font-Montserrat '>Mata Pelajaran</h1>            
        </div>
         <div>
            <h1 className='font-bold font-Montserrat '>Nilai</h1>
         </div>
        </div>
        {nilai?.map((e,i)=>{
            return (
                <div key={i} className='w-4/5 h-10 mx-auto my-1 flex justify-between items-center'>
                  <div>
         <h1>{e?.pelajaran}</h1>            
        </div>
         <div>
            <h1>{e?.poin}</h1>
         </div>
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default Modal