import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "../Comp/Common/Navbar/Navbar";
import Home from '../Comp/Home/Home';
import About from "../Comp/About/About";
import Services from "../Comp/Services/Services";
import Speaker from "../Comp/Speaker/Speaker";
import Contact from "../Comp/Contact/Contact";
import Learning from "../Comp/InnerServices/Learning";
import Conferences from "../Comp/InnerServices/Conferences";
import Extended from "../Comp/InnerServices/Extended";
import PrivacyPolicy from '../Comp/PrivacyPolicy/PrivacyPolicy';
import Footer from '../Comp/Common/Footer/Footer';
const Routes_App = () => {
    return (
        <>
          
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="speaker" element={<Speaker />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="learning" element={<Learning />} />
                        <Route path="conferences" element={<Conferences />} />
                        <Route path="extended" element={<Extended />} />
                        <Route path="privacy" element={<PrivacyPolicy />} />
                        <Route path="footer" element={<Footer />}></Route>
                    </Route>
                </Routes>
            <Footer />
        </>
    )
}

export default Routes_App
