

import React, { useEffect } from 'react'

import { jwtDecode } from 'jwt-decode'
import { cartContext } from '../../Context/cartContext'
import { useContext } from 'react'
export default function Profile() {

  let {userData} = useContext (cartContext)

  useEffect(() =>
  {

    let encodedToken = localStorage.getItem("token")
    let decodedToken = jwtDecode(encodedToken)
 
  } , [])

  
  return (
    <>

    <div className="container my-5 py-5 text-main ">

    <h1> Hello :  {userData?.name} </h1>
    <h1>   {userData?.email} </h1>

    </div>

    
      
    </>
  )
}
