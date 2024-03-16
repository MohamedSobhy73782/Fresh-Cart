import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';


export default function Categories() {

  const [categories , setCategories] =useState([])
  let [loading , setLoading] = useState(true)

  async function getCategories ()
  {
   let {data} = await  axios.get("https://ecommerce.routemisr.com/api/v1/categories/")

   setCategories(data.data)
   setLoading(false)

  }

  let {data , isLoading , isFetching} = useQuery("getCategories" , getCategories)



  useEffect (()=>
  {
    getCategories()

  },[])


  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
    
  };

  if(isLoading) return <Loading />

return (
<div className='my-5 container '>

  <h3 className='my-3 px-3'>Shop Popular Categories</h3>

<Slider {...settings}>

{
  categories.map( (item) => (

     <div className="px-1">
           <img src={item.image} className='w-100' height={200} alt="" />
           <h5 className='text-center fs-4'> {item.name} </h5>

     </div>
  ))
}
 

</Slider>
  
</div>
  )
}
