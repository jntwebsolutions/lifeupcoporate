import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import logo from "../../../Assests/img/logo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import './Navbar.css';
const Navbar = () => {
    const [activeItem, setActiveItem] = useState('home'); // Initially setting 'home' as active
    // Function to handle click on navbar items
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    return (
        <>

            <div className='navbar-top'>
                <div className='container alltopcontactalllinks'>
                    <div className='topcontactalllinks'>
                        <a href='tel:+3106833374' className='navbar-top-link'><BiSolidPhoneCall />
                            <p>(310) 683-3374</p>
                        </a>
                        <a href='mailto:hello@lifeupcorporatewellness.com' target="_blank" className='navbar-top-link'><MdEmail />
                            <p>hello@lifeupcorporatewellness.com</p>
                        </a>
                        <a href='https://maps.app.goo.gl/bgA8rcG7BZ6gGhCg6' target='_blank' className='navbar-top-link'><FaMapMarkerAlt />
                            <p>832 N. La Brea Ave Los Angeles CA 90038</p>
                        </a>
                    </div>
                    <div className='topcontactsociallinks'>
                        <a href='#' className='navbar-top-link'><TfiFacebook />
                        </a>
                        <a href='#' className='navbar-top-link'><TfiLinkedin />
                        </a>
                        <a href='#' className='navbar-top-link'><BsYoutube />
                        </a>
                        <a href='#' className='navbar-top-link'><AiFillInstagram />
                        </a>
                    </div>
                </div>
            </div>
            <div id='navbar'>
                <nav class="navbar navbar-expand-lg">
                    <div class="container navbar-inner">
                        <div className='navbar-logo'><a class="navbar-brand" href="#"><img src={logo} alt='logo'></img></a></div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item" >
                                    <Link to="/" className='active'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">about</Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/speaker">Speaker</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <button class="btn yellow-btn" type="submit">schedule a call</button>
                        </div>
                    </div>

                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar;
