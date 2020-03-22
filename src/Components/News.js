import React, { Component } from "react";

import { Container, Card, Button, CardGroup, CardDeck } from "react-bootstrap";
import News01 from "../asserts/news01.jpg";
import News02 from "../asserts/news02.jpg";
import News03 from "../asserts/news03.jpg";



export default class News extends Component {
  render() {
    return (
      <Container className="mt-2 mb-3">
        <CardDeck>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News01} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News02} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={News03} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}
