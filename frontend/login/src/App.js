import React, { Component } from 'react';


import './App.css';


import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Signup from './Pages/signup';
import Signin from './Pages/Signin';
import Button from './components/Button'


// import Input from './components/Input';


class App extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>
        <div>
          <Router>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </Router>
        </div>

      </div>
    );
  }
}
export default App;
