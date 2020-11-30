import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';


const Results = () => (
    <div id="results" className="search-results">
        <ul className="navbar-nav ml-auto">
            <li>
                <Link to='/' className="nav-link link-scroll">Home</Link>
            </li>
            <li>
                <Link to='/about' className="nav-link link-scroll">About</Link>
            </li>
            <li>
                <Link to='/contact' className="nav-link link-scroll">Contact</Link>
            </li>
            <li>
                <Link to='/rentals' className="nav-link link-scroll">Rentals</Link>
            </li>
        </ul>
    </div>
)

// handleDrawerToggle = () => {
//     const open = this.state.open;
//     this.setState({
//       open: !open
//     });
//   }

const NavBar = () => {   

    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => {
        setShowResults({ true: !true });
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <p className="social" id="socials">
                        <a href={"https://www.instagram.com/tyler_was_wrong/"} title="" className="gplus" target="blank">
                            <FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                        <a href={"mailto:smallcampsaunas@gmail.com"} title="" className="gplus" target="blank">
                            <FontAwesomeIcon icon='envelope' /></a>
                    </p>
                    {/* <Link to="#intro" className="navbar-brand link-scroll"><img src="" alt="" className="img-fluid" /></Link> */}
                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right" onClick={onClick}><FontAwesomeIcon icon={faEllipsisH} /></button>
                    {showResults ? <Results /> : null}
                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <Link to='/' className="nav-link link-scroll">Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className="nav-link link-scroll">About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className="nav-link link-scroll">Contact</Link>
                            </li>
                            <li>
                                <Link to='/rentals' className="nav-link link-scroll">Rentals</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default NavBar