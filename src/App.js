import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import Write from "./pages/WritePage"
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/login/Login";
import firebase from "firebase";
import '@firebase/firestore';
import './config/config'

function App() {
  

  return (

      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/write"  component={Write} />
            <Route path="/auth/newStory"  component={Write} />
            <Route path="/about" component={About} />
            <Route path="/sign-up" component={Login} />
            <Route path="/get-start" component={Login} />
          </Switch>
        </Router>
      </>

  );
}

export default App;
