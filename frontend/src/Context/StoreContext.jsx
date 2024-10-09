/* eslint-disable react/prop-types */
import { createContext,  useEffect,  useState } from "react"
import axios from "axios"
export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{
 const [cartitems, setCartitems] = useState({});
 const url = "http://localhost:4000";
const [token,setToken] = useState("");
const [food_list, setFoodList] = useState([]);
 const addToCart = async (itemId)=>{
    if(!cartitems[itemId]){
        setCartitems((pre)=>({...pre,[itemId]:1}))
    }
    else{
        setCartitems((pre)=>({...pre,[itemId] :pre[itemId]+1 }))
    }
    if(token){
        await axios.post(url + "/api/cart/add",{itemId},{headers:{token}})
    }
 }

 const removeCart = async (itemId)=>{
    setCartitems((pre)=>({...pre,[itemId]: pre[itemId]-1}));
    if(token){
        await axios.post(url + "/api/cart/remove",{itemId},{headers:{token}})
    }
 }

 const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartitems){
        if(cartitems[item] > 0) {
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price * cartitems[item];
        }
        
    }
    return totalAmount;
 }
 const fetchFoodList = async ()=>{
    const response = await axios.get(url+"/api/food/list");  //Fetch the food list from the database
    setFoodList(response.data.data);
 }
 const loadCartData = async(token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartitems(response.data.cartData);
 }

 useEffect(()=>{
    async function loadData(){
        await fetchFoodList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
    }
    loadData();
 },[]);
    const contextValue = {
        food_list,
        cartitems,
        setCartitems,
        addToCart,
        removeCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;