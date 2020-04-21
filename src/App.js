import React, { Component } from "react";
import Jumbotron from "./components/Jumbo/Jumbotron.js";
import Container from "./components/Container/index.js";
import Row from "react-bootstrap/Row";
import employees from "./components/employee/employee.json"
import THead from "./components/Table/THead.js";
import Col from "react-bootstrap/Col";
import TBody from "./components/Table/TBody.js";
import Table from "react-bootstrap/Table"

class App extends Component {
  
  state = {
    employees
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron />
            <Table responsive hover>
              <THead />
              {this.state.employees.map(employees => (
                <TBody
                  image={employees.image}
                  name={employees.name}
                  phone={employees.phone}
                  email={employees.email}
                  DOB={employees.DOB}
                />
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;