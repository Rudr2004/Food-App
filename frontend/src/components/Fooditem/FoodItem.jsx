//import React from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext'
const fooditem = ({id,name,price,description,image}) => {
  const {cartitems , addToCart, removeCart, url } =  useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={url+"/images/"+image} alt="" />      {/*Images from backend */}
        {!cartitems[id]
         ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
         : <div className="food-item-counter">
          <img onClick={()=>removeCart(id)} src={assets.remove_icon_red} alt="" />
          <p>{cartitems[id]}</p>
          <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
         </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default fooditem


