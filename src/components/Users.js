import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UsersData: JSON.parse(localStorage.getItem("UsersData"))
    };
  }
  render() {
    const renderData = this.state.UsersData.map(data => (
      <tr key={data.firstname}>
        <td>{data.firstname}</td>
        <td>{data.lastname}</td>
        <td>{data.age}</td>
        <td>{data.dob}</td>
        <td>{data.hobby}</td>
      </tr>
    ));
    return (
      <Table striped bordered hover size='md'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Date Of Birth</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </Table>
    );
  }
}

export default Users;
