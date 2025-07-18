import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { laptopService } from '../services/api';

const LaptopList = ({ user }) => {
    const [laptops, setLaptops] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLaptops();
    }, []);

    const fetchLaptops = async () => {
        try {
            setLoading(true);
            const data = await laptopService.getAllLaptops();
            setLaptops(data);
        } catch (error) {
            console.error('Error fetching laptops:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        try {
            setLoading(true);
            const data = await laptopService.searchLaptops(searchTerm);
            setLaptops(data);
        } catch (error) {
            console.error('Error searching laptops:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleViewDetails = (id) => {
        navigate(`/laptops/${id}`);
    };

    if (loading) {
        return (
            <Container className="mt-5">
                <div className="text-center">Loading...</div>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            {/* ✅ Carousel chỉ xuất hiện một lần ở đầu trang */}
            <Carousel fade interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`/images/hp-spectre.jpg`}
                        alt="Second slide"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Big Laptop Sale</h3>
                        <p>Up to 50% off on selected models.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/dell-xps13.jpg"
                        alt="Second slide"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>New Arrivals</h3>
                        <p>Check out the latest laptops in our collection.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/lenovo-thinkpad.jpg"
                        alt="Third slide"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Best Performance</h3>
                        <p>Powerful machines for professionals and gamers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Header + User */}
            <Row className="mb-4 mt-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Laptop Management</h2>
                        <div>
                            <span className="me-3">Welcome, {user?.username}!</span>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Search + Show All */}
            <Row className="mb-4">
                <Col md={6}>
                    <Form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Search by brand or model..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col md={6}>
                    <Button variant="secondary" onClick={fetchLaptops}>
                        Show All
                    </Button>
                </Col>
            </Row>

            {/* List of Laptops */}
            <Row>
                {laptops.length === 0 ? (
                    <Col>
                        <div className="text-center">No laptops found.</div>
                    </Col>
                ) : (
                    laptops.map((laptop) => (
                        <Col key={laptop.id} md={3} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={laptop.image}
                                    alt={`${laptop.brand} ${laptop.model}`}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                                    <Card.Text>
                                        <strong>Year:</strong> {laptop.year}<br />
                                        <strong>Price:</strong> ${laptop.price}
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleViewDetails(laptop.id)}
                                    >
                                        View Details
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

LaptopList.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        account_type: PropTypes.string,
        status: PropTypes.string
    }).isRequired
};

export default LaptopList;
