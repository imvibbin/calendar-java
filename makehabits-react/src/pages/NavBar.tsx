import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";


const MyNavbar = () => {
  const handleNavItemClicked = (eventKey: string) => {
    // Lógica a realizar cuando un elemento NavItem es clicado
    if (eventKey === "1") {
      console.log("NavItem Login clicado");
    } else if (eventKey === "2") {
      console.log("NavItem Home clicado");
    }
  };

  return (
    <Navbar>
      <Navbar.Brand>
        <a href="/">React-Bootstrap</a>
      </Navbar.Brand>

      <Nav>
        <Nav.Link
          eventKey="1"
          onSelect={() => handleNavItemClicked("1")}
          href="/"
        >
          Login
        </Nav.Link>
        <Nav.Link
          eventKey="2"
          onSelect={() => handleNavItemClicked("2")}
          href="/"
        >
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
