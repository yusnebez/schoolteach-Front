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
import Teacher from './components/Teacher';
import Student from './components/Student';
import Newstudent from './components/Newstudent';
import Newtutor from './components/Newtutor';
import Asigntutor from './components/Asigntutor';
import Asignstudent from './components/Asignstudent';


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
          <Route path="/Teacher">
            <Teacher/>
          </Route>
          <Route path="/Student">
            <Student/>
          </Route>
          <Route path="/Newstudent">
            <Newstudent/>
          </Route>
          <Route path="/Newtutor">
            <Newtutor/>
          </Route>
          <Route path="/Asigntutor">
            <Asigntutor/>
          </Route>
          <Route path="/Asignstudent">
            <Asignstudent/>
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}
 
export default App;
