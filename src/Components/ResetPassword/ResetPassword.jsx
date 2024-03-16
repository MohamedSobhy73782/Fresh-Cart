

import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResetPassword() {


    let navigate = useNavigate()
 async function resetPassword(values) {
    let {data} = await  axios.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" , values)
    console.log(data)

    if(data.token)
    {
        navigate("/signin")
    }
    
 }
    let formik = useFormik({
        initialValues:{
            email: "",
            newPassword: ""
        },
        onSubmit:resetPassword
    })



  return (
    <div>
        <form className='w-75  my-5 m-auto' onSubmit={formik.handleSubmit}>

        <label> E-mail : </label>
        <input type="email" id='email' name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  className='form-control my-2 ' />

        <label> New Password : </label>
        <input type="password" id='newPassword' name='newPassword' value={formik.values.newPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control ' />

        <button className='btn bg-main text-white my-3'> Reset Password </button>

</form> 
    </div>
  )
}
