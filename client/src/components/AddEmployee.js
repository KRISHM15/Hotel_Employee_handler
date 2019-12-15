import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class AddEmployee extends Component {
  async handleSubmit(event) {
    try {
      event.preventDefault();
      if (
        !event.target.name.value.trim() ||
        !event.target.salary.value.trim() ||
        !event.target.Type.value.trim()
      ) {
        alert("Please Enter all fields");
        return;
      }

      let data = {
        name: event.target.name.value,
        salary: event.target.salary.value,
        Type: event.target.Type.value
      };

      await axios.post("/api/addEmployee", data);
      alert("Employee  Added.");
    } catch (err) {
      console.log("Error", err);
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <h1>Add New Employee</h1>
              <Label for="name">Name</Label>
              <Input type="text" name="name" placeholder="Full Name" />
            </FormGroup>
            <FormGroup>
              <Label for="salary">salary</Label>
              <Input
                type="number"
                name="salary"
                placeholder="Enter the amount"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Type">Type</Label>
              <Input
                type="text"
                name="Type"
                placeholder="Enter Senior or Junior"
              />
            </FormGroup>
            <Button className=" btn-block my-3">Submit</Button>
          </Form>
        </Container>
        <div className="  my-5   ">
          <Link to="/employeeList">
            <Button
              className=" btn-block mx-auto my-3"
              color="primary"
              style={{ width: "80%" }}
            >
              Employees List
            </Button>
          </Link>
          <Link to="/listBySalary">
            <Button
              color="success"
              className=" btn-block mx-auto my-3"
              style={{ width: "80%" }}
            >
              Employees List by Salary
            </Button>
          </Link>
          <Link to="/seniorAvgSal">
            <Button
              color="info"
              className=" btn-block mx-auto my-3"
              style={{ width: "80%" }}
            >
              Avg Salary of Senior Employees
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
