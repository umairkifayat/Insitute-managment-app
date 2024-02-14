import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const UserInfo = ({ user, fullName, course, timing }) => {
  return (
    <Container fluid className="bg-dark text-light py-3">
      <Row className="justify-content-center align-items-center">
        <Col xs="auto">
          <Image src={user.image} roundedCircle width={100} height={100} alt="User" />
        </Col>
        <Col xs="auto">
          <h2>{fullName}</h2>
          <p>Course: {course}</p>
          <p>Timing: {timing}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
