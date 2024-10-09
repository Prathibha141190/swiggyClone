import React ,{useState}from 'react'
import { useParams, } from 'react-router-dom' 
import ItemMenu from './ItemMenu'
import useGetdata from '../utills/useGetData'



function RestaurantMenu() {
  
  let {restId}=useParams()
  let [showItem,setShowItem]=useState(null) 
 

  let api_url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+restId
  let jsonData=useGetdata(api_url)
    console.log(jsonData)

    let eachRestaurantDetails=jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
   console.log(eachRestaurantDetails)
    

 

  return (
    <div>
   {
      eachRestaurantDetails?.map((eachObj,index)=>{
     function handleItems(){
showItem!==index? setShowItem(index): setShowItem(null)
       }
        return  <ItemMenu key={index} eachObj={eachObj} showIndex={ showItem===index?true:false} handleItems={handleItems}/>
              })
            }
    </div>
  )

}
export default RestaurantMenu
