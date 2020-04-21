import React from "react";
import Table from "react-bootstrap/Table";
import "./style.css"


const Directory = (props) => {
    return(
    <Table striped bordered hover size="sm">
    <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><img alt={props.name} src={props.image}/></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.DOB}</td>
    </tr>
    </tbody>
    </Table>
    )
}

export default Directory;