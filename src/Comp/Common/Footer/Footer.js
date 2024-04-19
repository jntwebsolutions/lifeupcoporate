import React from 'react'
import footerLogo from "../../../Assests/img/footer-logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { GrYoutube } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
        <section id='footer'>
            <div className='footerborder-bottom'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='footer-logo'>
                                <a href="/"><img src={footerLogo} alt='footerLogo'></img></a>
                                <p>LifeUP Corporate Wellness designs corporate wellness programs that create the ‘a-ha!’
                                    moments that transform ordinary lives into extraordinary lifestyles
                                </p>
                                <div className='footer-social-icon'>
                                    <i><a href='https://www.facebook.com/lifeuphealthcoaching' target='_blank'><FaFacebookF /></a></i>
                                    <i><a href="https://www.instagram.com/_life_up_/" target='_blank'><ImLinkedin2 /></a></i>
                                    <i><a href="https://www.youtube.com/channel/UCOQvsfoRHbXMRmzNfxreLMg" target='_blank'><GrYoutube /></a></i>
                                    <i><a href='https://www.linkedin.com/in/derek-opperman-737467114/' target='_blank'><PiInstagramLogoFill /></a></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-12 col-xs-12'>
                            <div className='footer-list'>
                                <h3>useful links</h3>
                                <ul>
                                    <li><a href='/'>HOME</a></li>
                                    <li><a href='/about'>ABOUT</a></li>
                                    <li><a href='/services'>SERVICES</a></li>
                                    <li><a href='/speaker'>SPEAKER</a></li>
                                    <li><a href='/blog'>BLOG</a></li>
                                    <li><a href='/contact'>CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'><div className='office-list footer-list'>
                            <h3>office</h3>
                            <ul>
                                <li>  <a href='tel:+3106833374' className='navbar-top-link'><BiSolidPhoneCall />
                                    <p>(310) 683-3374</p>
                                </a></li>
                                <li>
                                    <a href='mailto:hello@lifeupcorporatewellness.com' target="_blank" className='navbar-top-link'><HiMail />
                                        <p>hello@lifeupcorporatewellness.com</p>
                                    </a></li>
                                <li> <a href='https://maps.app.goo.gl/bgA8rcG7BZ6gGhCg6' target='_blank' className='navbar-top-link'><FaMapMarkerAlt />
                                    <p>832 N. La Brea Ave Los Angeles CA 90038</p>
                                </a></li>
                            </ul>
                        </div></div>
                        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                            <div className='footer-list footer-map'>
                                <div class="responsive-map">
                                    <iframe loading="lazy" src="https://maps.google.com/maps?q=832%20N.%20La%20Brea%20Ave%20Los%20Angeles%20CA%2090038&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="832 N. La Brea Ave Los Angeles CA 90038"
                                        aria-label="832 N. La Brea Ave Los Angeles CA 90038" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'><a>privacy policy</a></div>
        </section>
        </footer>
    )
}

export default Footer
