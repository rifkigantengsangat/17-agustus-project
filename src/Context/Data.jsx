import {useContext,createContext,useState,useEffect} from 'react'
import {db} from '../Firebase'
import {collection,addDoc,getDocs,doc,deleteDoc} from 'firebase/firestore'
const DataContext = createContext()
export const DataContextProvider = ({children}) =>{
    const [data,setData] = useState([])
    const [hasilNilai,setHasilNilai] = useState([])
    const [nilaiUser,setNilaiUser] = useState([])
 const dataGet =async (paramsId)=>{
    const query = await getDocs(collection(db,paramsId))
    query.forEach((q)=>{
      const datas = q.data()
      setData(arr => [...arr , datas]);
    })
  }
  const spesificDataById =async (id) =>{
    let result = []
    const response = await getDocs(collection(db,"hasilQuiz"))
     response.forEach((query) =>{
      const datas = query.data()
       if(datas?.idUser ===id){
        result.push(datas)
       }
       return result
    }
    )
    setNilaiUser(result)
  }
  const deleteDocument = (id)=>{
   await deleteDoc(doc(db,"hasilQuiz",id))
  }
    return (
        <DataContext.Provider value={{data,dataGet,spesificDataById,hasilNilai,nilaiUser}} >
            {children}
        </DataContext.Provider>
    )
}
export const Data = ()=>{
    return useContext(DataContext)
}


