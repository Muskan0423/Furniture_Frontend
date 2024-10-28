import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from '../src/Pages/Home'

import {RecoilRoot} from 'recoil'
import Contact from '../src/Pages/Contact'
import About from '../src/Pages/About'
import Blog from '../src/Pages/Blog'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path:"/AboutUs",
    element:<About/>
  },
  {
    path:"/Blog",
    element:<Blog/>
  }
])
  return (
    <>
    <RecoilRoot>
    <RouterProvider router={router}/>
    </RecoilRoot>
   
    
    </>
  )
}

export default App
