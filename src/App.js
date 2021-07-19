import React, { useContext, useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { AuthContext } from './store/Context';

function App() {
  const { user, userLoading, isUserSignedOut } = useContext(AuthContext)

  return (
    <div className="app">
      <Router>
        {(!userLoading && !user && isUserSignedOut) ? (<LoginScreen />) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
