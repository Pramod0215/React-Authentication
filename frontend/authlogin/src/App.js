import React, { Component } from 'react';
import Login from './component/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Signup from './component/Signup';
import Home from './component/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>           
          <nav>
            <div className='nav-content'>
              <Link to='/home'>Home</Link>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>  
            </div>
           </nav>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup'component={Signup}/>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
