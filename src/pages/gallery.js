import React, {useState} from 'react';
import NavBar from '../navbar';
import GoogleMapReact from "google-map-react";
import sauna from '../css/sauna.jpg'


const GalleryPage = () => {



  const [center, setCenter] = useState({
    lat: 39.7392,
    lng: -104.9903,
  });

 
  return (
    <>
    <NavBar/>
    <section id="contact" className="text-page pb-4"> 
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="heading">Contact</h2>
            <div className="row">
              <div className="col-lg-6">
                <form id="contact-form" method="post" action="https://formspree.io/f/mqkglwvk" className="contact-form">
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="name">Your firstname *</label>
                          <input type="text" name="name" placeholder="Enter your firstname" required="required" className="form-control"/>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="surname">Your lastname *</label>
                          <input type="text" name="surname" placeholder="Enter your  lastname" required="required" className="form-control"/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="surname">Your email *</label>
                      <input type="email" name="email" placeholder="Enter your  email" required="required" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label for="surname">Your message for us *</label>
                      <textarea rows="4" name="message" placeholder="Enter your message" required="required" className="form-control"></textarea>
                    </div>
                    <div className="text-center">
                      <input type="submit" name="name" value="Send message" className="btn btn-outline-primary btn-block"/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
              <div style={{ height: "45vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhIP2Tps4GjKacpqtpjJ-sI7rBrTcz15c" }}
        defaultCenter={center}
        defaultZoom={11}
      />
      </div>
                {/* <h5>Feel free to contact me with any questions you may have.</h5> */}
                {/* <p><img alt="Rachel Kelsey" src={sauna} className="img-fluid rounded" height="100px"/></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
  };

export default GalleryPage