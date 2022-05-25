import React from 'react'
import {  HomeHeader, HomeInfo, LearnMore } from "../styles/layoutStyled";

function LayoutHome() {
  return (
  <>
    <HomeHeader>
        <HomeInfo>
            <h1>Welcome to my website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque quasi explicabo possimus blanditiis asperiores, aperiam officia illo reiciendis cumque doloribus, ipsam molestias quos at aut non sed mollitia vitae! </p>
            <LearnMore to='/'>Learn More</LearnMore>
        </HomeInfo>
    </HomeHeader>
    
  
  </>
  )
}

export default LayoutHome