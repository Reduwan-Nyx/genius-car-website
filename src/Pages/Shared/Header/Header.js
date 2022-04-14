import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
           <Navbar  collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img height={30} src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto text-center">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link href="home#services">Service</Nav.Link> 
      <Nav.Link href="home#experts">Experts</Nav.Link>
      <Nav.Link as={Link} to="about">About</Nav.Link>
    </Nav>
    <Nav >
         
          <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                         
            <button className='btn btn-link text-white text-decoration-none'>sign out</button>
            
        </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    );
};
export default Header;