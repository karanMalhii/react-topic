import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Button, Card } from "react-bootstrap";

export default function Data({ MyData }) {
  console.log(MyData);
  const [query, setQuery] = useState(" ");

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search here:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter username"
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form.Group>
      </Form>

      <p>search: {query}</p>
      <div className="parent">
        <Card className="myCard" style={{ width: "18rem" }} key={Product.id}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
