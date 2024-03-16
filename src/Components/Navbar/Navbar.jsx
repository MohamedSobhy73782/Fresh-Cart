

import { useContext, useEffect, useState } from "react"
import logo from "../../assets/images/freshcart-logo.svg"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { cartContext } from "../../Context/cartContext"
import { toast } from "react-toastify"

export default function Navbar() {

  let [token , setToken] = useState(localStorage.getItem("token"))
  let {counter , setCounter , getCart , wishlist , setWishlist , getWishList } =  useContext(cartContext)
  let navigate = useNavigate()

  const [data, setData] = useState("")
  

  function signOut()
  {
    toast.dark("Goodbye !")
    localStorage.removeItem("token")
    setToken(null)
    navigate("/signin")


  }

  useEffect (() =>
  {
    (async () =>
    {
      let data = await getCart()
      setCounter(data.numOfCartItems)
      
    }) ()
  } , [])

  useEffect (() =>
  {
    (async () =>
    {
      let data = await getWishList()
      
      setWishlist(data.count)
      
      
    }) ()
  } , [])



 

  return (
    <>


   <nav className="navbar navbar-expand-lg   py-3">
  <div className="container-fluid mx-2">
    <NavLink className="navbar-brand mx-3"  to="/home">
      <img src={logo} alt="" />
      </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0 ">
       
        <li className="nav-item">
          <NavLink className="nav-link " act to="/home">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " to="/products">Products</NavLink>

        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link " to="/categories">Categories</NavLink>

        </li>

        <li className="nav-item">
          <NavLink className="nav-link " to="/brands">Brands</NavLink>

        </li>

        <li className="nav-item">
          <NavLink className="nav-link " to="/orders">Orders</NavLink>

        </li>
       
       
      </ul>


      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">

      <li className="nav-item2 ">
         <NavLink className="nav-link position-relative" to="/wishlist"> 
         WishList
            <i class="fa-solid fa-heart mx-1"></i>
            {wishlist?   <span className="position-absolute top-1 translate-middle  badge rounded-4 bg-main">
              {wishlist}
                 <span className="visually-hidden">unread messages</span>   
          </span> : ""}
         
         </NavLink>
       </li>
       
       <li className="nav-item2 ">
         <NavLink className="nav-link position-relative" to="/cart"> 
         Cart
         <i class="fa-solid fa-cart-arrow-down mx-1"></i>
       
         {counter?   <span className="position-absolute top-1 translate-middle  badge rounded-4 bg-main">
              {counter}
                 <span className="visually-hidden">unread messages</span>   
          </span> : ""}
         
         </NavLink>
       </li>


       <li className="nav-item signout">
          <span onClick={()=> signOut()} className="nav-link " to="/signout">
            SignOut
            <i class="fa-solid fa-right-from-bracket mx-1"></i>


          </span>
        </li>
      
      
     </ul>
    
    </div>
  </div>
</nav>

    </>
  )
}


