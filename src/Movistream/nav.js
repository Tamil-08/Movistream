import React from "react";


import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

import logo from './images/logo.png';

import { IoSearch , IoNotificationsOutline,IoCaretForwardSharp} from "react-icons/io5";

import Navbar from 'react-bootstrap/Navbar';


import search_icon from '../../src/Movistream/images/search_icon.svg';
import bell_icon from '../Movistream/images/bell_icon.svg';
import profile_img from '../Movistream/images/profile_img.png';
import caret_icon from '../Movistream/images/caret_icon.svg';
import './nav.css';
import { useState } from 'react';
const Main=()=>
{
 const [expanded, setExpanded] = useState(false);

 return(
<>

  <Navbar 
      expand="lg" 
      bg="dark" 
      variant="dark" 
      expanded={expanded} 
      onToggle={() => setExpanded(!expanded)} 
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="Logo" width={90} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link href="#home" className="drop"   onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#tv shows" className="drop"  onClick={() => setExpanded(false)}>TV Shows</Nav.Link>
            <Nav.Link href="#movies" className="drop"  onClick={() => setExpanded(false)}>Movies</Nav.Link>
            <Nav.Link href="#anime" className="drop"  onClick={() => setExpanded(false)}> Anime</Nav.Link>
            <Nav.Link href="#recently added" className="drop"  onClick={() => setExpanded(false)}>Recently Added</Nav.Link>
            <Nav.Link href="#web series" className="drop"  onClick={() => setExpanded(false)}>Web Series</Nav.Link>
            <Nav.Link href="#reviews" className="drop"  onClick={() => setExpanded(false)}>Reviews</Nav.Link>
          </Nav>
           <div className=" ms-auto2 d-flex align-items-center ms-3 gap-3 text-white">
            <a href="#" className="text-white"><IoSearch /></a>
            <a href="#" className="text-white"><IoNotificationsOutline /></a>
            <a href="#" className="d-flex align-items-center text-white">
             <a href="#login"> <img src={profile_img}  alt="Profile" width={30} className="rounded-circle me-1"/></a>
              
            </a>
          </div>
          
        </Navbar.Collapse>
        
      </Container>
     
    </Navbar>
        {/* <Navbar 
      sticky="top " 
      bg="dark" 
      data-bs-theme="dark" 
      expand="lg"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)} // Track toggle state
      className={`customize-navbar1  ${expanded ? 'navbar-expanded' : ''}`}
    >
      <Container fluid className="m-0 p-0">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width={90} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="drop">Home</Nav.Link>
            <Nav.Link href="#tv shows" className="drop">TV Shows</Nav.Link>
            <Nav.Link href="#recently added" className="drop">Recently Added</Nav.Link>
            <Nav.Link href="#movies" className="drop">Movies</Nav.Link>
            <Nav.Link href="#anime" className="drop">Anime</Nav.Link>
            <Nav.Link href="#web series" className="drop">Web Series</Nav.Link>
            <Nav.Link href="#browse language" className="drop">Browse by Language</Nav.Link>
          </Nav>

          <div className=" ms-auto2 d-flex align-items-center ms-3 gap-3 text-white">
            <a href="#" className="text-white"><IoSearch /></a>
            <a href="#" className="text-white"><IoNotificationsOutline /></a>
            <a href="#" className="d-flex align-items-center text-white">
              <img src={profile_img} alt="Profile" width={30} className="rounded-circle me-1" />
              <IoCaretForwardSharp />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  );
};

export default Main;