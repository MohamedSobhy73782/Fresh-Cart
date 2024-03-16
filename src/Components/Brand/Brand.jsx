import React from 'react'

export default function Brand({brand}) {
  
  return (
    <>

       <div className="col-md-3 text-center my-3  ">
        <div className="card">
             <img src={brand.image} className='w-100' height={200} alt="" />
             <p className='pb-2 text-success fs-5'> {brand.name} </p>
        </div>
          
        </div>
      
    </>
  )
}
