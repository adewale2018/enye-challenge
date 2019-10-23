import React from "react";
import Logo from "../img/enye.png";
import { Nav, Navbar } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg='info' expand='lg' variant='dark'>
      <Navbar.Brand href='/'>
        <img src={Logo} alt={"Enye logo"} style={{ width: "100px" }} />
      </Navbar.Brand>
      <h1
        style={{
          color: "#fff",
          marginLeft: "2rem",
          textTransform: "uppercase"
        }}
      >
        Registration Portal
      </h1>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto' style={{ fontSize: "2rem" }}>
          <Nav.Link href='/' style={{ color: "#fff" }}>
            Home
          </Nav.Link>
          <Nav.Link href='/register' style={{ color: "#fff" }}>
            Register
          </Nav.Link>
          <Nav.Link href='/users' style={{ color: "#fff" }}>
            Users
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
