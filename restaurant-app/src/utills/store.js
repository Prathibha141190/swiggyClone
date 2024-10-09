import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

let store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        
    }
})

export default store