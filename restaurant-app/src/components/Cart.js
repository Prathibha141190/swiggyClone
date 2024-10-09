import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../utills/cartSlice';

function Cart() {
  let dispatch=useDispatch()
  let url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  let items=useSelector((state)=>{
    return (state.cart.cartData)})
  console.log(items?.card?.info)
  return items.length===0 ? <div className='flex justify-center items-center h-36 font-semibold text-green-700'><h2>Your Cart is Empty</h2></div> : (

    <div>
     {items?.map((eachItem)=>{
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

 < img src={url+imageId} className='  w-28 rounded'/>
 <button className='rounded font-semibold p-2 text-center w-28 text-red-500 shadow-md border-gray-800 ' onClick={()=>
  dispatch(deleteItem(id))
 }>Delete</button>
   </div>

    </div>
    </div>
      )
        })}
</div>
)
}
export default Cart
