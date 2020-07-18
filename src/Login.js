import React from "react";
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap'

import cardImg from './assets/brand.jpg'
import './assets/style.css'

const Login = () => {

  const renderInlineFormItem = (label, placeholder, type="text") => (
    <Form.Group>
      <Form.Row>
        <Col lg={3}>
          <Form.Label>
            {label}
          </Form.Label>
        </Col>
        <Col lg={9}>
          <Form.Control type={type} placeholder={placeholder} />
        </Col>
      </Form.Row>
    </Form.Group>
  )

  return <Container>
    <Row >
      <Col lg={3}></Col>
      <Col lg={6} className="d-flex justify-content-center align-items-center">
        <Card className="shadow rounded">
          <Card.Img variant="top" src={cardImg} />
          <Card.Body>
            <Form>
              {renderInlineFormItem("E-Mail", "Correo electronico")}
              {renderInlineFormItem("Contrasena", "Contrasena")}
              <div className="text-right">
                <small>
                  <a className="text-secondary" href="/">Contrasena olvidada?</a>
                </small>
              </div>
              <hr/>
              <div className="text-center mt-4">
                <Button>
                  Iniciar Sesion
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={3}></Col>
    </Row>
  </Container>
}

export default Login