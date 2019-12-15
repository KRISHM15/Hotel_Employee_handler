import React, { Component } from "react";

import { Container, Table } from "reactstrap";

export class ListBySalary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highSalary: []
    };
  }
  componentDidMount() {
    fetch("/api/addEmployee/highsal")
      .then(res => res.json())
      .then(data => this.setState({ highSalary: data }));
  }

  render() {
    return (
      <div>
        <div>
          <Container>
            <h1 className="my-5">Employee List by High Salary</h1>
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                {this.state.highSalary.map(employee => (
                  <tr key={employee._id}>
                    <th scope="row">{employee._id} </th>
                    <td>{employee.name}</td>
                    <td>{employee.salary} </td>
                    <td>{employee.Type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    );
  }
}

export default ListBySalary;
