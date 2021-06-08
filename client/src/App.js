import React, { Fragment, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About } from './components/page';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import TodolistState from './context/todolist/TodolistState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ThemeContext from './context/theme/themeContext';
import './App.css';

const App = () => {
  const themeContext = useContext(ThemeContext);
  const { dark, theme, toggleTheme } = themeContext;

  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
  }, [theme]);

  return (
    <AuthState>
      <TodolistState>
        <AlertState>
          <Router>
            <Fragment className='App'>
              <Navbar />
              <div className='container' style={{ color: theme.color }}>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </TodolistState>
    </AuthState>
  );
};

export default App;
