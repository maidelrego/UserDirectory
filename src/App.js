import React, { Component } from "react";
import Jumbotron from "./components/Jumbo/Jumbotron.js";
import Container from "./components/Container/index.js";
import Row from "react-bootstrap/Row";
import employees from "./components/employee/employee.json"
import THead from "./components/Table/THead.js";
import Col from "react-bootstrap/Col";
import TBody from "./components/Table/TBody.js";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

class App extends Component {
  
  state = {
    employees
  };
  
  filterByName = filteredName => {
    this.state.employees.filter(filteredName.includes('J')).map(filteredName => (
    <td>{filteredName}</td>
    ))}

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron />
            <Button onClick={this.filterByName}>Filter</Button>
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
            <hr />
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;