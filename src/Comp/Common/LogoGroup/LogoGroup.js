import React from 'react'
import Logo1 from "../../../Assests/img/logo1.webp";
import Logo2 from "../../../Assests/img/logo2.webp";
import Logo3 from "../../../Assests/img/logo3.jpg";
import Logo4 from "../../../Assests/img/logo4.jpg";
import "./LogoGroup.css";
const LogoGroup = () => {
    return (
        <>
            <div className='logo-group'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><img src={Logo1} alt='Logo1'></img></div>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><img src={Logo2} alt='Logo2'></img></div>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><img src={Logo3} alt='Logo3'></img></div>
                        <div className='col-md-3 col-sm-6 col-xs-6 col-lg-3 sm-text-center'><img src={Logo4} alt='Logo4'></img></div>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default LogoGroup


