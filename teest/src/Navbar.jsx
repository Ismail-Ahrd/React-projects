// import React, { useRef, useState } from 'react';
// import { FaTimes, FaBars } from 'react-icons/fa';
// import './Navbar.css';

// export default function Navbar() {
//     const navRef = useRef();
//     const [navIsHide, setNavIsHide] = useState(true);
//     const isLogged = true;

//     const showNavbar = () => {
//         navRef.current.classList.toggle('navbar__responsive');
//         setNavIsHide(!navIsHide);
//     }

//   return (
//     <header>
//         <nav className="navbar">
//             <a href="#" className="navbar__logo">
//                 <img src="src/assets/Logo.png" alt="Logo" />
//             </a>
//             <div ref={navRef}  className='navbar__links'>
//                 <ul className={`navbar__links__left ${isLogged ? "navbar__links__left__userLogged" : ""}`}>
//                     <li><a href="#">Events</a></li>
//                     <li><a href="#">Donation</a></li>
//                 </ul>
//                 <ul className={`navbar__links__right ${isLogged ? "navbar__links__right__userLogged" : ""}`}>
//                     <div className="line"></div>
//                     <li className='navbar__trad'>Fr- <span>En</span> </li>
//                     <li>
//                         {isLogged ? 
//                             <button className='navbar__avatar'>
//                                 <img src='src/assets/avatar.png' alt='Avatar' />
//                             </button>: 
//                             <button className='navbar__login'>
//                                 <a href="#">Sign In</a>
//                             </button>
//                         }
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//         <button className='navbar__menu' onClick={showNavbar}>
//             {navIsHide? <FaBars /> : <FaTimes /> } 
//         </button>
//     </header>
//   )
// }

import React, {useState} from 'react';
import './Navbar.css';
import { FaTimes, FaBars } from 'react-icons/fa'
import AvatarInfo from './AvatarInfo';

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAvatarInfo, setShowAvatarInfo] = useState(false);
  const isLogged = true;

  const showMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  const showAvatarInfos = () => {
    setShowAvatarInfo(!showAvatarInfo);
  }

  return (
    <header>
      <div className='first'>
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
                    <button className='navbar__links__right__avatar' onClick={showAvatarInfos}>
                    <img src='src/assets/avatar.png' alt='Avatar' />
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
      </div>
      
      {showAvatarInfo ? 
        <div className='navbar__avatarInfo'>
            <div>
                <AvatarInfo /> 
            </div>
        </div> : 
       null }
      
    </header>
  )
}