/* eslint-disable react-hooks/rules-of-hooks */
//import React from 'react'
import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
const home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
      <Appdownload />
      
    </div>
  )
}

export default home
