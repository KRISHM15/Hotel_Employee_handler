import React, { Component } from "react";

import { Container, Table } from "reactstrap";

export class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: []
    };
  }
  componentDidMount() {
    fetch("/api/addEmployee")
      .then(res => res.json())

      .then(data => this.setState({ employeeList: data }));
  }

  render() {
    return (
      <div>
        <Container>
          <h1 className="my-5">Employee List</h1>

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
              {this.state.employeeList.map(employee => (
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
    );
  }
}

export default EmployeeList;
