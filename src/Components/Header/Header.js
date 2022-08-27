import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <NavLink className={"btn btn-primary"} to="/">
          {" "}
          Home page
        </NavLink>
        <NavLink className={"btn btn-primary mx-5"} to="/detail">
          {" "}
          Detail page
        </NavLink>
        <NavLink className={"btn btn-primary"} to="/login">
          {" "}
          Login page
        </NavLink>
      </div>
    );
  }
}
