import {useContext,createContext,useState,useEffect} from 'react'
import {db} from '../Firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'
const DataContext = createContext()
export const DataContextProvider = ({children}) =>{
    const [data,setData] = useState([])
 const dataGet =async (paramsId)=>{
    const query = await getDocs(collection(db,paramsId))
    query.forEach((q)=>{
      const datas = q.data()
      setData(arr => [...arr , datas]);
    })
  }
    return (
        <DataContext.Provider value={{data,dataGet}} >
            {children}
        </DataContext.Provider>
    )
}
export const Data = ()=>{
    return useContext(DataContext)
}