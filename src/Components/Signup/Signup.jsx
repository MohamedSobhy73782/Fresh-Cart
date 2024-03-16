
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"


 

export default function Signup() {

  let navigate =  useNavigate()


  const [errorMessage , setErrorMessage] = useState("")
  const [loading , setLoading] = useState(true)
 
  function sendDataToApi (values)
  {
    setLoading(false)
      axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)
     .then(({data}) =>
     {
      
      if(data.message === "success")
      {
        navigate("/Signin")
      }
     }).catch((error) =>
     {
      setErrorMessage(error.response.data.message)
      setLoading(true)
     })

    }


  function validationSchema()
  {
    let schema = new Yup.object({
      name: Yup.string().min(3).max(30).required(),
      email: Yup.string().email().required(),
      password: Yup.string().matches(/^[A-Z][a-zA-Z0-9@]{6,}$/).required(),
      rePassword: Yup.string().oneOf([Yup.ref('password')]).required()
    })

    return schema

  }

  let register = useFormik({
    initialValues: {
      name: "",
      email:"",
      password:"",
      rePassword:""
    },
    validationSchema,
    onSubmit:(values) =>{
      sendDataToApi (values)
    }
  })

  



  return (
    <div>
      

      

      <div className="w-75 m-auto my-4 py-3">
        <h2> Register Now: </h2>

        <form onSubmit={register.handleSubmit}>


          <label htmlFor="name"> Name:  </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="text" name="name" id="name" placeholder='Enter Your Name..' className='form-control mb-2'/>
          {register.errors.name && register.touched.name ? <div className='alert alert-danger  text-center p-2 mt-2'>{register.errors.name}</div> : ""}


          <label htmlFor="email"> Email:  </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="email" name="email" id="email" placeholder='Enter Your E-mail..' className='form-control mb-2'/>
          {register.errors.email && register.touched.email ? <div className='alert alert-danger  text-center p-2 mt-2'>{register.errors.email}</div> : ""}


          <label htmlFor="password"> Password:  </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name="password" id="password" placeholder='Enter Your Password..' className='form-control mb-2'/>
          {register.errors.password && register.touched.password ? <div className='alert alert-danger  text-center p-2 mt-2'>{register.errors.password}</div> : ""}


          <label htmlFor="rePassword"> rePassword:  </label>
          <input onBlur={register.handleBlur} onChange={register.handleChange} type="password" name="rePassword" id="rePassword" placeholder='Enter Your rePassword..' className='form-control mb-2'/>
          {register.errors.rePassword && register.touched.rePassword? <div className='alert alert-danger  text-center p-2 mt-2'>{register.errors.rePassword}</div> : ""}




          {errorMessage ? <div className="alert alert-danger"> {errorMessage} </div> : "" }

          <button disabled ={!(register.dirty && register.isValid)}  type="submit" className='btn bg-main text-white my-2'>
          {loading ? "Register" : <i className='fa fa-spinner fa-spin'> </i>  }
          </button>

        </form>

      </div>
      
    </div>
  )
}

