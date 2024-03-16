
import React from 'react'

import payment from '../../assets/images/pay.png'
import google from '../../assets/images/play.jpg'
import app from '../../assets/images/app.jpg'


export default function Footer() {
  return (
    <>
   <footer className="bg-main-light py-3  ">
  <div className="container">
    <h4>Get the Frech Cart App</h4>
    <p>We will send you a link, ioen it on your phone to download the app.</p>
    <div className="d-flex">
      <div className="col-sm-10">
        <input type="text" className="form-control py-2" placeholder="Email..." />
      </div>
      <div className="col-sm-2 ps-3">
        <button className="btn w-100 bg-main text-white">Share App Link</button>
      </div>
    </div>
    <div className="line border-bottom border-2 my-4"> </div>

    <div className="row my-2  d-flex justify-content-between">
      <div className="col-md-4 d-flex ">
      <span  className='fw-bold my-2'>Payment Patterns</span> 
            <img src={payment} className='w-50 px-2' alt="" />
      </div>

      <div className="col-md-6 ps-3  d-flex justify-content-between">
      <span className='font-sm fw-bold my-2 ms-5 ps-3'>Get delivaries with FreshCart</span>
      <img src={app} className='w-25 ps-2' alt="" />

            <img src={google}  className='w-25 ps-2' alt=""  />
      </div>
    </div>


    <div className="row my-2  d-flex justify-content-between">
      <div className="col-md-4 d-flex ">

        <h6 className='fw-bold  my-2'> Our Social Links </h6>
      
      </div>

      <div className="col-md-6  my-2 py-2  d-flex justify-content-end">
      <i class="fa-brands  fa-facebook   mx-2"></i>
      <i class="fa-brands  fa-instagram   mx-2"></i>
      <i class="fa-brands  fa-twitter  mx-2"></i> 
      <i class="fa-brands  fa-linkedin  mx-2"></i>
      <i class="fa-brands  fa-github  mx-2"></i>
      <i class="fa-brands  fa-youtube  mx-2"></i>
      </div>
    </div>

   
     

    
    
  
  </div>
</footer>

      
    </>
  )
}

