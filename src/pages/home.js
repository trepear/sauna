import React from 'react';
import NavBar from '../navbar';
import linkedinPhoto from '../css/linkedin.jpg'


const HomePage = () => (
    <>   
        <section id="intro" className="intro">
            <div className="overlay"></div>
            <div className="content">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 mx-auto">
                            <h1 id="top-name">Small Camp</h1>
                            <p className="italic" id="top-italic">Presenting an outlet for community health and wellness</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NavBar />

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

export default HomePage