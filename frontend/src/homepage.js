import './homepage.css';
import React from 'react'
import Introvideo from './introvideo1.mp4'
import Logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGraduationCap,faPhone} from '@fortawesome/free-solid-svg-icons'
import Contactinfo from './contactinfo.js';
import Dropdown from 'react-bootstrap/Dropdown';



export default function homepage() {
  
  return (
    <div className='hero'>
        <video className='bgvideo' src={Introvideo} muted autoPlay loop /> 

        <nav>
            <img className='logo' src={Logo} alt="logo" />
            <ul>
                <li><FontAwesomeIcon icon={faHome} /><a href="/home"> HOME</a></li>
                
                <li><a href="#"> <Dropdown>
      <Dropdown.Toggle className='navigation' style={{fontWeight:"bold",color:"white",backgroundColor:"greeb"}} variant="none" id="">
      <FontAwesomeIcon style={{color:"#212529"}} icon={faGraduationCap} /> CENTRE OF EXCLENCE 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/dental">Dental</Dropdown.Item>
        <Dropdown.Item href="/cardiologist">Cardiologist</Dropdown.Item>
        <Dropdown.Item href="/dermatologist">Dermotologist</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></a></li>
                <li><FontAwesomeIcon icon={faPhone} /><a href="#footer"> CONTACT INFO</a></li>
            </ul>
        </nav>
            <div className="content">
                <a href="/explore">EXPLORE</a>
            </div>
            <div id='#footer'>
            <Contactinfo/>
            </div>
            

    </div>
  )
}