import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "green",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
  <div className="navbar">
    <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/EmployeeLogin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Employee Login
      </NavLink>
      
      <NavLink
        to="/TimeElapsed"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Punch Clock
      </NavLink>
      <NavLink
        to="/TimeList"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Time Card
      </NavLink>
      <NavLink
        to="/AdminLogin"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Administrator Login
      </NavLink>
      <NavLink
        to="/employeePage"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        EmployeePage
      </NavLink>
      <NavLink
        to="/employeeEdit"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        EmployeeEdit
      </NavLink>
      
  </div>
  )
}

export default NavBar;
