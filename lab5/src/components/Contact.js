// src/components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <Container className="mt-4">
    <h2>Contact Us</h2>
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="formEmail" className="mt-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group controlId="formMessage" className="mt-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Button variant="primary" className="mt-3">Submit</Button>
    </Form>
  </Container>
);

export default Contact;
