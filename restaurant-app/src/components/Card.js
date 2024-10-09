import React from 'react'
import { useContext } from 'react'
import {context} from '../App.js'


function Card(props) {
let name=useContext(context)
      let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div className="p-2 bg-gray-100 m-2 w-72 h-58 hover:scale-95" >
    <img src={url+props.eachresta.info.cloudinaryImageId}   className="rounded h-48 w-72 shadow"/>
  <h4  className='font-semibold'>{props.eachresta.info.name}</h4>
  <p >{props.eachresta.info.avgRating}</p>
  <p>{props.eachresta.info.areaName}</p>
 
  <p className=' max-w-full '>{props.eachresta.info.cuisines.join(",")}</p>
  <p>{name}</p>
  </div>
  )
}

export default Card

export function HOC(Card){
return(props)=>{
  return <div className=''>
    <h4 className='bg-green-500 rounded text-white text-center p-1 left-2 absolute '>Veg</h4>
    <Card {...props}/>
   
  </div>
}
}
