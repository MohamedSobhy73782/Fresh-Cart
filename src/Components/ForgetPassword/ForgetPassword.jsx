

import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from "yup"

export default function ForgetPassword() {
  let navigate = useNavigate()

    let validationSchema = Yup.object({
        email: Yup.string().required("email is required.").email("enter a valid email")
    })
    
async function sendCode(values)
{
  let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords" , values)
  console.log(data)

  if(data.statusMsg == "success")
  {

    document.querySelector(".forgotPassword").classList.add("d-none")
    document.querySelector(".verifyCode").classList.remove("d-none")


  }
}
    let formik = useFormik({
        initialValues:{
            email: ""
        },
        validationSchema,
        onSubmit:sendCode
    })





    let validationSchema2 = Yup.object({
        resetCode: Yup.string().required("email is required.")
    })

async function sendData(values)
{
  let {data} = await  axios.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode" , values)
  console.log(data)
  


  if(data.status == "Success")
  {
    navigate("/resetpassword")
  }

  
}
    let verifyFormik = useFormik({
        initialValues:{
            resetCode: ""
        },
        validationSchema2,
        onSubmit:sendData
    })







  return (
    <>
       <div className='forgotPassword'>
        <h3 className='mx-5 mt-3'> Forget Password : </h3>
      <form onSubmit={formik.handleSubmit} className='w-75 m-auto my-5'>

        <label> E-mail : </label>
        <input type="email" id='email' name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control ' />

        {formik.touched.email && formik.errors.email ? <p className='text-main my-3'> {formik.errors.email} </p> : ""}
        <button disabled={ !(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white my-2'> Send Code </button>
        
      </form> 




      </div>

      <div className='verifyCode d-none'>
        <h3 className='mx-5 mt-3'>  Verify Code: </h3>
      <form onSubmit={verifyFormik.handleSubmit} className='w-75 m-auto my-5'>

        <label> Reset Code : </label>
        <input type="text" id='resetCode' name='resetCode' value={verifyFormik.values.resetCode} onBlur={verifyFormik.handleBlur} onChange={verifyFormik.handleChange} className='form-control ' />

        {verifyFormik.touched.resetCode && verifyFormik.errors.resetCode ? <p className='text-main my-3'> {verifyFormik.errors.resetCode} </p> : ""}
        <button disabled={ !(verifyFormik.isValid && verifyFormik.dirty)} type='submit' className='btn bg-main text-white my-2'> Send Code </button>
        
      </form> 
      </div>
    </>
  )
}
