import React, { useEffect } from 'react'
import {User} from '../../Context/UserAuth'
import {Data} from '../../Context/Data'
import { useNavigate } from 'react-router-dom'
const History = () => {
  const navigate = useNavigate()
    const {spesificDataById,hasilNilai,nilaiUser} = Data();
     const {user} = User();
  useEffect(()=>{
    spesificDataById(user.uid)
  },[user])
  return (
    <div>
      <button onClick={()=> navigate('/home')}>Back To Home</button>
      {nilaiUser.length>0 ||nilaiUser.length===1 ?nilaiUser?.map((e,index)=>{
      return (
        <div key={index}>
          <h1>{e.pelajaran}</h1>
          <h1>{e.email}</h1>
          <h1>{e.poin}</h1>
        </div>
      )
      }) : <>Kosong Mang</>}
    </div>
  )
}

export default History