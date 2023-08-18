import React from 'react'
import './App.css';
import Logo from './logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faGraduationCap,faPhone} from '@fortawesome/free-solid-svg-icons'

export default function Centreofexclence() {
  return (
    <div>
        <nav className='navbar'>
            <img className='logo' src={Logo} alt="logo" />
            <ul>
                <li><FontAwesomeIcon icon={faHome} /><a href="/home"> HOME</a></li>
                <li><FontAwesomeIcon icon={faGraduationCap} /><a href="/centreofexclence"> CENTRE OF EXCLENCE</a></li>
                <li><FontAwesomeIcon icon={faPhone} /><a href="/contact"> CONTACT INFO</a></li>
            </ul>
        </nav>
    </div>
  )
}
