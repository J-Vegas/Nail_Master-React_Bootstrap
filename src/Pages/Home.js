import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import News from "../Components/News";
import { Container, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <News />
      </>
    );
  }
}
