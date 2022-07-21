import React from 'react'
import './styles/navBar.css'
import images from '../../assets/js/images'
const NavBar = ({toggle}) => {

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <a href="#" className='nav-logo'>
                    <div className='nav-logo-text'>
                        {/* <img src={images[0].img} alt={images[0].title} /> */}
                    </div>
                </a>
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
                        {/* <li className="navbar_item">
                            <a href="#" className="navbar_link">
                                <p>Contacto</p>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar