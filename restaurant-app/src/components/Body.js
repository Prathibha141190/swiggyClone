
import React, { useState,useEffect } from "react"
import '../App.css'
import Card, { HOC } from "./Card"
import {Link} from 'react-router-dom'
import useGetdata from '../utills/useGetData'
import ScrolledItems from './scrolledItems'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Body(){

let [searchData,setSearchData]=useState('')
let [filterData,setFilterData]=useState([])
let HOCCard=HOC(Card)

let url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

let restData=useGetdata(url)
    let restauranArr=restData?.data?.cards[4].card?.card?.gridElements?.infoWithStyle.restaurants




    
let imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"

let filterRestaur=restauranArr?.filter((eachItem)=>{
    return eachItem.info.name.toUpperCase().includes(searchData.toUpperCase())
})

useEffect(()=>{
    setFilterData(restauranArr)
},[restData])

return(
<div>
<div className="p-1" > 
<input type="text" className='border-1 border-gray-500 rounded' onChange={(e)=>{
    setSearchData(e.target.value)
}}/>
<button onClick={()=>{
    setFilterData(filterRestaur)
}} className="bg-blue-500 rounded-md  p-1 m-1">search</button>
<button onClick={()=>{
    let ratedRestaur=restauranArr?.filter((eitem)=>{
        return eitem.info.avgRating>4.5
    })
setFilterData(ratedRestaur)
}} className="bg-blue-500 rounded-md  p-1 m-1 ">topRatedRestaurants</button>
</div>

<ScrolledItems />


<div className="d-flex flex-wrap p-1">
{filterData?.map((eachresta)=>{
             console.log(eachresta)     
        return( 
          
           <Link to={"/restaurant/"+eachresta.info.id}>{eachresta.info.veg?<HOCCard eachresta={eachresta} />:<Card eachresta={eachresta}/>}</Link>)
        })}
    </div>
    </div>
    
)


}
export default Body