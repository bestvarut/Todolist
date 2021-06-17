import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TodolistContext from '../../context/todolist/todolistContext';

const TodolistItem = ({ todolist }) => {
  const todolistContext = useContext(TodolistContext);
  const {
    deleteTodolist,
    setCurrent,
    clearCurrent,
    updateTodolist,
    getTodolist,
  } = todolistContext;

  const { _id, name, info, progress, fav, duedate } = todolist;
  const [todotask, setTodotask] = useState();

  useEffect(() => {
    setTodotask(todolist);
    // eslint-disable-next-line
  }, []);

  const changDone = () => {
    if (progress === 'Done') {
      setTodotask({
        ...todotask,
        progress: 'Undone',
      });
    } else {
      setTodotask({
        ...todotask,
        progress: 'Done',
      });
    }
  };

  const changeFav = () => {
    if (fav === 'true') {
      setTodotask({
        ...todotask,
        fav: 'false',
      });
    } else {
      setTodotask({
        ...todotask,
        fav: 'true',
      });
    }
  };

  const onDelete = () => {
    deleteTodolist(_id);
    clearCurrent();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    if (todotask) {
      await updateTodolist(todotask);
      await getTodolist();
    }
    // eslint-disable-next-line
  }, [todotask]);

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left' style={{ display: 'inline' }}>
        {name}
      </h3>
      <a
        href='#!'
        onClick={changeFav}
        style={{ float: 'right', color: 'red' }}
        className='large'
      >
        {fav === 'true' ? '♥' : '♡'}
      </a>
      <ul className='list'>
        <li>{info}</li>
        <li className=''> {duedate ? `Duedate  ${duedate}` : ''} </li>
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
        <button
          onClick={changDone}
          style={{ float: 'right', display: 'inline', borderRadius: '5px' }}
          className={
            'btn btn-sm ' +
            (progress === 'Done' ? 'btn-success' : 'btn-primary')
          }
        >
          {progress}
        </button>
      </p>
    </div>
  );
};

TodolistItem.propTypes = {
  todolist: PropTypes.object.isRequired,
};

export default TodolistItem;
