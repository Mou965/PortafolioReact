import React from 'react'
import video from '../../assets/video/fondo.mp4'
import './style/home.css'
const Home = () => {
    return (
        <header className='home'>
            <div className="home-container">
                <div className="home-content">
                    <h2 className="home-title">Moises Ramirez</h2>
                    <h3 className="home-developer">Desarrollador web <br></br>Frontend Developer</h3>
                    <div className="home-cv-container">
                        <button className="home-btn"><a href="#"
                            title="Linkedin">Descargar Cv</a>
                        </button>
                    </div>
                </div>
                <div className='home-icon_container'>             
                    <div className='home-icon-linkedin'>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    <div className='home-icon-github'>
                         <i className="fa-brands fa-github"></i>
                    </div>
                    <div className='home-icon-envelope'>  
                         <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
                <div className="homevideo">
                    <video autoPlay loop muted type="video/mp4" src={video}></video>
                </div>
                <div className="overflow"></div>
            </div>
        </header>
    )
}

export default Home