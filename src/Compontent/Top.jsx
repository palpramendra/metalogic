import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Service from '../Pages/Service'
import Contact from '../Pages/Contact'
import Career from '../Pages/Career'

function Top() {
  return (
    < >
     <header className="header">
  <div className="header__top d-lg-block d-none">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center header__top_left">
          <p className="d-flex align-items-center time"> <i className="fa fa-clock-o" /> <span>&nbsp; Working Hours :</span> </p>
          <p> <span>Monday - Friday,</span> <span>10am - 05pm</span> </p>
        </div>
        <div className="d-flex align-items-center header__top_contact">
          <p className="email">info@metalogic.com.np</p> <span className="line" />
          <p className="phone">+ 977 9851353599</p> <span className="line" />
          <ul className="d-flex align-items-center icons">
            <li> <a href="href.html"> <i className="fa fa-facebook" /> </a> </li>
            <li> <a href="href.html"> <i className="fa fa-twitter" /></a> </li>
            <li> <a href="href.html"><i className="fa fa-instagram" /></a></li>
            <li> <a href="href.html"> <i className="fa fa-youtube-play" /></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header__bottom">
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <a href="#" className="d-flex align-items-center gap-2 header__bottom_logo"><img  className='logo' src= "https://www.metalogic.com.np/metalogo.png" alt="alt" />
            <Link to="/"><h5>MetaLogic</h5></Link>
          </a>
        </div>
        <nav className="header__bottom_navbar">
          <ul className="d-xl-flex menu__list">
            <li className="dropdown__container">
              <div className="d-flex justify-content-between align-items-center gap-1"> <Link to="/">Home</Link> </div>
            </li>
            <li className="dropdown__container">
              <div className="d-flex justify-content-between align-items-center gap-1"> <Link to="/service">Service</Link></div>
            </li>
            <li className="dropdown__container">
              <div className="d-flex justify-content-between align-items-center gap-1"> <Link to="career">Career</Link></div>
            </li>
            <li className="dropdown__container">
              <div className="d-flex justify-content-between align-items-center gap-1"> <Link to="contact">Contact Us</Link></div>
            </li>

          </ul>
        </nav>
        <div className="d-xl-block d-none">
          <a href="href.html" className="common__btn"><span>Get Started Now</span><i className="ti-arrow-top-right" /></a>
        </div>
        <div className="menu__icon d-block d-xl-none"><i className="fa fa-bars" /></div>
      </div>
    </div>
  </div>
</header>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='service' element={<Service/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='career' element={<Career/>}/>
</Routes>
    </ >
  )
}

export default Top
