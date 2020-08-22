import React from "react";
import { Navbar, NavbarBrand, Container, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div>
      <Navbar color="dark" expand="lg" dark>
        <Container>
          <NavbarBrand href="/" className="mr-auto">
            Image API Search
          </NavbarBrand>
          <Link to="/">
            <NavbarToggler className="mr-2">
              <i class="fas fa-home"></i>
            </NavbarToggler>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Appbar;
