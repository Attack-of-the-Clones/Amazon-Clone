import "./App.css";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout page</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <h1>Home page!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* We need React-ROUTER to add multi-page functionality in a single-page app.
      React Router gives th app the feel of desktop apps so you're switching
      between pages without talking to the server thus the page doesn't reload. */
}

{
  /* example.com */
}
{
  /* example.com/checkout */
}
{
  /* example.com/login */
}

export default App;
