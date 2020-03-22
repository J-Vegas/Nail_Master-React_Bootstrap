import React, { Component } from "react";
import { Container, Tab, Row, Nav, Col } from "react-bootstrap";
import manicure from "../asserts/manicure.jpg";
import pedicure from "../asserts/pedicure.jpg";
import art from "../asserts/art.jpg";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Manicure</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Pedicure</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Art</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="first">
                  <img className="d-block w-100" src={manicure} alt="Manicure" />
                  <p>
                    A manicure is a cosmetic beauty treatment for the
                    fingernails and hands performed at home or in a nail salon.
                    A manicure consists of filing and shaping the free edge of
                    nails, pushing and clipping (with a cuticle pusher and
                    cuticle nippers) any nonliving tissue (but limited to the
                    cuticle and hangnails), treatments with various liquids,
                    massage of the hand, and the application of fingernail
                    polish. When the same is applied to the toenails and feet,
                    the treatment is referred to as a pedicure. Most nail polish
                    can stay on nails for 2-3 weeks before another manicure, if
                    there is no deliberate damage to it.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img className="d-block w-100" src={pedicure} alt="Pedicure" />
                  <p>
                    A pedicure is a cosmetic treatment of the feet and toenails,
                    analogous to a manicure. Pedicures are done for cosmetic,
                    therapeutic purposes. They are popular throughout the world,
                    and especially among women. Pedicures include care not only
                    for the toenails; dead skin cells are rubbed off the bottom
                    of the feet using a rough stone (often a pumice stone). Skin
                    care is often provided up to the knee, including granular
                    exfoliation, moisturizing, and massage. The word pedicure is
                    derived from the Latin words pedis, which means "of the
                    foot", and cura, which means "care".
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img className="d-block w-100" src={art} alt="Art" />
                  <p>
                    The arts refers to the theory and physical expression of
                    creativity found in human cultures and societies. Major
                    constituents of the arts include visual arts (including
                    architecture, ceramics, drawing, filmmaking, painting,
                    photography, and sculpting), literature (including fiction,
                    drama, poetry, and prose), and performing arts (including
                    dance, music, and theatre).
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
