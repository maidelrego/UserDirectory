import React from "react";
import "./style.css"


const TBody = (props) => {
    return(
    <tbody>
    <tr>
      <td><img alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.DOB}</td>
    </tr>
    </tbody>
    )
}

export default TBody;