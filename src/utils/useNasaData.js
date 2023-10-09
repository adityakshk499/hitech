import { useState , useEffect } from "react";


const useNasaData = () => {
    const[nasaData , setNasaData ]   = useState([])

    useEffect(()=> {
        fetchData()
  
  
      },[])
  
     const fetchData = async ()=> {
       const data  =  await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2023-09-01') 
        const json = await data.json()
        setNasaData(json)
  
      }

      return nasaData;
}


export default useNasaData ; 