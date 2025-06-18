import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const EmailPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [touched, setTouched] = useState({ email: false, password: false });

  useEffect(() => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailValid(isValidEmail);
  }, [email]);

  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form hợp lệ!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="emailInput">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          isInvalid={!emailValid && touched.email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="passwordInput" className="mt-3">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          isInvalid={!passwordValid && touched.password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" disabled={!emailValid || !passwordValid} className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default EmailPasswordForm;
