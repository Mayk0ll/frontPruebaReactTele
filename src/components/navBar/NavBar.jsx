import React from 'react'
import './navBar.css'
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <div className='containerNavBar'> 
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <div className="enlaces">
                <NavLink to='/home' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Inicio</NavLink>
            </div>            
        </div>
    );
}
