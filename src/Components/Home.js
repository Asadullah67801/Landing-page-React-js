import React from 'react'
import Navbar from './Navbar';
import Foodimage  from "../Assets/Foodimage.jpg";
function Home() {
  return (



<div class="Home-container">
<Navbar />
<div className="home-banner-container">

<div className='home-text-section'>
  <h1 className='primary-heading'>
  Your Favourite Food Delivered Hot & Fresh
  </h1>
  <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now 
          </button>
</div>

<div className="home-image-section">
  <img src={Foodimage} alt=''/>
  
</div>
</div>
</div>
  
  )
}

export default Home;