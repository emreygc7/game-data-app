import React from "react";
import {Link} from 'react-router-dom'; 
import Logo from '../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'

const Header = () =>{
    return(
        <header>
            <div className="header-left">
                <Link to="/">
                    <img src={Logo} className="logo" alt="" />
                </Link>
            </div>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="check-btn">
                <FontAwesomeIcon icon={faBars} color="white" />
                </label>
                <ul className="nav-list">
                    
                    <li className="ul-list-item">
                        <Link to="/games">
                            Games
                        </Link>
                    </li>             
                    <li className="ul-list-item">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header; 