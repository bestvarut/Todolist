import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navbar = ({ title }) => {
  const onClick = () => {};

  return (
    <div className='navbar bg-primary'>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>

        <button onClick={onClick} className=' btn-light '>
          Change theme
        </button>
      </ul>
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
