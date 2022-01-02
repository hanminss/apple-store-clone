import React, { useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";
function Header() {
  const { isAuth, isAuthenticated, signOut } = useContext(AuthContext);

  useEffect(() => {
    isAuthenticated();
  }, [isAuthenticated]);
  console.log(isAuth);
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbor-nav" />
          <Navbar.Brand href="/">
            logo
            {/* <img src={logo} alt="logo" /> */}
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link href="/">iPhone</Nav.Link>
              {isAuth ? (
                <>
                  <Nav.Link onClick={signOut}>Logout</Nav.Link>
                  <Nav.Link href="/user/cart">
                    cart
                    {/* <img src={cart} alt="cart" /> */}
                  </Nav.Link>
                </>
              ) : (
                <>
                  {" "}
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/login">
                    cart
                    {/* <img src={cart} alt="cart" /> */}
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
