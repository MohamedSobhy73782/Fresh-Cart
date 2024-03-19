

import React, { Children } from 'react'
import {Outlet, RouterProvider , createBrowserRouter, createHashRouter} from "react-router-dom"
import MainLayout from './Layouts/MianLayout/MainLayout'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Brands from './Components/Brands/Brands'
import Cart from './Components/Cart/Cart'
import Wishlist from './Components/Wishlist/Wishlist'
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import AuthonticationLayout from './Layouts/AuthonticationLayout/AuthonticationLayout'
import NotFound from './Components/NotFound/NotFound'
import { Online,Offline } from 'react-detect-offline'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { ToastContainer, toast } from 'react-toastify';
import CartContextProvider from './Context/cartContext'
import Address from './Components/Address/Address'
import Orders from './Components/Orders/Orders'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import Categories2 from './Components/Categories2/Categories2'






export default function App() {

  let routes = createHashRouter ([
    {
      path:"/" , element: <MainLayout /> , children: [
      {index:true , element: <ProtectedRoutes> <Home /> </ProtectedRoutes>  },
      {path: "home" , element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
      {path: "products" , element: <ProtectedRoutes> <Products /> </ProtectedRoutes>},
      {path: "categories" , element: <ProtectedRoutes> <Categories2 /> </ProtectedRoutes>},
      {path: "brands" , element: <ProtectedRoutes> <Brands /> </ProtectedRoutes>},
      {path: "cart" , element: <ProtectedRoutes> <Cart /> </ProtectedRoutes>},
      {path: "wishlist" , element: <ProtectedRoutes> <Wishlist /> </ProtectedRoutes>},
      {path: "forgetPassword" , element:  <ForgetPassword /> },
      {path: "resetPassword" , element:  <ResetPassword /> },
      {path: "allorders" , element: <ProtectedRoutes> <Orders /> </ProtectedRoutes>},
      {path: "orders" , element: <ProtectedRoutes> <Orders /> </ProtectedRoutes>},
      {path: "product-details/:id" , element: <ProtectedRoutes> <ProductDetails /> </ProtectedRoutes>},
      {path: "address/:id" , element: <ProtectedRoutes> <Address /> </ProtectedRoutes>},
      {path: "*" , element: <NotFound />},
    ]
  } ,

  {
    path:"/" , element: <AuthonticationLayout /> , children: [


    {path: "signup" , element: <Signup />},
    {path: "signin" , element: <Signin />},
  ]
}
    ])


  return (
    <div>

      <CartContextProvider>

         <RouterProvider router={routes}/>

      </CartContextProvider>





      <ToastContainer theme='colored' autoClose={1000} />


  
    <Offline >
        <div className='offline text-center w-75'>
        <span className='px-2'>         opps!  You are offline now!   </span> 
         "Check Connection and Try Again"  </div>
    </Offline>

      
    </div>
  )
}
