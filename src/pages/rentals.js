import React, {useState} from 'react';
import NavBar from '../navbar';
import GoogleMapReact from "google-map-react";
import sauna from '../css/sauna.jpg'


const RentalsPage = () => {



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
            <h2 className="heading">Rental Information</h2>
            <div className="row">
              <div className="col-lg-6">
                
              </div>
              <div className="col-lg-6">
              <div style={{ height: "45vh", width: "100%" }}>
      
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

export default RentalsPage