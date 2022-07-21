import React, { useState } from 'react'
import './style/contact.css'

const Contact = () => {
    const [contactOpen, setContactOpen] = useState(false)
    const contactToggle = () => {
        setContactOpen(!contactOpen)
    }
  return (
    <>
       <div className={ contactOpen ? 'home-icon_container' : 'home-icon_container home-icon_container-action'} >             
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
        <div className="home-action" onClick={contactToggle}>
            {
                contactOpen ? <div>
                    <p>C <br /> o <br /> n <br /> t <br /> a <br /> c <br /> t <br /> o</p>
                    <i className="fa-solid fa-circle-right"></i>
                </div>
                :
                <i className="fa-solid fa-circle-left"></i>

            }
        </div>
    </>
  )
}

export default Contact