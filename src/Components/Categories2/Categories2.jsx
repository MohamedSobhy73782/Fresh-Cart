

import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function Categories2() {


    const [categories , setCategories] =useState([])
  let [loading , setLoading] = useState(true)


  async function getCategories ()
  {
   let {data} = await  axios.get("https://ecommerce.routemisr.com/api/v1/categories/")

   setCategories(data.data)
   setLoading(false)

  }

  let { isLoading } = useQuery("getCategories" , getCategories)



  useEffect (()=>
  {
    getCategories()

  },[])




  if(isLoading) return <Loading />

  return (
    < >

  <div className="container my-3">

  <div className="row">

            {
    categories.map( (item) => (
        <div key={item._id} className="col-md-4  ">

    <div className="card bg-main-light d-flex my-3 ">
        <div className="cardImg cursor-pointer rounded-3 ">
        <img src={item.image} className='w-100' height={350} alt="" />

        </div>

        <div className="cardTittle">
        <p className='text-center  p-2 bg-light text-success '> {item.name} </p>

        </div>
        </div>

    </div>
       
    ))
  }

       

    </div>
  

  </div>
   

   
  

    
  </>
  )
}
