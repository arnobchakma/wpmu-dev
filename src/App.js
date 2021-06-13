import React, { createContext, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="main">
      <div className="container">
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route>
                <Signup />
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
