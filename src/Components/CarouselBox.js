import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Nail01 from "../asserts/01.jpg";
import Nail02 from "../asserts/02.jpg";
import Nail03 from "../asserts/03.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img height="640px" className="d-block w-100" src={Nail01} alt="Nail" />
          <Carousel.Caption>
            <h3>Nail Master</h3>
            <p>
              Magna exercitation duis cupidatat deserunt non et sit duis Lorem.
              Aliquip sint labore officia mollit ullamco anim velit laborum sit
              elit qui. Aliquip dolor reprehenderit proident ullamco qui
              cupidatat dolore non eu irure aliqua pariatur. Aliqua duis
              cupidatat proident officia excepteur elit eiusmod amet. Eiusmod
              occaecat et reprehenderit sint proident aliquip.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="640px" className="d-block w-100" src={Nail02} alt="Nail" />
          <Carousel.Caption>
            <h3>Nail Master</h3>
            <p>
              Magna exercitation duis cupidatat deserunt non et sit duis Lorem.
              Aliquip sint labore officia mollit ullamco anim velit laborum sit
              elit qui. Aliquip dolor reprehenderit proident ullamco qui
              cupidatat dolore non eu irure aliqua pariatur. Aliqua duis
              cupidatat proident officia excepteur elit eiusmod amet. Eiusmod
              occaecat et reprehenderit sint proident aliquip.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="640px" className="d-block w-100" src={Nail03} alt="Nail"/>
          <Carousel.Caption>
            <h3>Nail Master</h3>
            <p>
              Magna exercitation duis cupidatat deserunt non et sit duis Lorem.
              Aliquip sint labore officia mollit ullamco anim velit laborum sit
              elit qui. Aliquip dolor reprehenderit proident ullamco qui
              cupidatat dolore non eu irure aliqua pariatur. Aliqua duis
              cupidatat proident officia excepteur elit eiusmod amet. Eiusmod
              occaecat et reprehenderit sint proident aliquip.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
        
      
    );
  }
}
