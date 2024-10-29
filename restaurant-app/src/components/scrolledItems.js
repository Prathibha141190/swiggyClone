import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useGetData from '../utills/useGetData';

function ScrolledItems (){
let url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

let imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"  

let scrollData=useGetData(url)

let scrolledItemsArr=scrollData?.data?.cards[0].card?.card?.imageGridCards?.info

console.log(scrolledItemsArr)

return(
<div>
<div className='d-flex flex-col '>
<div className="p-2 ">
    <h1 className="font-bold font-sans text-2xl">What's on your mind?</h1>

      
    <div className="items-center p-24 pb-1 pt-2">
               <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={8}
        navigation
    
      
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {scrolledItemsArr?.map((each)=>{
              let {imageId,description}=each
        return (
            
          <div className="h-36 w-52 ">
<SwiperSlide><img src={imgUrl+imageId} className='h-36 w-44'/> </SwiperSlide>

</div>
        )
        })

}
    </Swiper>
        
   
        </div>
      
</div>
</div>
</div>
)
}
export default ScrolledItems