import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

let cartSlice =createSlice({
    name:'cart',
    initialState:{
        cartCount:0,
        cartData:[]

    },
    reducers:{
        increaseCount:(state,action)=>{
state.cartCount=state.cartCount+1
        },
        addItem:(state,action)=>{
            console.log(action.payload)
            state.cartData.push(action.payload)
        },
        deleteItem:(state,action)=>{
           state.cartData=state.cartData.filter((ele)=>{
        return ele.card.info.id !== action.payload})
          state.cartCount-=1
        },
    }
   
})
console.log(cartSlice)
export let {addItem,deleteItem}=cartSlice.actions
export default cartSlice;
