import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from './images/logo.png';

import { IoSearch , IoSettingsOutline} from "react-icons/io5";
import { FaInstagram , FaXTwitter } from "react-icons/fa6";
import Navbar from 'react-bootstrap/Navbar';

import './nav.css';
const Main=()=>
{
 return(
  <>
   
     <Navbar
        className="customize-navbar1 d-flex flex-column flex-md-row justify-content-between align-items-center w-100 text-white"
        expand="lg"
      >
        <Container>
         <Navbar.Brand href="#page" style={{ color: "black" }}>
             <img src={logo} width={100}></img>
          </Navbar.Brand>
     <Navbar.Brand style={{ color: "white",  fontWeight:300}}>
             MOVISTREAM
          </Navbar.Brand>
          <Navbar.Brand href="" style={{ color: "white" }}>
            <a href="" style={{color:"white"}}>
            <IoSearch/>
            </a>
            <a href="" style={{color:"white"}}>
              <FaInstagram/>
            </a>
            <a href=""style={{color:"white"}}>
             <FaXTwitter/>
            </a>
            <a href=""style={{color:"white"}}>
              <IoSettingsOutline />
            </a>
          </Navbar.Brand> 
    </Container>
    </Navbar>
    
    {/* Navbar 2 */}

     <Navbar className="customize-navbar2 sticky-top py-2 " expand="lg">
        <Container fluid>
          {" "}
          <Navbar.Brand
            className="d-flex align-items-center fs-5" href="page">
            {" "}
            <img
           
            />
        Movistream
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" className="drop">
                Home
              </Nav.Link>
              <Nav.Link href="#tv shows"className="drop" >
                TV Shows
              </Nav.Link>
              <Nav.Link href="#recently added" className="drop">
               Recently Added
              </Nav.Link>
              <Nav.Link href="#Movies" className="drop">
               Movies
              </Nav.Link>
              <Nav.Link href="#anime" className="drop">
                Anime
              </Nav.Link>
              <Nav.Link href="#web series" className="drop">
                Web Series
              </Nav.Link>
              <Nav.Link href="#reviews" className="drop">
                 Contact As
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
   

  </>
 )
}

export default Main;