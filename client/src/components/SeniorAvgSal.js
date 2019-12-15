import React, { Component } from "react";

import { Container, ListGroup, ListGroupItem } from "reactstrap";

class SeniorAvgSal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avgValue: []
    };
  }
  componentDidMount() {
    fetch("/api/addEmployee/senior")
      .then(res => res.json())
      .then(data => this.setState({ avgValue: data }));
  }

  render() {
    const salary = this.state.avgValue.map(employee => (
      <Container key={employee._id}>
        <ListGroup>
          <ListGroupItem>
            <h3>{employee.salary_average}</h3>
          </ListGroupItem>
        </ListGroup>
      </Container>
    ));
    return (
      <div>
        <Container>
          <div>
            <h1 className="my-5">Avg salary of a Senior Employees:</h1>
            <h1>{salary}</h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default SeniorAvgSal;
