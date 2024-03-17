
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { toast } from 'react-toastify'


 

export default function Signin() {

  let navigate =  useNavigate()

  const [errorMessage , setErrorMessage] = useState("")
  const [loading , setLoading] = useState(true)
 
  function sendDataToApi (values)
  {
    setLoading(false)
      axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin" , values).then(({data}) =>
     {
      
      if(data.message === "success")
      {
        localStorage.setItem("token" , data.token)
        navigate("/home")
        toast.success("Welcome to our world 👋🏻")
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
      email: Yup.string().email().required(),
      password: Yup.string().matches(/^[A-Z][a-zA-Z0-9@]{6,}$/).required(),
    })

    return schema

  }

  let login = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema,
    onSubmit:(values) =>{
      sendDataToApi (values)
    }
  })




  return (
    <div>
      

      

      <div className="w-75 m-auto my-4 py-3">
        <h2> login Now: </h2>

        <form onSubmit={login.handleSubmit}>


  
          <label htmlFor="email"> Email:  </label>
          <input onBlur={login.handleBlur} onChange={login.handleChange} type="email" name="email" id="email" placeholder='Enter Your E-mail..' className='form-control mb-2'/>
          {login.errors.email && login.touched.email ? <div className='alert alert-danger  text-center p-2 mt-2'>{login.errors.email}</div> : ""}


          <label htmlFor="password"> Password:  </label>
          <input onBlur={login.handleBlur} onChange={login.handleChange} type="password" name="password" id="password" placeholder='Enter Your Password..' className='form-control mb-2'/>
          {login.errors.password && login.touched.password ? <div className='alert alert-danger  text-center p-2 mt-2'>{login.errors.password}</div> : ""}



          {errorMessage ? <div className="alert alert-danger"> {errorMessage} </div> : "" }

         

          <Link to="/forgetPassword" > <span className='text-main'> forget passsword?.. </span> </Link>
          <br />

          <button disabled ={!(login.dirty && login.isValid)}  type="submit" className='btn bg-main text-white my-2'>
          {loading ? "login" : <i className='fa fa-spinner fa-spin'> </i>  }
          </button>


        </form>

      </div>
      
    </div>
  )
}

