// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">Quiz App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/news">News</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
