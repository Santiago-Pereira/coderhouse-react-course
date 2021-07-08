import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  const chairs = 'chairs';
  const tables = 'tables';
  const about = 'about';
 return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand ><Link to="/">React-Bootstrap </Link> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/">HOME </Link></Nav.Link>
      <Nav.Link ><Link to={`/aboutUs/${about}`}>ABOUT US </Link></Nav.Link>
      <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to={`/category/${tables}`}>TABLES </Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to={`/category/${chairs}`}>CHAIRS </Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link className="shoppingCart" to="#"><CartWidget /></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 );
}
export default NavBar;



