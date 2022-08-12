import React,{useState,useEffect} from 'react'
import {User} from '../../Context/UserAuth'
import Cookies from 'js-cookie'
import {Data} from '../../Context/Data'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [tokens,setTokens] = useState(null)
  const navigate = useNavigate()
  const {data} = Data()
  const {user,logout} = User()
  const token = user.accessToken
 console.log(data);

 useEffect(()=>{
   Cookies.set('token', token)

  const getCookie = Cookies.get('token')
  setTokens(getCookie)
  if(tokens === null){
  //  navigate('/')
   }
 },[tokens])
 const handleLogout = ()=>{
  logout()
  Cookies.destroy()
 }
  return (
    <div>
        {data.map((e)=>{
            console.log(e)
        })}
    </div>
  )
}

export default Home