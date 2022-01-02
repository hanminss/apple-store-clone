import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function Header() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar calssName="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbor-nav" />
          <Navbar.Brand href="/">
            {/* <img src={logo} alt="logo" /> */}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link href="/">iPhone</Nav.Link>
              <Nav.Link href="/">iPad</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/user/cart">
                {/* <img src={cart} alt="cart" /> */}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
