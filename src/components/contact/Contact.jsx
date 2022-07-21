import React from 'react'
import './styles/contact.css'

const Contac = () => {
    return (
        <div class="container">
            <input type="checkbox" id="control" />
            <label id="main-menu" for="control">
                <div class="share top">
                    <div class="toplayer"></div>
                </div>
                <div class="share mid">
                    <div class="toplayer"></div>
                </div>
                <div class="share bottom">
                    <div class="toplayer"></div>
                </div>
            </label>
            <div class="icon-container"><i class="fa fa-github fa-4x icon-3d"></i>
                <div class="section one"></div>
                <div class="section two"></div>
                <div class="section three"></div>
                <div class="section four"></div><a class="hover-toggle" href="#"></a>
            </div>
            <div class="icon-container"><i class="fa fa-twitter fa-4x icon-3d"></i>
                <div class="section one"></div>
                <div class="section two"></div>
                <div class="section three"></div>
                <div class="section four"></div><a class="hover-toggle" href="#"></a>
            </div>
            <div class="icon-container"><i class="fa fa-instagram fa-4x icon-3d"></i>
                <div class="section one"></div>
                <div class="section two"></div>
                <div class="section three"></div>
                <div class="section four"></div><a class="hover-toggle" href="#"></a>
            </div>
            <div class="icon-container"><i class="fa fa-whatsapp fa-4x icon-3d"></i>
                <div class="section one"></div>
                <div class="section two"></div>
                <div class="section three"></div>
                <div class="section four"></div><a class="hover-toggle" href="#"></a>
            </div>
            <div class="icon-container"><i class="fa fa-facebook fa-4x icon-3d"></i>
                <div class="section one"></div>
                <div class="section two"></div>
                <div class="section three"></div>
                <div class="section four"></div><a class="hover-toggle" href="#" id="final"></a>
            </div>
        </div>
    )
}

export default Contac