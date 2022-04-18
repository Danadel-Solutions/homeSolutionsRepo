import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Button, Form } from "react-bootstrap";
const Signup = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="accounts-background">
      <Helmet>
        <title>HomeSolutions - Signup</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Sign up page" />
      </Helmet>
      <Container className="mt-5" fluid>
        <h5>Sign up</h5>
        <Form className="bg-white rounded p-4">
          <Row md={2}>
            <Form.Group className="mt-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formMiddleName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mt-3" controlId="confirmFormPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button className="mt-4">Sign up</Button>
          </Row>
        </Form>
      </Container>
      <input type="file" multiple onChange={handleChange} />
    </div>
  );
};

export default Signup;
