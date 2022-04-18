import React, { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/v1/properties");
        const data = await response.data;
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <Container className="featured-projects mt-5">
      <h5 className="topic">Featured Projects</h5>
      <Row xs={1} md={2} className="g-6">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card>
              <Link to={`properties/${project.id}`}>
                <Card.Img
                  height={"400"}
                  variant="top"
                  src={project.images[0].image}
                />
              </Link>
              <Card.Body>
                <Card.Title style={{ fontWeight: 700 }}>
                  {project.name}
                </Card.Title>
                <Card.Text>
                  <i className="fa-solid fa-location-dot"></i>
                  {project.location}
                </Card.Text>
                <p className="price">{project.price}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProjects;
