import React, {useState} from 'react';
import './Navbar.css';
import { FaTimes, FaBars } from 'react-icons/fa'

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogged = true;

  const showMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="">
            <img src="src/assets/Logo.png" alt="Logo" />
          </a> 
        </div>
        <div className={`navbar__links ${isMenuOpen ? 'navbar__links__responsive' : ''}`}>
          <ul className='navbar__links__left'>
            <li><a href="">Evenement</a></li>
            <li><a href="">Donation</a></li>
          </ul>
          <ul className='navbar__links__right'>
            <li className='navbar__links__right__trad'>Fr-<span>En</span></li>
            <li>
              {isLogged ? 
                <button className='navbar__links__right__avatar'>
                  {/* <img src='src/assets/avatar.png' alt='Avatar' /> */}
                  <h3>Avatar</h3>
                </button>: 
                <button className='navbar__links__right__login'>
                  <a href="#">Sign In</a>
                </button>
               }
            </li>
          </ul>
        </div>
      </nav>
      <button className='navbar__menu' onClick={showMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  )
}
