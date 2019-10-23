import React from "react";
import "./App.css";
import Navbar from "./components/AppNavbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
import Users from "./components/Users";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={RegistrationForm} />
        <Route exact path='/users' component={Users} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
