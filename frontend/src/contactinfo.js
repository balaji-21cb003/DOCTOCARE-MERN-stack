  import React from 'react'
  import './contactinfo.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faInstagram,faTwitter,faFacebook,faGithub} from '@fortawesome/free-brands-svg-icons'
  import { faCopyright} from '@fortawesome/free-regular-svg-icons'

  export default function contactinfo() {
    return (

      <div className='footer' style={{width:"100%"}} >
  <footer className="root-footer">
    <div className="footer-heading-1 fh">
      <h2>About us</h2>
      <a  href="#">services</a>
      <a href="#">blogs</a>
      <a href="#">motto</a>
      <a href="#">achievements</a>
      <a href="#">terms &amp; conditions</a>
    </div>
    <div className="footer-heading-2 fh">
      <h2>About us</h2>
      <a href="#">services</a>
      <a href="#">blogs</a>
      <a href="#">motto</a>
      <a href="#">achievements</a>
      <a href="#">terms&amp;conditions</a>
    </div>
    <div className="footer-heading-3 fh">
      <h2>About us</h2>
      <a href="#">services</a>
      <a href="#">blogs</a>
      <a href="#">motto</a>
      <a href="#">achievements</a>
      <a href="#">terms&amp;conditions</a>
    </div>
    <div className="footer-heading-4 fh">
      <h2>About us</h2>
      <a href="#">services</a>
      <a href="#">blogs</a>
      <a href="#">motto</a>
      <a href="#">achievements</a>
      <a href="#">terms&amp;conditions</a>
    </div>
  </footer>
  <h2 className="hhtag" >Join our newsletter !</h2>
  <div className="footer-email-button">
    <input type="e-mail" id="footer_email_button" placeholder="    Enter your e-mail :)" />
    <input type="button" defaultValue="Subscribe" id="footer_signup_button" />
  </div>
  <div className='footer-icon'>
  <ul>  
     <li><a style={{color:"blue"}} className=' fa-2xl'><FontAwesomeIcon icon={faFacebook} /></a></li>
     <li > <a style={{background: '-webkit-linear-gradient(#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)'}}className='insta-icon fa-2xl'><FontAwesomeIcon icon={faInstagram} /></a></li>
     <li> <a className=' fa-2xl'><FontAwesomeIcon icon={faTwitter} /></a></li>
     <li> <a style={{color:"black"}}className=' fa-2xl'><FontAwesomeIcon icon={faGithub} /></a></li>
    </ul>
  </div>
  
  <div className="sm-wordings">
    <a href="#" className="smw">Home</a>
    <a href="#" className="smw">Services</a>
    <a href="#" className="smw">Terms &amp; conditions</a>
    <a href="#" className="smw">Privacy policy</a>
  </div>
  <div className="lstftr">
    <h5>All rights reserved <a style={{color:"black"}} className=' fa-xs' href="#"><FontAwesomeIcon icon={faCopyright} /></a> Doctocare 2023</h5>
  </div>
</div>

    )
  }
