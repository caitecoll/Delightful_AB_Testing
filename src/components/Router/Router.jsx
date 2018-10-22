import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FormControls from '../FormControls';
import SearchForm from '../SearchForm';

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Form Controls</Link>
        </li>
        <li>
          <Link to="/search-filter">Search Filter Example</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={FormControls} />
      <Route path="/search-filter" component={SearchForm} />
    </div>
  </Router>
);
