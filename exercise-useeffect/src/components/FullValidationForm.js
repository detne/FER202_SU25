import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const FullValidationForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const isValid =
      name.trim() !== '' &&
      gender !== '' &&
      country !== '' &&
      agree === true;
    setFormValid(isValid);
  }, [name, gender, country, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      setSubmitted(true); // hiển thị thông báo thành công
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nameInput">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên"
          />
        </Form.Group>

        <Form.Group controlId="genderSelect" className="mt-3">
          <Form.Label>Giới tính</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Nam"
              name="gender"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Nữ"
              name="gender"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="countrySelect" className="mt-3">
          <Form.Label>Quốc gia</Form.Label>
          <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">-- Chọn quốc gia --</option>
            <option value="vn">Việt Nam</option>
            <option value="us">Mỹ</option>
            <option value="jp">Nhật Bản</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="agreeCheckbox" className="mt-3">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với điều khoản"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
        </Form.Group>

        <Button type="submit" disabled={!formValid} className="mt-3">
          Gửi
        </Button>
      </Form>

      {submitted && (
        <Alert variant="success" className="mt-3">
          Gửi thành công! Cảm ơn bạn đã đăng ký.
        </Alert>
      )}
    </div>
  );
};

export default FullValidationForm;
