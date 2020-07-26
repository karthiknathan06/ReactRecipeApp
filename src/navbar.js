import React from "react";
import Navbar from "react-bootstrap/Navbar";
import profile from "./ckn.jpg";
import Nav from "react-bootstrap/Nav";
import icon from "./icon.png";

const NavbarPage = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">
        <img
          alt=""
          src={icon}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">HOME</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={profile}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarPage;
