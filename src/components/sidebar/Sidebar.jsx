import React from 'react'
import './style/sidebar.css'

const Sidebar = ({toggle, isOpen}) => {

  return (
    <nav className={ isOpen ? 'sidebar sidebar-open' : 'sidebar'} onClick={toggle}>
        <div className="sidebar-icon">
            <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="sidebar-wrapper">
            <ul className="sidebar-menu">
                <li className="sidebar-menu_item">
                    <a href="#" className="sidebar-link">
                        <p>Sobre mi</p>
                    </a>
                </li>
                <li className="sidebar-menu_item">
                    <a href="#" className="sidebar-link">
                        <p>Habilidades</p>
                    </a>
                </li>
                <li className="sidebar-menu_item">
                    <a href="#" className="sidebar-link">
                        <p>Portafolio</p>
                    </a>
                </li>
                <li className="sidebar-menu_item">
                    <a href="#" className="sidebar-link">
                        <p>Contacto</p>
                    </a>
                </li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Sidebar