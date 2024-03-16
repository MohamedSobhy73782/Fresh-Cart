
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { cartContext } from '../../Context/cartContext'


 

export default function Address() {

  let navigate =  useNavigate()

   let {id} = useParams()


  const [errorMessage , setErrorMessage] = useState("")
  const [loading , setLoading] = useState(true)

   let {pay} =  useContext(cartContext)


 
  async function sendDataToApi (values)
  {
    setLoading(false)

    let data = await pay( id , values)
  
    if (data.status == "success")
    {
      window.location.href = data.session.url

    }


    }



  let address = useFormik({
    initialValues: {
      details:"",
      phone:"",
      city: ""
    },
    
    onSubmit:(values) =>{
      sendDataToApi (values)
    }
  })

 



  return (
    <div>
      

      

      <div className="w-75 m-auto my-5 py-3">
        <h2 className='mb-4'> Address Now : </h2>

        <form onSubmit={address.handleSubmit}>


  
          <label htmlFor="details"> Details:  </label>
          <textarea onBlur={address.handleBlur} onChange={address.handleChange} type="text" name="details" id="details" className='form-control mb-2'> </textarea>


          <label htmlFor="phone"> Phone:  </label>
          <input onBlur={address.handleBlur} onChange={address.handleChange} type="text" name="phone" id="phone" className='form-control mb-2'/>

          
          <label htmlFor="city"> City:  </label>
          <input onBlur={address.handleBlur} onChange={address.handleChange} type="text" name="city" id="city" className='form-control mb-2'/>



          <button disabled ={!(address.dirty && address.isValid)}  type="submit" className='btn bg-main text-white my-2'>
          {loading ? "Check Out" : <i className='fa fa-spinner fa-spin'> </i>  }
          </button>

        </form>

      </div>
      
    </div>
  )
}

