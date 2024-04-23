import React from 'react'
import "./Speaker.css";
import TopBanner from '../Common/TopBanner/TopBanner';
import DiscussionTopicsDarrek from "../../Assests/img/DiscussionTopicsDereek.png";
import { GoArrowUpRight } from "react-icons/go";
import schedule from "../../Assests/img/schedule.png";
import play from "../../Assests/img/play.png";
import stress from "../../Assests/img/stressed.png";
import Detoxification from "../../Assests/img/detoxification.png";
import Exercise from "../../Assests/img/exercise.png";
import rest from "../../Assests/img/rest.png";
import instagram from "../../Assests/img/instagram.png";
import email from "../../Assests/img/email.png";
import podcast from "../../Assests/img/podcast.png";
import monthly from "../../Assests/img/monthly.png";
import facebook from "../../Assests/img/facebook.png";
import linkdlin from "../../Assests/img/linkdlin.png";
import summits from "../../Assests/img/Summits.png";
import VideoTestimonial from "../Common/VideoTestimonial/VideoTestimonial";
import WorkplaceWellness from '../Common/WorkplaceWellness/WorkplaceWellness';
import ContactForm from '../Common/ContactForm/ContactForm';
const Speaker = () => {
  const data = {
    name: "Speaker"
  }
  return (
    <>
      <section className='for-top-spacing' id='Speaker-page'>
        {/* Speaker banner start */}
        <TopBanner {...data} />
        {/* Speaker banner end */}
        {/* ------------------------- */}
        {/* Speaker-inner banner start */}
        <section id="SpeakerInner">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 DerekSpeakerImg'>
                <h4 className="h4-head main-head">Derek Opperman</h4>
                <p className='text-desc'>LifeUP: A radical new approach to corporate health, wellness and a thriving workplace culture.</p>
                {/* <img src={DerekSpeaker} alt='DerekSpeaker'></img> */}
              </div>
              <div className='col-lg-8'>
                <div className='DerekSpeakerImgText'>
                  <h4 className="h4-head main-head">LifeUP delivers comprehensive, experiential programs that deliver the 'a-ha' moments that transform the wellness of companies, leaving their employees looking, feeling, and performing their</h4>
                  <p className='text-desc'>
                    My company LifeUP delivers comprehensive, experiential programs that deliver the 'a-ha' mo- ments that transform the wellness of companies, leaving their employees looking, feeling, and performing their very best.<br></br><br></br>
                    Derek is a corporate wellness coach and lifestyle expert who supports employees to experience the fulfillment of their potential so that their companies save money and build a flourishing culture of all-in-one turnkey premium service.<br></br><br></br>
                    His company LifeUP's Healthy Habits for the Busy Business program is a transformational, re- search-backed, comprehensive curriculum delivered in-person, online, or in a hybrid framework.<br></br><br></br>
                    Derek is a decorated athlete, all-natural physique competitor, and Fortune 500 speaker who never forgets he was just a middle-class kid with a big head, bad haircut, and bad skin until he discove- red health is a choice to make every single day. He acknowledges and speaks to the inner nerd in all of us.
                    Derek is based in LA, California, and is available for speaking events across the US, global and vir- tual summits, podcasts, and interviews.</p>
                  <a href='https://calendly.com/lifeup-health' target='_blank' rel="noopener noreferrer">
                    <button className="btn yellow-btn" type="submit">INVITE DEREK TO SPEAK AT YOUR NEXT EVENT
                      <span className='home-icon'><GoArrowUpRight /></span>
                    </button>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* Speaker-inner banner end */}
        {/* ---------------------------------- */}
        {/* DiscussionTopics start */}
        <section id="DiscussionTopics">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div className='DiscussionTopicsText'>
                  <h4 className="h4-head main-head">Derek Opperman</h4>
                  <div className='DiscussionTopicsText-IconBox'>
                    <div className='img'><img src={schedule} alt='schedule'></img></div>
                    <div className='text'>
                      <p className='text-desc'>You have the time! How to weave health and wellbeing into an impossible schedule</p>
                    </div>
                  </div>
                  <div className='DiscussionTopicsText-IconBox'>
                    <div className='img'><img src={play} alt='play'></img></div>
                    <div className='text'>
                      <p className='text-desc'>Nutrition - foundational foods that boost energy and performance</p>
                    </div>
                  </div>
                  <div className='DiscussionTopicsText-IconBox'>
                    <div className='img'><img src={stress} alt='stress'></img></div>
                    <div className='text'>
                      <p className='text-desc'>Stress mitigation - practices to master yourself and your environment</p>
                    </div>
                  </div>
                  <div className='DiscussionTopicsText-IconBox'>
                    <div className='img'><img src={Detoxification} alt='Detoxification'></img></div>
                    <div className='text'>
                      <p className='text-desc'>Detoxification strategies - cleaning up our bodies in a toxic world</p>
                    </div>
                  </div>
                  <div className='DiscussionTopicsText-IconBox'>
                    <div className='img'><img src={Exercise} alt='Exercise'></img></div>
                    <div className='text'>
                      <p className='text-desc'>Exercise and movement - what type and how much is best for you</p>
                    </div>
                  </div>
                  <div className='DiscussionTopicsText-IconBox'>
                    <div className='img'><img src={rest} alt='rest'></img></div>
                    <div className='text'>
                      <p className='text-desc'>Why Rest and Recovery are the secret to peak performance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12'><img src={DiscussionTopicsDarrek} alt='DiscussionTopicsDarrek'></img></div>
            </div>
          </div>
        </section>
        {/* DiscussionTopics end */}
        {/* -------------------------- */}
        {/* online start */}
        <section id='online'>
          <div className='container'>
            <div className='row'>
              <h4 className="h4-head main-head">join derek online</h4>
              <div className='col-md-4'><img src={facebook} alt='facebook'></img></div>
              <div className='col-md-4'><img src={linkdlin} alt='linkdlin'></img></div>
              <div className='col-md-4'><img src={instagram} alt='instagram'></img></div>
            </div>
            <div className='row online-top'>
              <div className='col-md-4'><img src={email} alt='email'></img></div>
              <div className='col-md-4'><img src={podcast} alt='podcast'></img></div>
              <div className='col-md-4'><img src={monthly} alt='monthly'></img></div>
            </div>
          </div>
        </section>
        {/* online end */}
        {/* ------------------- */}
        {/* podcastConference start */}
        <section id='podcastConference'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-5 col-sm-12 col-md-12 podcastConferenceImg'>
                <img src={summits} alt='summits'></img>
              </div>
              <div className='col-lg-7 col-sm-12 col-md-12 podcastConferenceImgtext'>
                <h4 className="h4-head main-head">Do you have a podcast, conference, or live event coming up?</h4>
                <p className='text-desc'>Derek is the #1 Coaching and Consulting Professional in the industry for having employers and employees experience fulfillment through holistic, comprehensive corporate health and wellness programs.<br></br><br></br>
                  Derek is your #1 keynote and motivational speaker on the future of corporate Health and Wellness Programs.<br></br><br></br>
                  From his own origin story of overcoming physical challenges, and a parent needing mental health support, to the 1000's 1:1 clients that have relied on Derek's whole being coa- ching, his talks will inspire, engage, and motivate your employees from leadership to su- pporting staff members.</p>
                <a href='https://calendly.com/lifeup-health' target='_blank' rel="noopener noreferrer">
                  <button className="btn yellow-btn black-btn" type="submit">INVITE DEREK TO SPEAK
                    <span className='home-icon'><GoArrowUpRight /></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* /* podcastConference end */}
        {/* ----------------------------- */}
        {/* video-section start */}
        <VideoTestimonial />
        {/* video-section end */}
        {/* --------------------------- */}
        {/* WorkplaceWellness start */}
        <WorkplaceWellness />
        {/* WorkplaceWellness end */}
        {/* ------------------------------- */}
        {/* ContactForm start */}
        <ContactForm />
        {/* ContactForm end */}
        {/* ------------------------------- */}
        {/* contact now start */}
        <section id='contactNow'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-12 col-sm-12'>
                <p class="text-desc">If you have any questions or inquiries about our Corporate Wellness Programs,
                  Please reach out so we can begin to discover what an impactful program for your team could look like.</p>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 contactNowBtn'>
                <a href='/contact'>
                  <button className="btn yellow-btn black-btn" type="submit">contact Now
                    <span className='home-icon'><GoArrowUpRight /></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* contact now end */}
      </section>
    </>
  )
}

export default Speaker;
