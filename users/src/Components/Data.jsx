import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { Button, Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Data({ mydata }) {
  console.log({ mydata });

  const [query, setQuery] = useState("");

  let filterUsers = mydata.filter(function (user) {
    return user.firstName.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Search here :</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter username"
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form.Group>
      </Form>

      <p>search : {query}</p>

      <div className="parent">
        {filterUsers?.map(function (product) {
          return (
            <Card
              className="mycard"
              style={{ width: "18rem", margin: "10px" }}
              key={product.id}
            >
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.firstName}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">{product.maidenName}</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
