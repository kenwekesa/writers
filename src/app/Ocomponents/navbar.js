// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import frontmain from "../images/frontmain.png"
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './navbar.css';
// import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import { MenuItem } from 'semantic-ui-react';
// import { useState } from 'react';

// function CollapsibleExample() {

//   const [menuOpened, setMenuOpened] = useState(false)

//   const getMenuStyles=(menuOpened)=>{
//     if(document.documentElement.clientWidth <= 800)
//     {
//       return{right: !menuOpened && "-100%"}
//     }
//   }
//   return (
//   <Navbar collapseOnSelect className='nav-head'>
//   <Container>
//   <Navbar.Brand href="/" className='logo lagoe'> <img src={frontmain} alt='logo' className='imlogo'/>Amazon Writers</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//   <Nav className="me-auto">
//   </Nav>
//   <Nav className='nav-base' style={getMenuStyles(menuOpened)}>
//   <Nav ><Link className='nav-li' to="/" style={getMenuStyles(menuOpened)}>Home</Link></Nav>
//   <Nav ><Link className='nav-li' to="/howit" style={getMenuStyles(menuOpened)}>How it works</Link></Nav>
//   <Nav ><Link className='nav-li' to="/prices" style={getMenuStyles(menuOpened)}>Prices</Link></Nav>
//   <Nav ><Link className='nav-li' to="/testimonials" style={getMenuStyles(menuOpened)}>Testimonials</Link></Nav>
//   <Nav ><Link className='nav-li' to="/" href="#getstarted" style={getMenuStyles(menuOpened)}>Get started</Link></Nav>
//   <button className='btn1'><Link className='btn1' to="/signin">Sign In</Link></button> &nbsp;&nbsp;
//   <button className='btn2'><Link className='btn3'to="/signup">Sign Up</Link></button>&nbsp; &nbsp;
//   </Nav>
//   </Navbar.Collapse>
//   </Container>
//   <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
//     <MenuIcon  size={30}/>
//   </div>
//   </Navbar>
//   );
//   }

// export default CollapsibleExample;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import "./navbar.css";
import frontmain from "../images/logo512.png";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

function CollapsibleExample() {
  const [colpasemenu, setColapseMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-head">
      <Container>
        {!colpasemenu && (
          <MenuIcon
            className="menuicon"
            onClick={() => {
              setColapseMenu(!colpasemenu);
            }}
          />
        )}
        {colpasemenu && (
          <Close
            className="menuicon"
            onClick={() => {
              setColapseMenu(!colpasemenu);
            }}
          />
        )}
        <Navbar.Brand href="/" className="logo lagoe">
          <img src={frontmain} alt="logo" className="imlogo" />
          Amzon Corp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav mynavtwo" />
        <Navbar.Collapse id="responsive-navbar-nav mycollapse">
          <Nav className="me-auto"></Nav>
          <Nav className="sureonetwo">
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/howit">
                Registration
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/prices">
                Prices
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/testimonials">
                Testimonials
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-lii btn1" to="/signin">
                Sign In
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                onClick={scrollToTop}
                className="nav-liii btn2"
                to="/signup"
              >
                Sign Up
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {colpasemenu && (
          <Nav className="colapsenav">
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/howit">
                Registration
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/prices">
                Prices
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-li" to="/testimonials">
                Testimonials
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link onClick={scrollToTop} className="nav-lii btn1" to="/signin">
                Sign In
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                onClick={scrollToTop}
                className="nav-liii btn2"
                to="/signup"
              >
                Sign Up
              </Link>
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
