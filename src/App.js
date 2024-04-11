import React, {useState} from 'react'
import './index.css'
import EmployeePage from './components/Administrator/EmployeePage'
import HomePage from './components/Header/HomePage'
import EmployeeEdit from './components/Administrator/EmployeeEdit'
import EmployeeLogin from './components/Employee/EmployeeLogin'
import TimeElapsed from './components/Employee/TimeElapsed'
import TimeList from './components/Employee/TimeList'
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/Header/NavBar'
import AdminLogin from './components/Administrator/AdminLogin'


function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedIn1, setLoggedIn1] = useState(false);
  return (
    <div>
    <NavBar />
      <Switch>
      <Route  exact path="/EmployeeLogin">
          <EmployeeLogin isLoggedInE={isLoggedIn1} setLoggedIn1={setLoggedIn1}/>
        </Route>
        <Route  path="/TimeElapsed">
        {isLoggedIn1 ? <TimeElapsed /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route  path="/TimeList">
        {isLoggedIn1 ?  <TimeList /> : <Redirect to="/EmployeeLogin" />}
        </Route>
        <Route path="/AdminLogin">
        <AdminLogin isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/EmployeePage">
        {isLoggedIn ? <EmployeePage /> : <Redirect to="/AdminLogin" />}
      </Route>
       
        <Route path="/EmployeeEdit">
        {isLoggedIn ? <EmployeeEdit /> : <Redirect to="/AdminLogin" />}
      </Route>
        <Route  path="/">
           <HomePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App