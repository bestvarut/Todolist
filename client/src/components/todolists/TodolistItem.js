import React from 'react';
import PropTypes from 'prop-types';

const TodolistItem = ({ todolist }) => {
  const { id, name, info, progress, fav } = todolist;
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {fav === 'true' ? '♥ ' : '♡ '}
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' + (progress === 'Done' ? 'badge-success' : 'badge-danger')
          }
        >
          {progress}
        </span>{' '}
      </h3>
      <ul className='list'>
        <li>{info}</li>
      </ul>
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

TodolistItem.propTypes = {
  todolist: PropTypes.object.isRequired,
};

export default TodolistItem;