import React from "react";
import { Card, Col } from "react-bootstrap";

const Recipe = ({ title, calories, image }) => {
  return (
    <Col md={4} className="mt-2 mb-2 ps-4">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Calories {calories}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Recipe;
