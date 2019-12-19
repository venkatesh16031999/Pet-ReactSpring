import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Navigation=(props)=>{
    return (
        <React.Fragment>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Link to="/"><Navbar.Brand >Pet Stationary</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        </React.Fragment>
    );
}

export default Navigation;