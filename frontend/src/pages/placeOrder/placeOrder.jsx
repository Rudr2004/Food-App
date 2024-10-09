//import React from 'react'
import { useContext,  useState } from 'react'
import './placeOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const placeholder = () => {
  const {getTotalCartAmount,token,food_list,cartitems,url} =useContext(StoreContext)

  const[data,setData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) =>{
    event.preventDefault();
    let orderItems  = [];
    if (Array.isArray(food_list)) { 
    food_list.map((item)=>{
      if(cartitems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartitems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address:data,
      items: orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url +"/api/order/place", orderData,{headers:{token}});
    if(response.data.sccess){
      //const {session_url} = response.data;
      //window.location.replace(session_url);
      alert("Thank you for your Order!!");
    }
    else{
      alert("Error");
    }
  }
  }
  
  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name'  required />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text"  placeholder='Last Name' required/>
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="email"  placeholder='Email-Address' required />
        <input name='street' onChange={onChangeHandler} value={data.street}  type="text"  placeholder='Street' required/>
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' required />
          <input name='state' onChange={onChangeHandler} value={data.state} type="text"  placeholder='State' required/>
        </div>
        <div className="multi-fields">
          <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Pin Code' required />
          <input name='country' onChange={onChangeHandler} value={data.country} type="text"  placeholder='Country' required/>
        </div>
        <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone no' required/>
      </div>
      <div className="place-order-right">
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
                <button type='submit'>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default placeholder
