import React from "react";
import "./style.css"


const THead = () => {
  return (
    <thead className="bg-info">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>DOB</th>
      </tr>
    </thead>
  )
}

export default THead;