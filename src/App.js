import React, {Component} from 'react';
import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import GalleryPage from './pages/gallery';
import RentalsPage from './pages/rentals';

import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import Footer from './components/footer';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
     
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={GalleryPage} />
      <Route path="/rentals" component={RentalsPage} />  
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
