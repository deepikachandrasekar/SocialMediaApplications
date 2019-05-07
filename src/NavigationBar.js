import React from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';


const NavigationBar = () =>{
  return(

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Exam TimeTable</Nav.Link>
        <Nav.Link href="#link">My Courses</Nav.Link>
        <Nav.Link href="#link">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  );
}

export default NavigationBar;
