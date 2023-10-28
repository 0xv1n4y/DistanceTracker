import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  const handleReload=()=>{
    window.location.reload()
  }
  return (
    <div>
       <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand>Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/">Distance-Tracker</Nav.Link>
            <Nav.Link href="/shipper">ShipperData</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-success" onClick={handleReload}>Reload</Button>
      </Container>
    </Navbar>
 
      
    </div>
  );
}

export default Navbars;
