// src/components/News.js
import React from 'react';
import { newsLists } from '../data/news';
import { Container, Card, Row, Col } from 'react-bootstrap';

const News = () => (
  <Container className="mt-4">
    <h2>Latest News</h2>
    <Row>
      {newsLists.map(item => (
        <Col md={4} className="mb-4" key={item.id}>
          <Card>
            <Card.Img variant="top" src={`/${item.images}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default News;
