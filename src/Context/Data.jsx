import {useContext,createContext,useState,useEffect} from 'react'
import {db} from '../Firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'

const DataContext = createContext()

export const DataContextProvider = ({children}) =>{
    const [data,setData] = useState([])
 const [name,setName] = useState("roflo")
    const dataGet =async ()=>{
        const query = await getDocs(collection(db,"pahlawans"))
        query.forEach((q)=>{
          setData([...data,q.data()])
      
        })
      
      }
useEffect(() => {
dataGet()
}, [])

    return (
        <DataContext.Provider value={{data,name}} >
            {children}
        </DataContext.Provider>
    )
}
export const Data = ()=>{
    return useContext(DataContext)
}