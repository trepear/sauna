import React from 'react';
import NavBar from '../navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faHotTub } from '@fortawesome/free-solid-svg-icons'
import { faBurn } from '@fortawesome/free-solid-svg-icons'
import suanaPhoto from '../css/sunny.jpg'
import rainbow from '../css/0.jpg'
import linkedinPhoto from '../css/linkedin.jpg'


const AboutPage = () => (
    <>
        
        <section className="intro" id="experiences-page">
            <div className="overlay"></div>
            <div className="content">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 mx-auto">
                            <h1 id="top-name">The Small Camp Experience</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NavBar />
        <section id="skills">
      <div className="container">
        <div className="row services">
          <div className="col-lg-12">
          
            <h2 className="heading">Why mobile sauna?</h2>
            
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="icon"><FontAwesomeIcon icon={faGlobeAmericas}/></div>
                  <h5>Accessibility</h5>
                  <p>Experience the benefits of sauna in a setting of your choice</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="icon"><FontAwesomeIcon icon={faBurn}/></div>
                  <h5>Wellness</h5>
                  <p>Incorporate the therapeutic benfits of sauna into your daily life</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="icon"><FontAwesomeIcon icon={faHotTub}/></div>
                  <h5>Community</h5>
                  <p>Partake in the long lasting tradition of sauna in the presence of your loved ones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="portfolio" >
    <div className="overlay-again"></div>
      <div className="container clearfix">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12" id="content">
                <h2 className="heading">The Small Camp Experience</h2>
                <p className="italic">All of these benefits can be experienced with your loved ones and in a unique setting of your choice. Always counter the heat of the sauna with a cold element, whether it be plunging into a cool pool of water or rolling in the snow. Custom built cedar lined woodburning mobile Sauna from Voyager Saunas fitted with a kuuma sauna stove.</p>
              
              </div>
            </div>
            <div className="row" id="content">
              <div className="col-md-6">
              <p><img alt="Rachel Kelsey" src={rainbow} className="img-fluid rounded" width="100%"/></p>
                <h5>The Setting</h5>
                <p><strong>A true sauna will have the same principles</strong></p>
                <p>• A retreat from the daily hustle
                  <br/>  
                  • Spending quality time with your favorite people. 
                  <br/>
                  • The ability to let go and enjoy the simple things 
                  <br/>
                  • Destress, decompress, and completely relax 
                  <br/>
                  • At the heart of it all, the campfire 
                  </p>
                  
              </div>
             
              <div className="col-md-6">
              <p><img alt="Rachel Kelsey" src={suanaPhoto} className="img-fluid rounded"  height="337.5px" width="470px" /></p>
                <h5>The Benefits</h5>
                <p><strong>These are just some of the great benefits of sauna</strong></p>
                <p>• Increased blood flow
                    <br/> 
                      • Boosted immune system
                    <br/> 
                      • Reduced inflammation and stress
                    <br/> 
                      • Detox and bodily cleansing
                    <br/>
                    • Relaxed muscles
                    <br/> 
                    • Spiritual healing of the mind and body
                    </p>

                    
              </div>
              <div className="col-md-4">
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
    <section id="about" className="text">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="heading">About Me</h2>
            <p className="lead">Hi, my name is Tyler Peterson</p>
            <p>While growing up in Minneapolis I was never exposed to the tradition of sauna, I never knew about the absolute serenity of stepping into a 180 degree sauna while the snow’s coming down and the wind chill puts us somewhere below 0 
degrees. Thanks to Rodney Bhursith and John Pederson the sauna has been revived within the heart of the Minneapolis community, as well as stoked my ambitions to spark sauna culture in the mile high city. Since my first session in a true wood burning sauna I’ve had many enlightening moments while in solitude and in deep meditation as well as many great conversations with therapeutic undertones. I have chosen to adopt sauna as one of my habitual wellness practices for my overall wellbeing and the wellbeing of all around me. 
</p>
            
          </div>
          <div className="col-lg-5 mx-auto">
            <p><img alt="Rachel Kelsey" src={linkedinPhoto} className="img-fluid rounded-circle"/></p>
          </div>
        </div>
      </div>
    </section>

   
    </>
    
)

export default AboutPage