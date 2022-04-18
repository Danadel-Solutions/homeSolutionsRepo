import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import picture from "../assets/Lagos-City.svg";
import { products } from "../assets/products";

const LatestListed = () => {
  return (
    <Container className="mt-5">
      <h5 className="topic">Latest Listed Projects</h5>
      <Row xs={1} md={2} className="g-6">
        {products.map((product, i) => (
          <Col key={i}>
            <Card style={{ maxWidth: "30rem" }}>
              <Card.Img variant="top" src={picture} />
              <Card.Body className="mx-0">
                <Card.Title className="latest-title">
                  Terrace Duplex for rent
                </Card.Title>
                <Card.Text as="div">
                  <p>
                    Serviced with all the 21st century facilities. 24 hours
                    power, security and security, fitted kitchen with oven, gas
                    cooker, microwavek heat extractor and more.
                  </p>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Lekki Phase 1,
                    Lagos
                  </p>
                  <p className="price">10,000</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LatestListed;
