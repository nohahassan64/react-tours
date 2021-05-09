import React from 'react'
import Logo from '../../images/logo.png'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="nav">
            <img src={Logo} alt="Logo" />
            <ul className="nav-links">
                <li>
                    <a href="/"  className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/"  className="nav-link">About</a>
                </li>
                <li>
                    <a href="/"  className="nav-link active">Tours</a>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar
