

import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

export default function Orders() {


  const [orders , setOrders] = useState([])
  let [loading , setLoading] = useState(true)


  async function getAllOrders(id)
  {
    const {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + id)
    setOrders(data)

    setLoading(false)

  }

  useEffect (() =>
  {
    const {id} =  jwtDecode(localStorage.getItem("token"))

    getAllOrders(id)
  } , [])

  if(loading) return <Loading />


  return (
    <>

    <h1 className='text-main mx-4 px-3 mt-3'> Your Orders : </h1>

    {orders.map((order) => {

        return <div key={order.id} className='row mx-3 px-2 gy-3'> 
          <div className="order shadow rounded p-4 my-5 "> 
             <div className='d-flex align-items-center'> 
                <h2 className='fw-bolder h1'> #{order.id}  </h2>
                 <h4 className='fw-bold text-main mx-4'> Processing </h4>
              </div>

              <p> You have ordered {order.cartItems.length} items. </p>
              <div className='d-flex'> 

              {order.cartItems.map((item) => {
                return <img key={item._id} src={item.product.imageCover} style={{width:150}} className='img-thumbnail mx-2' alt="" />
              })}
                
              
               </div>

               <hr />

               <p> <strong> Total amount: </strong>  {order.totalOrderPrice} EGP  </p>
           </div>
        
         </div>

    })
    }
    



      
    </>
  )
}
