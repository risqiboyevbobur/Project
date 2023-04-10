import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuRouter from "../MenuRouter/MenuRouter";

export default function NavbarMenu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {MenuRouter.map((res) => {
                return (
                  <>
                    <Link to={res.path}>
                      <li style={{textDecoration: "none", color: "black", marginLeft: "10px"}}>{res.title}</li>
                    </Link>
                  </>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
