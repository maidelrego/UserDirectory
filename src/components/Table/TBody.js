import React from "react";
import "./style.css"


const TBody = (props) => {
    return(
    <tbody>
    <tr>
      <td><img alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td><a href = "justanexample">{props.email}</a></td>
      <td>{props.DOB}</td>
    </tr>
    </tbody>
    )
}

export default TBody;