//import React from 'react'
import { useContext, useEffect, useState } from 'react';
import './Myorders.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
const Myorders = () => {
  const {url,token} = useContext(StoreContext);
  const [data,setData] = useState([]);

  const fetchOrders = async()=>{
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data); 
    console.log(response.data.data)
  }

  useEffect(()=>{
    if(token){
      fetchOrders();
    }
  },[token])
  return (
    <div>
      
    </div>
  )
}

export default Myorders
