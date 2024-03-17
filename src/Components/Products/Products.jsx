import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import Product from '../Product/Product'
import { useQuery } from 'react-query'
import { cartContext } from '../../Context/cartContext'


export default function Products() {


  const [filterText, setfilterText] = useState('')

   function getProducts()
  {

    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
    
  }

  let {data , isLoading , isFetching} = useQuery("getProducts" , getProducts)
 

  let { setWishlist   }= useContext(cartContext)

  if(isLoading) return <Loading />
  return (
    <>
    <div className="container my-4 ">
      <div className="row">

      
          <form action="" >
            <div className="text-center w-50 mx-auto my-5 d-flex align-items-center ">
              <i className="fa-solid fa-magnifying-glass fs-3 ms-5"></i>
              <input type="search" className="form-control w-75 mx-3"
                placeholder="Search... "
                value={filterText}
                onChange={(e)=>setfilterText(e.target.value)}
              />
            </div>
          </form>

        {data?.data.data.map(item =>
          {
            if (item.title.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
            {
              return;
            }

            return  <Product item={item} key={item._id} />

          })}
      
      </div>
    </div>
      
    </>
  )
}
