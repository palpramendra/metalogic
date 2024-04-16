import React from 'react'

function Footer() {
  return (
    < >
    <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-12 footer__lo_co pt-5">
        <div className="d-flex justify-content-center">
          <a href="#" className="d-flex align-items-center gap-2 footer__logo"> <img  width={'50px'} src="https://www.metalogic.com.np/metalogo.png" alt="alt" />
            <h5>MetaLogic</h5>
          </a>
        </div>
        <span className="border__full" />
        <ul className="d-flex justify-content-center gap-3 footer__socal">
          <li> <a href="href.html"> <i className="fa fa-facebook-f" /> </a> </li>
          <li> <a href="href.html"> <i className="fa fa-pinterest-p" /> </a> </li>
          <li> <a href="href.html"> <i className="fa fa-instagram" /> </a> </li>
          <li> <a href="href.html"> <i className="fa fa-twitter" /> </a> </li>
        </ul>
      </div>
    </div>
    <hr className="footer__border" />
    <div className=" footer__info">
      <div className="box">
        <div className="footer__info_subscribe">
          <h3 className="footer__info_group t__22">MetaLogic</h3>
          <p>Metalogic envisions a future where technology serves as a catalyst for limitless human potential, fostering innovation and empowering organizations to thrive in a transformative digital era. </p>
          <input type="email" placeholder="Enter your email" />
          <button className="common__btn"> Subscribe Now <i className="ti-arrow-top-right" /> </button>
        </div>
      </div>
      <div className="box">
        <div>
          <h3 className="footer__info_group t__22">Company</h3>
          <ul>
            <li><a href="href.html">Feedback</a></li>
            <li><a href="href.html">Partnership</a></li>
            <li> <a href="href.html">Terms &amp; Condition</a> </li>
          </ul>
        </div>
      </div>
      <div className="box">
        <div>
          <h3 className="footer__info_group t__22">Our Contact</h3>
          <ul className="footer__info_contact">
            <li> <i className="ti-comment-alt" />
              <p>info@metalogic.com.np</p>
            </li>
            <li> <i className="fa fa-phone" />
              <p>+ 977 9851353599</p>
            </li>
            <li> <i className="fa fa-map-marker" />
              <p>Saptakhel, Lalitpur (Head office)</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="box">
        <div>
          <h3 className="footer__info_group t__22">Our Services</h3>
          <ul>
            <li><a href="href.html">Custom Software Development</a></li>
            <li><a href="href.html">Web Development</a></li>
            <li><a href="href.html">Mobile App Development</a></li>
            <li><a href="href.html">Cloud Computing Services</a></li>
            <li><a href="href.html">UI/UX Designing</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row footer__copyright">
      <div className="col-12">
        <hr className="footer__border" />
        <p className="text-center"> © Copyright 2024 MetaLogic. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

    </ >
  )
}

export default Footer
