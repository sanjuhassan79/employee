
import React from 'react';
// import { Link } from 'react-router-dom';
import {Navbar as Appber,Container,Nav, Stack} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <Appber bg="light" expand="lg">
        <Container fluid>
          <Appber.Brand href="#">Navbar scroll</Appber.Brand>
          <Appber.Toggle aria-controls="navbarScroll" />
          <Appber.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Stack direction="horizontal" gap={3}>
              <NavLink
                to="/Home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
                >
                Home
                </NavLink>


              <NavLink
                to="/Employe"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}
                >
                Employe
                </NavLink>
</Stack>
              
            
            </Nav>
            
          </Appber.Collapse>
        </Container>
      </Appber>
    );
};

export default Navbar;