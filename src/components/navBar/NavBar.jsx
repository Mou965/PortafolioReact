import React from 'react'
import './styles/navBar.css'
const NavBar = ({toggle}) => {

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className="mobile-icon" onClick={toggle}>
                    <i className="fa-solid fa-code"></i>
                </div>
                <div className='navbar'>
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <a href="#" className="navbar_link">
                                <p>Sobre mi</p>
                            </a>
                        </li>
                        <li className="navbar_item">
                            <a href="#" className="navbar_link">
                                <p>Habilidades</p>
                            </a>
                        </li>
                        <li className="navbar_item">
                            <a href="#" className="navbar_link">
                                <p>Portafolio</p>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar