import {useContext,createContext,useState,useEffect} from 'react'
import {db} from '../Firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'
const DataContext = createContext()
export const DataContextProvider = ({children}) =>{
    const [data,setData] = useState([])
    const [hasilNilai,setHasilNilai] = useState([])
 const dataGet =async (paramsId)=>{
    const query = await getDocs(collection(db,paramsId))
    query.forEach((q)=>{
      const datas = q.data()
      setData(arr => [...arr , datas]);
    })
  }
  const spesificDataById =async (id) =>{

    console.log(id)
    const response = await getDocs(collection(db,"hasilQuiz"))
    response.forEach((query) =>{
      const datas = query.data()
      setHasilNilai((nilai)=>[...nilai,datas])
      console.log( hasilNilai?.[1])
      const filteredData = hasilNilai?.filter((datas)=> {
   return datas?.idUser === id
    })
      console.log(filteredData)
    }
    )
    
    
  }
    return (
        <DataContext.Provider value={{data,dataGet,spesificDataById,hasilNilai}} >
            {children}
        </DataContext.Provider>
    )
}
export const Data = ()=>{
    return useContext(DataContext)
}


