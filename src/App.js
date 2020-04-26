import React from "react";
import Jumbotron from "./components/Jumbo/Jumbotron.js";
import Container from "./components/Container/index.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App () {

  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron />
        </Col>
      </Row>
    </Container>
  );
}

export default App;