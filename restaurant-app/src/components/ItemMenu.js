import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import { addItem } from '../utills/cartSlice'

function ItemMenu(props) {
   let dispatch=useDispatch()
   let {itemCards,title}=props.eachObj.card.card
    let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
   return( itemCards &&
    <div className=' p-1 w-6/12 m-auto border-b-2 border-gray-200 '     

  
   >
        <div  className=''
    
       >

    <div className='flex justify-between'>
    <div className='flex font-bold'>
        <h1 >{title}</h1>
        <p>({itemCards?.length})</p>
        </div>
       
    <FontAwesomeIcon icon={faAngleDown}  onClick={()=>{
    props.handleItems()
 }} />
 </div>
   </div> 
       {props.showIndex && itemCards?.map((eachItem)=>{
            console.log(eachItem)
            let {name,id,defaultPrice,price,imageId,ratings,description
            }=eachItem.card.info
            return(
               <div>
                
            <div className=' flex justify-between m-auto p-1 border-b-2 border-gray-200'>

                <div className='w-9/12'>
<h1 className=' font-semibold'>{name}</h1>
<p>{price/100||defaultPrice/100}₹</p>
<p>{ratings.aggregatedRating.rating}</p>
<p>{description}</p>
</div> 

<div className='w-3/12'>

 {imageId && < img src={url+imageId} className='  w-28 rounded'/>}

                </div>
                <div>
 <button className='rounded font-semibold p-1 text-center w-28 text-blue-600  border-gray-500 shadow-md ' onClick={()=>{
   dispatch(addItem(eachItem))
 }}>Add</button></div>
                </div>
                </div>
        )
        })}
    </div>
  
   )
}
   

export default ItemMenu
