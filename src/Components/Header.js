import React, { Component } from "react";
import { DropdownDivider } from "react-bootstrap/Dropdown";
import {
  Navbar,
  Container,
  NavbarBrand,
  FormControl,
  NavLink,
  Nav,
  Button,
  Form
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";
import { logDOM } from "@testing-library/react";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          /* fixed="top" */
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <NavbarBrand href="/">
              <img
                src={ logo }
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              Nail Master
            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Services </Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </>
    );
  }
}
