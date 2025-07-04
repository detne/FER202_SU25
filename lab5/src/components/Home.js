// src/components/Home.js
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-4">
      <h2>Welcome to the Quiz App!</h2>
      <Carousel className="mt-4">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/event-1.jpg" alt="Slide 1" />
          <Carousel.Caption>
            <h3>Learn and Play</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/event-2.jpg" alt="Slide 2" />
          <Carousel.Caption>
            <h3>Test Your Knowledge</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
