import React from 'react';
import './AvatarInfo.css';
import { IoMdSettings, FiLogOut } from 'react-icons/all';


export default function AvatarInfo() {
  return (
    <div className='avatar'>
        <div className='avatar__first'>
            <div className='avatar__first__img'>
                <img src="src/assets/Avatar.png" alt="Avatar" />
            </div>
            <div className='avatar__first__info'>
                <h4>Name</h4>
                <p>name@gmail.com</p>
            </div>
        </div>
        <div className='avatar__second'>
            <div>
                <div className='avatar__second__icon'><IoMdSettings /></div>
                <p>Settings</p>
                <div className='avatar__second__icon'><FiLogOut /></div>
                <p>Logout</p>
            </div>
        </div>
        <div className='avatar__last'>
            <p>condition d'utilisation</p>
        </div>
    </div>
  )
}
