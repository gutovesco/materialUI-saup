import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import SaubHome from './Pages/SaubHome';

function App() {
  
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/saub">
            <SaubHome />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
