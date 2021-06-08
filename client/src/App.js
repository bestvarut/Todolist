import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, About } from './components/page';
import Navbar from './components/layout/Navbar';
import TodolistState from './context/todolist/TodolistState';
import './App.css';

const App = () => {
  return (
    <TodolistState>
      <Router>
        <Fragment className='App'>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </TodolistState>
  );
};

export default App;
