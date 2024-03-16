

import React from 'react'
import Slider from "react-slick";

import slider1 from "../../assets/images/4.jpg"
import slider2 from "../../assets/images/slider-image-1.jpeg"
import slider3 from "../../assets/images/slider-image-2.jpeg"
import slider4 from "../../assets/images/slider-image-3.jpeg"
import slider5 from "../../assets/images/3.jpg"




export default function MainSlider() {


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false
        
      };
  return (
    <>
      <div className="container  my-3">
        <div className="row pt-4">
          
          <div className="col-md-8 pe-1">

          <Slider {...settings}>
            
            <img src={slider4} className='w-100' height={500} alt="" />
            < img src={slider2} className='w-100' height={500} alt="" />
            <img src={slider3} className='w-100' height={500} alt="" />

          </Slider>

          </div>
          <div className="col-md-4 ps-1">
          <img src={slider5} height={250} className='w-100' alt="" />
          <img src={slider1} height={250} className='w-100' alt="" />
        </div>

        </div>
      </div>
      
    </>
  )
}
