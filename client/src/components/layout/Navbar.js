import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ThemeContext from '../../context/theme/themeContext';
import TodolistContext from '../../context/todolist/todolistContext';

export const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const todolistContext = useContext(TodolistContext);

  const { isAuthenticated, logout, user } = authContext;
  const { dark, theme, toggleTheme } = themeContext;
  const { clearTodolist } = todolistContext;

  const linkStyle = {
    color: theme.color,
    backgroundColor: theme.backgroundColor,
  };
  const onClick = () => {
    toggleTheme();
  };
  const onLogout = () => {
    logout();
    clearTodolist();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <Link to='/' style={linkStyle}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about' style={linkStyle}>
          About
        </Link>
      </li>
      <li>
        <a href='#!' onClick={onLogout} style={linkStyle}>
          {' '}
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/about' style={linkStyle}>
          About
        </Link>
      </li>
      <li>
        <Link to='/register' style={linkStyle}>
          Register
        </Link>
      </li>
      <li>
        <Link to='/login' style={linkStyle}>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div
      className='navbar'
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <h1>{title}</h1>
      <button onClick={onClick} className='btn btn-danger '>
        Change to {!dark ? 'dark' : 'light'} theme
      </button>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Todolist',
};

export default Navbar;
