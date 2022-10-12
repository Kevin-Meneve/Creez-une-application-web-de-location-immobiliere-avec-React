import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/About">
            <About />
        </Route>
    </Router>
  </React.StrictMode>, 
  document.getElementById('root')
);
