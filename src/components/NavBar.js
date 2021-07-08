import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'

function NavBar() {
  const chairs = 'chairs';
  const tables = 'tables';
  const about = 'about';
 return(
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link to="/">HOME</Nav.Link>
      <Nav.Link to={`/aboutUs/${about}`}>ABOUT US</Nav.Link>
      <NavDropdown title="CATEGORIES" id="collasible-nav-dropdown">
        <NavDropdown.Item to={`/category/${tables}`}>tables</NavDropdown.Item>
        <NavDropdown.Item to={`/category/${chairs}`}>chairs</NavDropdown.Item>
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



