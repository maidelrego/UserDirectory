import React, { Component } from "react";
import Jumbotron from "./components/Jumbo/Jumbotron.js";
import Directory from "./components/Table/Directory.js";
import Container from "./components/Container/index.js";
import Row from "react-bootstrap/Row";
import employees from "./components/employee/employee.json"

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
        <div>
        <Jumbotron />
        {this.state.employees.map(employees => (
          <Directory
            name={employees.name}
            image={employees.image}
            phone={employees.phone}
            email={employees.email}
            DOB={employees.DOB}
          />
        ))}
        </div>
        </Row>
      </Container>
    );
  }
}

export default App;