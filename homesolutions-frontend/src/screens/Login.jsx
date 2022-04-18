import React from "react";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="accounts-background">
      <Helmet>
        <title>HomeSolutions - Login</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Log in to your account" />
      </Helmet>
      <Container className="align-content-center justify-content-center mt-5">
        <Row className="justify-content-center align-content-center">
          <Col sm={10} md={8}>
            <h5>Login</h5>
            <Form className="bg-white rounded p-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-green">Username</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>

              <Button className="w-100" variant="primary" type="submit">
                Login
              </Button>
              <p className="text-sm-center text-md-end">
                Forgot your password?
              </p>
              <p className="text-center">
                <Link className="text-decoration-none" to={"/signup"}>
                  No account? Register
                </Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
