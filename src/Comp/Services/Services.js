import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import ScheduleCall from "../../Assests/img/scheduleLogo.png";
import Logo from "../../Assests/img/logo.png";
import Detoxification from "../../Assests/img/Detoxification.jpg";
import Nutrition from "../../Assests/img/Nutrition.jpg";
import StressManagment from "../../Assests/img/StressManagement.jpg";
import Movement from "../../Assests/img/Movement.jpg";
import RestRecovery from "../../Assests/img/RestRecovery.jpg";
import MindsetandBelief from "../../Assests/img/MindsetandBelief.jpg";
import Supplements from "../../Assests/img/Supplements.jpg";
import CreativityandPlay from "../../Assests/img/CreativityandPlay.jpg";
import conversationHealth from "../../Assests/img/conversationHealth.png";
import Summits from "../../Assests/img/Summits.png";
import Facilitator from "../../Assests/img/Facilitator.jpg";
import Speaking from "../../Assests/img/Speaking.png";
import IndividualPillars from "../../Assests/img/IndividualPillars.jpg";
import Challenges from "../../Assests/img/Challenges.jpg";
import ContinuedLearning from "../../Assests/img/ContinuedLearning.jpg";
import Faq from '../Common/Faq/Faq';
import "./Services.css"
import CommonServices from '../Common/CommonServices/CommonServices';
import ContactForm from "../Common/ContactForm/ContactForm";
import WorkplaceWellness from "../Common/WorkplaceWellness/WorkplaceWellness";
import TopBanner from '../Common/TopBanner/TopBanner';
import { Helmet } from "react-helmet";
const Services = () => {
  const data = {
    name: "services"
  }
  return (
    <>
      <Helmet>
        <title>Certified Corporate Health Programs & Services in Los Angeles</title>
        <meta name="description" content="our certified corporate health program helps improve employee's physical and mental wellbeing. We emphasize prevention via workplace programs" />
      </Helmet>
      <section className='for-top-spacing' id='Services-page'>
        {/* about banner start */}
        <TopBanner {...data} />
        {/* about banner end */}
        {/* ------------------------- */}
        {/* services start */}
        <section id="services">
          <div className='container'>
            <div className='row'>
              <h4 class="h4-head main-head">Corporate Health Program in LA</h4>
            </div>
          </div>
          <CommonServices />
        </section>
        {/* services end */}
        {/* ------------------------ */}
        {/* Professional Perspective start */}
        <section id='ProfessionalPerspective'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <h4 class="h4-head main-head">LifUp Corporate Wellness: A Professional Perspective</h4>
                <p className='text-desc'>With so much health information out in the world, it's hard to decipher what are true and relevant practices from marketing and snake oils. And if one is lucky enough to find a quality wellness program, how could it be imple- mented without a laborious onboarding process?
                  <br></br> <br></br>
                  Even with these obstacles to overcome, now is not the time to wait. Lack of exercise, nutrition education, and a disconnect from ourselves and ourcommunities has created an epidemic of chronic disease, and there's a good chance some or much of your workforce has already been afflicted. What's more, the responsibility of companies to support their people through these chal- lenges is reaching a crescendo. A recent survey found that one in two employees would like to see the compa- nies they work for place a greater
                  emphasis on their physical and psychological needs. The call is hard to ignore.</p>
              </div>

            </div>
          </div>
        </section>
        {/* Professional Perspective end */}
        {/* ---------------------------------- */}
        {/* schedule a call start */}
        <section id="scheduleCall">
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 col-lg-3'><img src={ScheduleCall} alt='ScheduleCall'></img></div>
              <div className='col-md-8 col-lg-6'>
                <h4 class="h4-head main-head">If you have any questions or inquiries about our Corporate Wellness Programs,
                  Please reach out so we can begin to discover what an impactful program for your team could look like.</h4>
              </div>
              <div className='col-md-12 col-lg-3 contactNowBtn '>
                <Link to='/contact'>
                  <button className="btn yellow-btn black-btn" type="submit">contact now
                    <span className='home-icon'><GoArrowUpRight /></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* schedule a call end */}
        {/* ------------------------------ */}
        {/* foundation piller start*/}
        <section id="foundationPiller">
          <div className='container'>
            <h4 class="h4-head main-head">Eight Foundational Pillars</h4>
            <div className="row">
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box black-piller'>
                  <div className='piller-boxLogo'>
                    <img src={Logo} alt='Logo'></img></div>
                  <h4 class="h4-head">Result-Driven Corporate <span className='yellow-txt'>Health Programs</span> in LA</h4>
                  <p className='text-desc'>Delivered in Eight Foundational Pillars,
                    all designed to teach and implement health practices that
                    empower employees with new access to actions they can imple- ment immediately.</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={Detoxification} alt='Detoxification'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">01</h4>
                        <h4 class="h4-head">Detoxification</h4>
                        <p className='text-desc'>Detoxification is the process of removing toxic substances from the body,
                          such as through drug use. It can also refer to the period of drug withdrawal
                          when an organism returns to homeo- stasis afte long-term use of an addictive substance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={Nutrition} alt='Nutrition'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">02</h4>
                        <h4 class="h4-head">Nutrition</h4>
                        <p className='text-desc'>Nutrition is the process by which organisms use food to support their life.
                          Nutrients are substances found in food that the body uses to grow, repro- duce, and survive.
                          The seven types of nutrients are: Carbohydrates,
                          Proteins, Fats, Vitamins, Minerals, Dietary fiber, and Water.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row foundationPillerTopSpacing">
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={StressManagment} alt='StressManagment'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">03</h4>
                        <h4 class="h4-head">Stress Management</h4>
                        <p className='text-desc'>It may seem like there's nothing you can do about stress.
                          The bills won't stop coming, there will never be more hours in the day,
                          and your work and family responsi- bilities will always be demand- ing.
                          But you have a lot more control than you might think</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={Movement} alt='Movement'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">04</h4>
                        <h4 class="h4-head">Movement</h4>
                        <p className='text-desc'>Movement is a noun that means the process of moving. or a change in position or
                          posture. It can also refer to a particular manner or style of moving,
                          or the act of moving people or things from one place to another. For example,
                          "She observed the gentle movement of his chest as he breathed".</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={RestRecovery} alt='RestRecovery'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">05</h4>
                        <h4 class="h4-head">Rest & Recovery</h4>
                        <p className='text-desc'>Sleep Foundation, 63% of adults report not getting enough sleep. And just two days with six or less hours of sleep makes one 2.5x more likely to catch a virus,
                          and it doesn’t have to be like this! Oftentimes, a great night’s rest is just a few changes away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row foundationPillerTopSpacing">
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={MindsetandBelief} alt='MindsetandBelief'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">06</h4>
                        <h4 class="h4-head">Mindset and Belief</h4>
                        <p className='text-desc'>Mindset is a person's way of thinking, and beliefs are ideas that are certain
                          to be true. Mindsets are made up of beliefs, values, and attitudes that influence an individual's thoughts, feelings, and actions.
                          Beliefs are ideas that are certain to be true, even if they don't have solid proof.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={Supplements} alt='Supplements'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">07</h4>
                        <h4 class="h4-head">Supplements</h4>
                        <p className='text-desc'>Supplements are manufac- tured products that provide nutrients, vitamins,
                          or ingredi- ents that may not be consumed daily or in sufficient quantities.
                          They can also be used to supply what is needed or make an addition.
                          For example, some people take amino acids in supplement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='piller-box pillars-box'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-5 piller-box-img'>
                        <img src={CreativityandPlay} alt='CreativityandPlay'>
                        </img>
                      </div>
                      <div className='col-md-7 piller-box-text'>
                        <h4 class="h4-head counting">08</h4>
                        <h4 class="h4-head">Creativity and Play</h4>
                        <p className='text-desc'>Play can help develop creativ- ity, which is a broad concept that
                          includes imagination and the ability to think of innovative ideas. Creative play is a natural part of childhood development
                          and can include activities that are not governed by rules.
                          Some examples of creative play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* foundation piller end*/}
        {/* ----------------------------- */}
        {/* black contact now start */}
        <section id='blackContactNow'>
          <div className='container'>
            <div className='row'>
              <p className='text-desc'>LifeUP Corporate Wellness designs corporate wellness programs that create the ‘a-ha!’ moments that transform ordinary lives into extraordinary lifestyles</p>
              <Link to='/contact'>
                <button className="btn yellow-btn" type="submit">contact now
                  <span className='home-icon'><GoArrowUpRight /></span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* black contact now end */}
        {/* ------------------------------ */}
        {/* conversationHealth start */}
        <section id='conversationHealth' className='conversationHealth'>
          <div className='container'>
            <div className='row'>
              <h4 class="h4-head">Bring the conversation of health and well-being to your next company summit or conference!</h4>
              <p className='text-desc'>Planning a team building event?</p>
            </div>
            <div className='row conversationHealth-inner'>
              <div className='col-lg-8 col-md-12'>
                <div className='conversationHealthBox'>
                  <div className='img'><img src={Summits} alt='Summits'></img></div>
                  <div className='text'>
                    <h4 class="h4-head">Summits and Conferences</h4>
                    <p className='text-desc'>We're available to conduct keynote speeches, workshop pillars,
                      health 'scavenger hunts',
                      and friendly competition to keep events fun, effective and memorable</p>
                  </div>
                </div>
                <div className='conversationHealthBox'>
                  <div className='img'><img src={Facilitator} alt='Facilitator'></img></div>
                  <div className='text'>
                    <h4 class="h4-head">Expert Facilitator & Consultant on Corporate Health & Wellness</h4>
                    <p className='text-desc'>Let Derek support you and your teams with establishing, elevating,
                      or redesigning your Corporate Health and Wellness programs. From forming your employee health and wellness committee, to establishing the best regimen - from your busy C-suite executives to all the team members in between,
                      Derek is the #1 facilitator to guide your company's workplace wellbeing programs' success.</p>
                  </div>
                </div>
                <div className='conversationHealthBox'>
                  <div className='img'><img src={Speaking} alt='Speaking '></img></div>
                  <div className='text'>
                    <h4 class="h4-head">Speaking & Keynote</h4>
                    <p className='text-desc'>Have Derek come to and speak at your next Company Wellness Day or Promotional Health event.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-12'>
                <img src={conversationHealth} alt='conversationHealth' className='conversationHealthImg'>
                </img>
              </div>
            </div>
          </div>
        </section>
        {/* conversationHealth end */}
        {/* ------------------------------ */}
        {/* Challenges start */}
        <section id="Challenges">
          <div className='container'>
            <div className='row'>
              <h4 class="h4-head">Challenges, Individual Pillars, and Continued Learning</h4>
              <p className='text-desc'>Want to utilize one section of the Workplace Wellbeing Programs at a time for a particular office theme or event?</p>
            </div>
            <div className='row ChallengesTop'>
              <div className='col-md-4'>
                <div className='ChallengesBox'>
                  <img src={IndividualPillars} alt='IndividualPillars'></img>
                  <h4 class="h4-head">Individual Pillars</h4>
                  <p className='text-desc'>Each one of the aforementioned pillars can be conducted in conjunction with a company theme,
                    perfect for an already-set monthly topic.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='ChallengesBox'>
                  <img src={Challenges} alt='Challenges'></img>
                  <h4 class="h4-head">Challenges</h4>
                  <p className='text-desc'>30-day guided challenges can be done in conjunction with any pillar or as a stan- dalone offering, bringing the distinction the workshops to daily life.</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='ChallengesBox'>
                  <img src={ContinuedLearning} alt='ContinuedLearning'></img>
                  <h4 class="h4-head">Continued Learning</h4>
                  <p className='text-desc'>Weekly or twice-weekly classes for compa- nies that want to offer their employees ongoing support with any of the pillar topics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Challenges end */}
        {/* ------------------------ */}
        {/* FAQ start */}
        <section>
          <Faq />
        </section>
        {/* FAQ end */}
        {/* ------------------------ */}
        {/* contact form start */}
        <ContactForm />
        {/* contact form end */}
        {/* --------------------------- */}
        {/* WorkplaceWellness start */}
        <section id='WorkplaceWellnessTop'>
          <WorkplaceWellness />
        </section>
        {/* WorkplaceWellness end */}
      </section>
    </>
  )
}

export default Services
