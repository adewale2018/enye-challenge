import React from "react";
import Logo from "../img/enye.png";
import { Nav, Navbar } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>
        <img src={Logo} alt={"Enye logo"} style={{width: '100px'}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/register'>Register</Nav.Link>
          <Nav.Link href='/users'>Users</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
