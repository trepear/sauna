import React from 'react';
import NavBar from '../navbar';
import { Link } from 'react-router-dom';



const HomePage = () => (
    <>   
        <section id="intro" className="intro">
            <div className="overlay"></div>
            <div className="content">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 mx-auto">
                            <h1 id="top-name">Small Camp</h1>
                            <p className="italic" id="top-italic">Presenting an outlet for community health and wellness in the Mile high City</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <NavBar />
        <section className="portfolio" >
    <div className="overlay-again"></div>
      <div className="container clearfix">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
            <h2 className="heading">What is Going on Here . . .</h2>
            <div className="col-md-6" id="content">
                <h5>To Break it down,</h5>
                <p><strong>we get really hot, then we get really cold, then we get really hot again.</strong></p>
                <p>2020 has become a perfect time to disconnect, relieve stress, and focus on health now more than ever. If you have never experienced a wood burning sauna or heard of the benefits it has to offer, now may be the perfect time… let me explain  
                  </p>
                  
              </div>
              <div className="col-md-6" id="content">
                
                <p>Just a Small camp of like minded, open individuals who are deepening the connection of body, mind, & self  all while holding the values of growth, wellness & community which have led to exploring the benefits of an ancient  tradition of heating and cooling the body to boost immunity, create bloodflow, rid toxins from within. going beyond mental & physical limitations while in the same breath releasing stress and allowing oneself to relax and just be… Let me explain a bit more <Link to='/about'>here.</Link></p> 
              </div>
              
            </div>
            <div className="row" id="content">
              
              <div className="col-md-12">
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
    
    </>

)

export default HomePage