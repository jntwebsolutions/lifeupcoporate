import React from 'react'
import "./CommonServices.css";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const CommonServices = () => {
  return (
    <div className='services'>
      <div className='container'>
        <h4 className='h4-head main-head'>
          services</h4>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <div className='out-border'>
              <div className='services-box'>
                <div>
                  <h4 class="h4-head">Learning</h4>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Lunch and Learns, Open Mics</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Wellness Classes</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Content Creation</p>
                  </a>
                  <a className='navbar-top-link navbar-top-link-top'>
                    <IoIosArrowForward />
                    <p>Internal Stretching/Ergonomics Videos</p>
                  </a>
                </div>
                <div id="hover-btn">
                  <a href="/learning" class="button">
                    <span class="icon">
                      <span className='hover-icon'><MdArrowOutward /></span></span>
                    <span class="text">Full Service</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='out-border'>
              <div className='services-box'>
                <div>
                  <h4 class="h4-head">Conferences</h4>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Keynote</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Digital Scavenger Hunts</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Wellness Classes</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Menu Design</p>
                  </a>
                </div>
                <div id="hover-btn">
                  <a href="/conferences" class="button">
                    <span class="icon">
                      <span className='hover-icon'><MdArrowOutward /></span></span>
                    <span class="text">Full Service</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='out-border'>
              <div className='services-box'>
                <div>
                  <h4 class="h4-head">Extended</h4>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Healthy Habit Challenge</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Healthy Habits for the Busy</p>
                  </a>
                  <a className='navbar-top-link'>
                    <IoIosArrowForward />
                    <p>Business Program</p>
                  </a>
                </div>
                <div id="hover-btn">
                  <a href="/extended" class="button">
                    <span class="icon">
                      <span className='hover-icon'><MdArrowOutward /></span></span>
                    <span class="text">Full Service</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommonServices
