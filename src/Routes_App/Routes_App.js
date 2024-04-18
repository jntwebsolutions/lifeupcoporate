import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Comp/Common/Navbar/Navbar";
import Home from '../Comp/Home/Home';
import About from "../Comp/About/About";
import Services from "../Comp/Services/Services";
import Speaker from "../Comp/Speaker/Speaker";
import Blog from "../Comp/Blog/Blog";
import Contact from "../Comp/Contact/Contact";

const Routes_App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="services" element={<Services />} />
                        <Route path="speaker" element={<Speaker />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Routes_App
