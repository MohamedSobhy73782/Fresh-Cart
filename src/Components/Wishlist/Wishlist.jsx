import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../Context/cartContext'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

export default function Wishlist() {

  let { getWishList , deleteItemFromWishList , setWishlist  ,addToCart } =  useContext(cartContext)
  const [data, setData] = useState(null)


  let [ loading , setLoading ] = useState(true)

 

  useEffect (() =>
  {
    (async () =>
    {
      let data = await getWishList()
      setData(data)
      setLoading(false)
      
    }) ()
  } , [])





  

  async function removeProduct(id)
  {
    let data = await  deleteItemFromWishList(id)
    

    if(data.status == "success")
    {
     
      toast.error("Product deleted successfully")
      setWishlist(data.count)
      setData(data)
     
      
      
    }
  }

  
 


  async function addToCartAndRemove(id){
    let {data} = await addToCart(id);
    if (data?.status === "success") {
      toast.success(data.message, {
        duration: 4000,
        position: "top-right",
      });
    } else {
      toast.error(data.message, {
        duration: 4000,
        position: "top-right",
      });
    }
    removeProduct(id)
  }



  if(loading) return <Loading />

  if(data == null || data.count == 0 ) return <h2 className='text-center py-5 my-5 text-main'> your wish list is empty. </h2>



  return (
    <>
     <div className="container w-75 m-auto my-4 bg-main-light">
      <h2> My wish List </h2>
      
        {data?.data.map( (item) =>
        {
           return <div  className="row py-2 border-bottom">
           <div key={item._id}  className="col-md-2">
             <img src={item.imageCover}  className='w-100' alt="" />
           </div>

           <div className="col-md-10 d-flex justify-content-between">
            <div >
              <p className='text-dark fw-bold fs-4 my-3'> {item.title} </p>
              <span className='text-main fs-6 fw-bold my-2'> {item.price} EGP </span>
              <br />
              <button onClick={() => removeProduct(item._id)} className='btn text-danger p-0 m-1 '> <i className="  fa-solid fa-trash-can"> </i> Remove </button>

            </div>



            <div>
              <button onClick={() => (addToCartAndRemove(item._id))} className='btn-count  btn-btn-lg'> Add To Cart </button>
            </div>

           </div>
         </div>
        })}

     </div>

      
    </>
  )
}
