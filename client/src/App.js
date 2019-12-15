import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import ListBySalary from "./components/ListBySalary";
import SeniorAvgSal from "./components/SeniorAvgSal";

import AppNavbar from "./components/AppNavbar";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <AddEmployee />
        <Switch>
          <Route path="/listBySalary" component={ListBySalary} />
          <Route path="/seniorAvgSal" component={SeniorAvgSal} />
          <Route path="/employeeList" component={EmployeeList} />
        </Switch>
      </div>
    );
  }
}

export default App;
