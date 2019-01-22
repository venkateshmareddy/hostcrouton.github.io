// Navigation Component of the Website

import React from "react";
// Link from react router to differntiate status of active page and styles can be added to it
import {NavLink} from "react-router-dom";
// Logo Icon in navigation bar
import crouton from './Images/crouton.png';
import './Styles/navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar"> {/* Image link to home, aboutus and team links */}
      <NavLink activeClassName="NavbarActive" className="NavbarHomeLink" to="/"><img className="NavbarHomeLinkImg" src={crouton} alt="Crouton" width="80" height="20"/></NavLink>
      <NavLink activeClassName="NavbarActive" className="NavbarAboutLink" exact to="/About">/<span className="NavbarLinkText">About</span></NavLink>
      <NavLink activeClassName="NavbarActive" className="NavbarTeamLink" exact to="/Team">/<span className="NavbarLinkText">Our Team</span></NavLink>
    </div>
  );
};

export default Navbar;
