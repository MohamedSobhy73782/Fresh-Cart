import axios from "axios";
import { createContext, useState } from "react";




export let cartContext= createContext(0)


async function addToCart(productId) {
  return  axios.post('https://ecommerce.routemisr.com/api/v1/cart',{productId},{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=> data).catch(err=>err)
}



async function getCart() {
  return  axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
        headers:{
            token:localStorage.getItem('token')
        }
    }).then(({data})=> data).catch(err=>err)
}

async function deleteItem(productId) {
    return  axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId ,{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }


 

  async function deleteItemFromWishList(productId) {
    return  axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + productId ,{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }





  async function clearCart(productId) {
    return  axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' ,{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }



  async function updateQty(productId , count) {
    return  axios.put('https://ecommerce.routemisr.com/api/v1/cart/' + productId , {count} ,{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }
  

  async function pay(cartId , shippingAddress ) {
    return  axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId , {shippingAddress } ,{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }
  

 
  async function addToWishList(productId) {
    return  axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId},{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }
  

  async function getWishList() {
    return  axios.get('https://ecommerce.routemisr.com/api/v1/wishlist' ,{
          headers:{
              token:localStorage.getItem('token')
          }
      }).then(({data})=> data).catch(err=>err)
  }



export default function CartContextPorvider({children}) {
    let [counter,setCounter]=useState(0)
    let [wishlist,setWishlist]=useState(0)
    

    return <cartContext.Provider value={{
        counter,
        setCounter,
        addToCart,
        getCart,
        deleteItem,
        updateQty,
        pay,
        clearCart,
        addToWishList,
        getWishList,
        deleteItemFromWishList,
        wishlist,
        setWishlist,
  
        }}>
{children}
    </cartContext.Provider>
}