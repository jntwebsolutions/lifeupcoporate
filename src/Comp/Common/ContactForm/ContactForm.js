import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { LuSend } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { BiPencil } from "react-icons/bi";
const ContactForm = () => {
    return (
        <div>
            <section id='contact-form'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12'>
                            <h4 class="h4-head main-head">Join Derek's Online Community!</h4>
                            <form>
                                <div className='d-flex-roww'>
                                    <div className='d-flex-roww-left'>
                                        <span className='contact-form-icon'><AiOutlineUser /></span>
                                        <input type='text' placeholder='full name*' />
                                    </div>
                                    <div className='d-flex-roww-right'>
                                        <span className='contact-form-icon'><TfiEmail /></span>
                                        <input type='email' placeholder='email address*' />
                                    </div>
                                </div>
                                <div className='d-flex-roww'>
                                    <div className='d-flex-roww-left'>
                                        <span className='contact-form-icon'><LuSend /></span>
                                        <select>
                                            <option value="0">Select Services</option>
                                            <option value="1">Learning</option>
                                            <option value="2">Conferences</option>
                                            <option value="3">Extended</option>
                                        </select>
                                    </div>
                                    <div className='d-flex-roww-right'>
                                        <span className='contact-form-icon'><TbPhoneCall /></span>
                                        <input type='number' placeholder='Your Phone*' />
                                    </div>
                                </div>
                                <div className='d-flex-roww'>
                                    <div className='d-flex-roww-right edit-textarea'>
                                        <span className='contact-form-icon'><BiPencil /></span>
                                        <input type='text' placeholder='How Can We Help You?' className='textarea'></input>
                                    </div>
                                </div>
                                <div className='d-flex-roww submit-bottom'>
                                    <div className='d-flex-roww-left '>
                                        <button className="btn yellow-btn" type="submit">Book Appointment
                                            <span className='home-icon'><GoArrowUpRight /></span>
                                        </button>
                                    </div>

                                </div>


                            </form>
                        </div>
                        <div className='col-md-6'></div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default ContactForm
