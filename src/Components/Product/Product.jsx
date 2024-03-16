
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Product({item}) {

  let [heart , setHeart] = useState(false)

  let {setCounter,addToCart , addToWishList  , setWishlist   }= useContext(cartContext)

  let [btnnLoading ,setBtnnLoading] = useState(true)



  
  
  
   async function addProductCart(productId)
{
      setBtnnLoading(false)
       let data=   await addToCart(productId)
      

       if(data.status == "success")
       {
        toast.success("Product added successfully ")
        setCounter(data.numOfCartItems)
        setBtnnLoading(true)


       }
}


async  function addProductToWishList(productId)
{
 let data = await addToWishList(productId)

 

 if(data.status == "success")
 {
  
  toast.success("Product added successfully to wishlist ")
  setWishlist(data.count)
  


 }
}



  return (
    <>
<div  className="col-md-3">
      <div className="product cursor-pointer rounded-3 p-3">

     <Link to={'/Product-details/'+item._id}>
     <img src={item.imageCover} className='w-100' alt=""/>
        <span className='text-main'>{item.category.name}</span>
        <h5 className='my-2 fw-bold'>{item.title.split(' ').slice(0, 2).join(' ')}</h5>
     <div className='d-flex justify-content-between my-3'>
      <div>
        {item.price} EGP
      </div>
      <div>
        <i className='fa-solid fa-star rating-color'></i>
        {item.ratingsAverage}
      </div>
     </div>
     </Link>

     <div className="heart d-flex justify-content-end">

     <button disabled={!btnnLoading} onClick={() => (addProductCart(item._id))} className='btn bg-main w-75 text-white me-1'>
      {btnnLoading? " + Add "     : "Loading..."}
      
      </button>

      <Link onClick={() => setHeart(!heart)}  style={  heart ? { color: "green"} : {  color: "unset"}  }        >
      <i onClick={() => addProductToWishList(item._id) }  style={heart? {color: "green"} : {color:"unset"}} class="fa-solid fa-heart "></i>

      </Link>

   

     </div>


     

    
      </div>
    </div>
    </>
  )
}