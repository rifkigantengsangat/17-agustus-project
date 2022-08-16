import React from 'react'
import {User} from '../../Context/UserAuth'
import {Data} from '../../Context/Data'
const History = () => {
    const {spesificDataById,hasilNilai} = Data();
     const {user} = User();
     const uid = user.uid;

     const button = ()=>{
        spesificDataById(uid)
     }
   console.log(hasilNilai)
  return (
    <div>
        <button onClick={()=>button()}>cari</button>
    </div>
  )
}

export default History