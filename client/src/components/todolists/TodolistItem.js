import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodolistContext from '../../context/todolist/todolistContext';

const TodolistItem = ({ todolist }) => {
  const todolistContext = useContext(TodolistContext);
  const { deleteTodolist, setCurrent, clearCurrent } = todolistContext;

  const { _id, name, info, progress, fav, datestring } = todolist;

  const onDelete = () => {
    deleteTodolist(_id);
    clearCurrent();
  };
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
        <li className=''>Create date : {datestring}</li>
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(todolist)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

TodolistItem.propTypes = {
  todolist: PropTypes.object.isRequired,
};

export default TodolistItem;
