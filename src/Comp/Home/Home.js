import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import LogoGroup from '../Common/LogoGroup/LogoGroup';
import VideoImg from "../../Assests/img/video-img.png"
import footerLogo from "../../Assests/img/footer-logo.png";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import NumberCounter from '../Common/NumberCounter/NumberCounter';
import YellowLine from "../../Assests/img/yellowline.png";
import WhiteLine from "../../Assests/img/whiteline.png";
import Darek from "../../Assests/img/Derek.png";
import knowledgeQuest from "../../Assests/img/knowledgequest.png";
import CommonServices from "../Common/CommonServices/CommonServices"
import Solution1 from "../../Assests/img/solution1.png";
import Solution2 from "../../Assests/img/solution2.png";
import Faq from "../../Comp/Common/Faq/Faq";
import blog1 from "../../Assests/img/blog1.jpg";
import Testimonial from "../../Comp/Common/Testimonial/Testimonial";
import WorkplaceWellness from "../Common/WorkplaceWellness/WorkplaceWellness";
import ContactForm from "../Common/ContactForm/ContactForm";
import OwlCarousel from 'react-owl-carousel';
import "./Home.css";
const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [videoId, setVideoId] = useState('');
    const openModal = (id) => {
        setVideoId(id);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setVideoId('');
    };
    return (
        // banner start
        <section className='for-top-spacing'>
            <section id='home' className='sm-home'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-12 sm-none'></div>
                        <div className='col-md-12 col-sm-12 col-lg-7 '>
                            <div className='home-text'>
                                <h2>
                                    A Unique Approach <br></br>to <span className='yellow-txt'>Corporate Wellness</span></h2>
                                <p>LifeUP Corporate Wellness designs corporate wellness programs that
                                    create the 'a-ha!' moments that transform ordinary lives into extraordinary lifestyles.</p>
                                <a href='/contact'>
                                    <button className="btn yellow-btn" type="submit">schedule a call
                                        <span className='home-icon'><GoArrowUpRight /></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
            {/* ------------------------------ */}
            {/* logo-grp start */}
            <section id='logo-grp'>
                <LogoGroup />
            </section>
            {/* logo-grp end */}
            {/* ------------------------------ */}
            {/* video-section start */}
            <section id='video-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-8 video-section-inner'>
                            <div className='video-section-inner-text'>
                                <div className="container">
                                    <button className="VideoImg" onClick={() => openModal('638399892')}><img src={VideoImg} alt='VideoImg'></img></button>

                                    {modalOpen && (
                                        <div className="modal-overlay" onClick={closeModal}>
                                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                <span className="modal-close" onClick={closeModal}>&times;</span>
                                                <iframe
                                                    src={`https://player.vimeo.com/video/${videoId}`}
                                                    // width="800"
                                                    // height="515"
                                                    frameborder="0"
                                                    allow="autoplay; fullscreen"
                                                    allowfullscreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-4 video-black-section'>
                            <div className='video-black-section-inner'>
                                <img src={footerLogo} alt='footerLogo'>
                                </img>
                                <h4 className='h4-head'>LifeUP's <span className='yellow-txt'>Healthy Habits </span> for the Busy Business Program</h4>
                                <p className='text-desc'>is a transformational, research-backed, comprehensive curriculum delivered in person, online, or in a hybrid framework.
                                    (Watch the two-minute video below to learn more...)</p>
                                <a href='https://vimeo.com/638399892?share=copy' target='_blank'><button className="btn transparent-btn" type="submit">watch video
                                    <span className='home-icon'><MdOutlineSlowMotionVideo /></span>
                                </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* video-section end */}
            {/* ------------------------------ */}
            {/* number-counter start */}
            <section id='number-counter'>
                <NumberCounter />
            </section>
            {/* number-counter end */}
            {/* ------------------------------ */}
            {/* Health & Wellness start */}
            <section id='HealthWellness' className='sm-HealthWellness'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-md-12 col-lg-7'>
                            <h4 className='h4-head'>
                                Corporate <span className='yellow-txt'>Health & Wellness </span>
                                Coach in LA</h4>
                            <p class="text-desc">Get the best corporate health & wellness coach in Los
                                Angeles and enables your organization to…</p>
                            <div className='healthwellenes-number'>
                                <h1>01</h1>
                                <span>Build a company culture that is known in the industry as one that supports employees comprehensively.
                                    as a company worth staying with for the long term.</span>
                                <span className='YellowLine'><img src={YellowLine} alt='YellowLine'></img></span>
                            </div>
                            <div className='healthwellenes-number-white'>
                                <h1>02</h1>
                                <span>Create a wellness culture that has employees leading your industry in fitness,
                                    wellness, and confidence.</span>
                                <span className='YellowLine'><img src={WhiteLine} alt='WhiteLine'></img></span>
                            </div>
                            <div className='healthwellenes-number number3'>
                                <h1>03</h1>
                                <span>Offer a comprehensive wellness program that supports employees live a healthier,
                                    more fulfilled life at work and at home</span>
                                <span className='YellowLine'><img src={YellowLine} alt='YellowLine'></img></span>
                            </div>
                            <div className='healthwellenes-number-white'>
                                <h1>04</h1>
                                <span>Have a service provider handle all of the employee themes and communications so HR doesn’t have to.</span>
                                <span className='YellowLine'><img src={WhiteLine} alt='WhiteLine'></img></span>
                            </div>
                            <div className='healthwellenes-number number3'>
                                <h1>05</h1>
                                <span>See your insurance premiums go down while productivity goes up.</span>
                                <span className='YellowLine'><img src={YellowLine} alt='YellowLine'></img></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Health & Wellness end */}
            {/* ------------------------------ */}
            {/* Knowledge Quest start */}
            <section id='knowledgeQuest'>
                <div className='container knowledgeQuestbg'>
                    <div className='row'>
                        <img src={knowledgeQuest} alt='knowledgeQuest' className='knowledgeQuestImg'></img>
                    </div>
                    <div className='row knowledgeQuest-text'>
                        <div className='col-md-5 sm-none'></div>
                        <div className='col-md-12 col-lg-7'>
                            <h4 className='h4-head'>
                                "Knowledge Quest:<br></br>
                                Engage in our quiz section & put your expertise to the test at Quiz Zone."
                            </h4>
                            <p class="text-desc">Take Our Revealing 6-Question Quiz!</p>
                            <button className="btn yellow-btn black-btn" type="submit">start quiz
                                <span className='home-icon'><GoArrowUpRight /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Knowledge Quest end */}
            {/* services start */}
            <section id="services">
                <CommonServices />
            </section>
            {/* services end */}
            {/* ------------------------------ */}
            {/* lifestyleCoach start */}
            <section id='lifestyleCoach'>
                <div className='container darekimg'>
                    <div className='row sm-none'>
                        <img src={Darek} alt='Darek'></img>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6 lifestyleCoachInner'>
                            <h4 className='h4-head'>Meet Derek Opperman</h4>
                            <h3>Health and Lifestyle Coach in LA</h3>
                            <p class="text-desc">Derek Opperman is a certified Corporate Wellness coach in LA across multiple health disciplines,
                                from fitness training to nutrition design, and integrative lifestyle planning.
                                He’s also certified as a Corporate Wellness Specialist and is able to speak about the importance of health at a com- pany-wide, cultural level.
                                <br></br><br></br>
                                His company LifeUP’s Healthy Habits for the Busy Business program is a transformational, research-backed,
                                comprehensive curriculum delive- red in-person, online, or in a hybrid framework.</p>
                            <button className="btn yellow-btn" type="submit">read more
                                <span className='home-icon'><GoArrowUpRight /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* lifestyleCoach end */}
            {/* ------------------------------ */}
            {/* Solutions start */}
            <section id='solutions'>
                <div className='container padding-start'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6'><img src={Solution1} alt='Solution1'></img></div>
                        <div className='col-md-12 col-lg-6 solutions-text'><h4 class="h4-head">Solutions For The Employee/ Individual From Best
                            Corporate Health Coach In LA</h4>
                            <p class="text-desc">LifeUP offers a comprehensive Wellness program that is
                                delivered in one place.</p>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Exercise Feels Intimidating?</h4>
                                    <p>We'll show you where to confidently start.</p>
                                </span>
                            </div>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Is Stress Becoming a Burden?</h4>
                                    <p>Get support working with and through it.</p>
                                </span>
                            </div>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Nutrition Feels Confusing and Restrictive?</h4>
                                    <p>Let's design you a 'perfect' plate.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container padding-end'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6 solutions-text'><h4 class="h4-head">Solutions For The Company</h4>
                            <p class="text-desc">LifeUP offers a comprehensive Wellness program that is delivered in one place.</p>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Too Much Manual Work?</h4>
                                    <p>Let us do the heavy lifting.</p>
                                </span>
                            </div>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Delivering Stale Content?</h4>
                                    <p>We'll spice it up.</p>
                                </span>
                            </div>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Need a Health Culture Boost?</h4>
                                    <p>Let's build a wellness community.</p>
                                </span>
                            </div>
                            <div className='before-border-text'>
                                <span>
                                    <h4>Returning Employees to Work Can be Complicated.</h4>
                                    <p>Delivering a health program doesn't have to be.</p>
                                </span>
                            </div>
                            <p className='solution-best'>Best of all: The Program can be run live, virtual, or hybrid</p>
                        </div>
                        <div className='col-md-12 col-lg-6'><img src={Solution2} alt='Solution1'></img></div>
                    </div>
                </div>
            </section>
            {/* Solutions end */}
            {/* --------------------------- */}
            {/* video testimonial start */}
            <section id='videoTesti'>
                <div className='container'>
                    <div className='row'>
                        <h4 class="h4-head main-head">Video Testimonials</h4>
                        <OwlCarousel className='owl-theme' loop margin={30} items={3} navs={true} responsive={{
                            0: {
                                items: 1 // Number of items to show on small screens (width < 600px)
                            },
                            600: {
                                items: 1 // Number of items to show on medium screens (600px <= width < 992px)
                            },
                            992: {
                                items: 3 // Number of items to show on large screens (width >= 992px)
                            }
                        }}>
                            <div class='item'>
                                <div className='test-box'>
                                    <h3>Chantelle N.<br></br> Baker Hughes</h3>
                                    <div className="video-popup">
                                        <iframe
                                            src={`https://player.vimeo.com/video/638399892`}
                                            // width="800"
                                            // height="515"
                                            frameborder="0"
                                            allow="autoplay; fullscreen"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <p class="text-desc">
                                        Derek helped me develop my 'keystone habits. Simple practices done daily
                                        that seemed almost inconsequential at the time..those, combined behavior tracking through wearable
                                        tech have kept 60lbs off for the last three years</p>

                                </div>
                            </div>
                            <div class='item'>
                                <div className='test-box'>
                                    <h3>Chantelle N.<br></br> Baker Hughes</h3>
                                    <div className="video-popup">
                                        <iframe
                                            src={`https://player.vimeo.com/video/638399892`}
                                            // width="800"
                                            // height="515"
                                            frameborder="0"
                                            allow="autoplay; fullscreen"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <p class="text-desc">
                                        Derek helped me develop my 'keystone habits. Simple practices done daily
                                        that seemed almost inconsequential at the time..those, combined behavior tracking through wearable
                                        tech have kept 60lbs off for the last three years</p>

                                </div>
                            </div>  <div class='item'>
                                <div className='test-box'>
                                    <h3>Chantelle N.<br></br> Baker Hughes</h3>
                                    <div className="video-popup">
                                        <iframe
                                            src={`https://player.vimeo.com/video/638399892`}
                                            // width="800"
                                            // height="515"
                                            frameborder="0"
                                            allow="autoplay; fullscreen"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <p class="text-desc">
                                        Derek helped me develop my 'keystone habits. Simple practices done daily
                                        that seemed almost inconsequential at the time..those, combined behavior tracking through wearable
                                        tech have kept 60lbs off for the last three years</p>

                                </div>
                            </div>  <div class='item'>
                                <div className='test-box'>
                                    <h3>Chantelle N.<br></br> Baker Hughes</h3>
                                    <div className="video-popup">
                                        <iframe
                                            src={`https://player.vimeo.com/video/638399892`}
                                            // width="800"
                                            // height="515"
                                            frameborder="0"
                                            allow="autoplay; fullscreen"
                                            allowfullscreen
                                        ></iframe>
                                    </div>
                                    <p class="text-desc">
                                        Derek helped me develop my 'keystone habits. Simple practices done daily
                                        that seemed almost inconsequential at the time..those, combined behavior tracking through wearable
                                        tech have kept 60lbs off for the last three years</p>

                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/* video testimonial end */}
            {/* --------------------------- */}
            {/* blog start */}
            <section id='blog'>
                <div className='container'>
                    <div className='row'>
                        <h4 class="h4-head main-head">Latest Corporate Wellness News</h4>
                        <div className='col-md-12 col-lg-7 blog-left'>
                            <div className='zoom-img'>
                                <img src={blog1} alt='blog1'></img>
                            </div>
                            <div className='blog-left-text'>
                                <span>
                                    <h5>April 5, 2024</h5>
                                    <h3>Healthy Employees, Thriving Business : Unlocking the Potential of We.</h3></span>
                                <button className='blog-circle'><GoArrowUpRight /></button>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 '>
                            <div className='blog-right'>
                                <div className='blog-right-flex'>
                                    <div className='zoom-img'>
                                        <img src={blog1} alt='blog1'></img>
                                    </div>
                                    <div className='left-blog-txt'>
                                        <h5>April 5, 2024</h5>
                                        <h3>Diabetes Alert Day: A Wake-Up Call for Employee Health</h3>
                                        <button className='blog-circle'><GoArrowUpRight /></button>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-right padding-top'>
                                <div className='blog-right-flex'>
                                    <div className='zoom-img'>
                                        <img src={blog1} alt='blog1'></img>
                                    </div>
                                    <div className='left-blog-txt'>
                                        <h5>April 5, 2024</h5>
                                        <h3>Diabetes Alert Day: A Wake-Up Call for Employee Health</h3>
                                        <button className='blog-circle'><GoArrowUpRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog end */}
            {/* --------------------------- */}
            {/* testimonial start */}
            <section id='testimonial'>
                <div className='container'>
                    <div className='row'>
                        <h4 class="h4-head main-head">Testimonials</h4>
                        <Testimonial />
                    </div>
                </div>
            </section>
            {/* testimonial end */}
            {/* --------------------------- */}
            {/* WorkplaceWellness start */}
            <section id='WorkplaceWellnessTop'>
                <WorkplaceWellness />
            </section>
            {/* WorkplaceWellness end */}
            {/* --------------------------- */}
            {/* contact form start */}
            <ContactForm />
            {/* contact form end */}
            {/* --------------------------- */}
            {/* faq start */}
            <section>
                <Faq />
            </section>
            {/* faq end */}

        </section>

    )
}

export default Home
