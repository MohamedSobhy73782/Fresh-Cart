

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Brand from '../Brand/Brand'
import Loading from '../Loading/Loading'
import { useQuery } from 'react-query'

export default function Brands() {

   let [brands , setBrands] = useState([])
   let {data , isLoading , isFetching} = useQuery("getBrands" , getBrands)
 



 async function getBrands()
  {
  let {data} = await  axios.get("https://ecommerce.routemisr.com/api/v1/brands/")
  setBrands(data.data)

  }

  useEffect(() =>
  {
    getBrands()

  } , [])

  if(isLoading) return <Loading />
  return (
    <>

    <h1 className='text-center my-4 text-success fs-1 '> All Brands </h1>

    <div className="container">
      <div className="row">
        {brands.map((item) => < Brand key={item._id} brand={item} />)}
      </div>
    </div>
      
    </>
  )
}
