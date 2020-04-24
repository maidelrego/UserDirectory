import React from "react";
import {Row, Col} from "react-bootstrap";
import Title from "../Title/index.js";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./style.css";

const Jumbotron = () => {
  return (
    <Row>
      <Col className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
        <Col className="py-5">
          <Title>Employee Directory</Title>
          <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
          optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
            </p>
          <Col md={{ span: 6, offset: 3 }}>
            <InputGroup className="mb-3">
              <FormControl id="searchBar" placeholder=""/>
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Col>
      </Col>
    </Row>
  )
}

export default Jumbotron;