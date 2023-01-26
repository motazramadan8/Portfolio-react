import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import "./App.css"
const NavBar = () => {
  return (
    <>
    {/* Start Nav */}
    <Navbar bg="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src="images\618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png"  width="60px" />
            </Navbar.Brand>
            <Navbar.Toggle style={{color: 'white'}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{color: 'white'}} id="basic-navbar-nav">
            <Nav className="ms-auto">
                        <HashLink className='navi' to="/#latest">Latest Builds</HashLink>
                        <HashLink className='navi' to="/#process">Process</HashLink>
                        <HashLink className='navi' to="/#service">Services</HashLink>
                        <HashLink className='navi' to="/#contact">Contact Us</HashLink>
                        <NavLink className='navi' to="/Projects">Projects</NavLink>
                    </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    {/* Nav Nav */}


    



        
    </>
  )
}

export default NavBar
