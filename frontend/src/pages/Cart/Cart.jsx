/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
//import React from 'react'
import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
const cart = () => {
    const {cartitems,food_list,removeCart,getTotalCartAmount,url} =useContext(StoreContext)

    const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,idex)=>{
            if (cartitems[item._id] > 0) {
                return(
                    <div>
                        <div className='cart-items-title cart-items-item'>
                            <img src={url +"/images/"+item.image} alt="" />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartitems[item._id]}</p>
                            <p>${item.price * cartitems[item._id]}</p>
                            <p onClick={()=>removeCart(item._id)} className='cross'>x</p>
                        </div>
                        <hr />
                    </div>
                )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
                <div className="card-total-details">
                    <p>Sub Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="card-total-details">
                    <p>Delivery Fee</p>
                    <p>${getTotalCartAmount()===0?0 : 2}</p>
                </div>
                <hr />
                <div className="card-total-details">
                    <b>Total:  ${getTotalCartAmount()===0?0 : getTotalCartAmount()+2}</b>
                </div>
            </div>
                <button onClick={()=>{alert("Thank you for your Order!!");navigate('/')}} disabled={getTotalCartAmount() === 0}>PROCEED TO CHECKOUT</button> {/* onClick={()=>navigate('/order')} */}
        </div>
        <div className="cart-promocode">
            <div>
                <p>If you have a promo code, Enter it Here</p>
                <div className='cart-promocode-input'>
                    <input type="text" placeholder='Promocode' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default cart
