import "./App.css"
import {createBrowserRouter,Outlet} from 'react-router-dom'
import Header from './components/Header';
import {createContext} from "react"
import Offers from './components/Offers';
import Help from './components/Help';
import Cart from './components/Cart';
import RestaurantMenu from './components/RestaurantMenu';
import Body from './components/Body';
import { Provider } from "react-redux";
import store from "./utills/store";


export let context=createContext()
export default function App(){

  return(
    <div>
      <Header/>
   
     <Outlet/>
    </div>
  )
}

let name='Swiggy'
export let appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Provider store={store}><App/></Provider>,
    children:[
      {
        path:'/',
    element:<context.Provider value={name}><Body/></context.Provider>
      },
      {
        path:'/offers',
        element:<Offers/>
      },
        {

      path:'/help',
    element:<Help/>
        },
        {
          path:'/cart',
    element:<Cart/>
        },
        {
          path:'/restaurant/:restId',
    element:<context.Provider value={context}><RestaurantMenu/></context.Provider>
        }
    ]
  }
])