import {useState,useEffect}from 'react'

const useGetData=(url)=>{
    let [apiData,setApiData]=useState([])
    async function getData() {
        let data=await fetch(url)
        let jsonData=await data.json()
        console.log(jsonData)
        setApiData(jsonData)
}
useEffect(()=>{
    getData()
  },[])
 return apiData
}

export default useGetData




  
