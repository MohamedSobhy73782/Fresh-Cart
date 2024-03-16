

import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/cartContext'
import Loading from '../Loading/Loading'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

export default function Cart() {

  let { getCart , deleteItem ,setCounter , updateQty ,clearCart} =  useContext(cartContext)

  let [data , setData] = useState(null)

  let [ loading , setLoading ] = useState(true)

  useEffect (() =>
  {
    (async () =>
    {
      let data = await getCart()
     
      if(data?.response?.data.statusMsg == "fail" )
      {
        setData(null)
      } else
      {
        setData(data)
      }
  
      setLoading(false)
     
    }) ()
  } , [])


   async function deleteProduct (id)
  {
   let data = await deleteItem(id)

   if(data.status == "success")
   {
    toast.error("Product deleted successfully.")
    setCounter(data.numOfCartItems)
    setData(data)
   }
  }

  async function clearItems ()
  {
   let data = await clearCart()

   if(data.message == "success")
   {

    toast.error("Cart empty now !")
    setCounter(data.numOfCartItems)
    setData(null)

   }
  }

  async function updateProduct (id , count)
  {
   let data = await updateQty(id , count)
   

   if(data.status == "success")
   {
    toast.success("Product updated successfully.")
    setCounter(data.numOfCartItems)
    setData(data)
   }

   
  }


 
    if(loading) return <Loading  />
  if(data == null || data.numOfCartItems == 0 ) return <h2 className='text-center py-5 my-5 text-main'> your cart is empty. </h2>

  return (
    
    


    <div className='container my-3 mb-5 bg-main-light p-3 rounded-3'>
       <div className='d-flex justify-content-center '>
      <button onClick={clearItems} className='btn bg-success text-center text-white rounded-5 p-3 '>
      <i class="fa-solid fa-trash mx-2"></i>     
        Clear Your Cart 
         </button>
     </div>
   

      <h2> Shop Cart : </h2>
      <p className='text-main'> Total Cart Price : { data?.data.totalCartPrice } EGP </p>

    
          
     {data?.data.products.map(item =>{
      return  <div key={item._id} className="row py-2 border-bottom">
       

      <div className="col-md-1">
        <img src={item.product.imageCover} className='w-100' alt="" />
      </div>

      <div className="col-md-11 d-flex justify-content-between">
        <div>
           <p className='m-1'> {item.product.title} </p>
           <p className='text-main m-0 p-0'> Price : {item.price} EGP </p>
           <button onClick={() => deleteProduct(item.product._id)} className='btn p-0 m-1 '> <i className=" text-main fa-solid fa-trash-can"> </i> Remove </button>
        </div>

        <div>
          <button  onClick={() => updateProduct(item.product._id , item.count + 1)} className='btn brdr my-2'> + </button>
          <span className='px-2'> {item.count} </span>
          <button disabled={item.count <=1} onClick={() => updateProduct(item.product._id , item.count - 1)} className='btn brdr my-2'> - </button>

        </div>
      </div>
      
    </div>
    
     })}
      

      <Link to={`/address/${data.data._id}`}  className='btn bg-main my-3 text-center w-25 text-white'> Place Order </Link>
    </div>
  )
}
