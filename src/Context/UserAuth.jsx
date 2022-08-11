import {useContext,createContext,useState,useEffect} from 'react'
import {signInWithEmailAndPassword ,getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signOut,getRedirectResult,signInWithRedirect,onAuthStateChanged,GithubAuthProvider} from 'firebase/auth'
const UserAuthContext = createContext()

export const  UserAuthContextProvider = ({children}) =>{
const [user,setUser]= useState({})
const [dataReg,setDataReg] = useState({})
const auth = getAuth();
const provider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const register = async(email,password)=>{
    const response = await createUserWithEmailAndPassword(auth,email,password)
    const data = response.user
    setDataReg(data)
    console.log(dataReg)
}
const Login =async(email,password)=>{
const response = await signInWithEmailAndPassword(auth,email,password)
const result = response.user
console.log(result)
}
const signInWithGoogle =async ()=>{
    try {
        const response = await signInWithRedirect(auth,provider)
        const result  = await response.user
        console.log(result.data)

    } catch (error) {
        console.log(error)
    }
}
const signInWithGithub = async()=>{
try {
    const response = await signInWithRedirect(auth,githubProvider)
    const result  = response.user 
    console.log(result)
} catch (error) {
    console.log(error)
}
}
console.log(dataReg);
const logout = async()=>{
await signOut(auth)
}
useEffect(()=>{
  const subs = onAuthStateChanged(auth,(currUser)=>{
    setUser(currUser)
  })
  return()=>{
    subs()
  }
},[])
console.log(user)
return (
    <UserAuthContext.Provider value={{logout,user,setUser,register,signInWithGoogle,signInWithGithub}}>
    {children}
    </UserAuthContext.Provider>
)
}

export const User = ()=>{
    return useContext(UserAuthContext)
}

