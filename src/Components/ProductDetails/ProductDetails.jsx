import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { cartContext } from '../../Context/cartContext'


export default function ProductDetails() {
  let {counter,setCounter}= useContext(cartContext)
 let x =useParams()
 let [product,setProduct]=useState({})
 let [loading,setLoading]=useState(true)
async function getProduct() {
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
    setProduct(data.data)
    setLoading(false)
    
 }

 








 useEffect(()=>{
    getProduct()
 },[])
 if (loading) return <Loading />
 
  return (
    <div>
<div className="container my-5">
    <div className="row mt-5 gy-3">
        <div className="col-md-3">
            <img src={product.imageCover} className='w-100' alt="" />
        </div>
        <div className="col-md-9 my-4">
            <h4>{product.title}</h4>
            <p className='my-3'>{product.description}</p>
        <span>{product.category.name}</span>

       <div className='d-flex justify-content-between my-3'>
        <div>
    <p> {product.price} EGP</p>
        </div>
     
      <div>
        <i className='fa-solid fa-star rating-color'></i>
        {product.ratingsAverage}
      </div>
      </div>

      <div className="heart d-flex mx-3 justify-content-between">

       <button onClick={()=>setCounter(counter+1)} className='btn bg-main text-white w-75 ms-5 p-2'> + Add </button>
       <i class="fa-solid fa-heart "></i>


       </div>
        
    </div>
    </div>
</div>
    </div>
  )
}
