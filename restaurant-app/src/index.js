import React from 'react'
import ReactDOM from 'react-dom/client'
import  { appRouter } from "./App"
import {RouterProvider} from 'react-router-dom'
import "./index.css"

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(<header>
  <RouterProvider router={appRouter}/>
  </header>
)