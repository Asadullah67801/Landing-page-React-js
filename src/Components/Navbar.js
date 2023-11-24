import React from 'react'
import Logo11  from '../Assets/Logo11.svg';

function Navbar() {
  return (
    <nav>
<div className='nav-logo-container'>
    <img src={Logo11} alt='logo'></img>
</div>


<div className='nav-bar-link-Container'>




    <a href="/">Home</a>
    <a href="/">About</a>



    <a href="/">Testimonial</a>
    <a href="/">Contact</a>
    

    

<button className="primary-button">Bookings Now</button>

</div>
</nav>

  )
}

export default Navbar