import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">Inicio</Link>
          <Link to="/login" className="btn btn-dark">Login</Link>
          <NavLink to="/signup" className="btn btn-dark" activeClassName="active">Signup</NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/" exact>
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}
 
export default App;
