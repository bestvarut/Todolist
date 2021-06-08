import React, { useEffect, useState, useContext } from 'react';
import TodolistContext from '../../context/todolist/todolistContext';

const TodolistForm = () => {
  const todolistContext = useContext(TodolistContext);

  const {
    addTodolist,
    current,
    clearCurrent,
    updateTodolist,
    clearFilter,
  } = todolistContext;

  useEffect(() => {
    if (current !== null) {
      setTodolist(current);
    } else {
      setTodolist({
        name: '',
        info: '',
        progress: 'Undone',
        fav: 'false',
      });
    }
  }, [todolistContext, current]);

  const [todolist, setTodolist] = useState({
    name: '',
    info: '',
    progress: 'Undone',
    fav: 'false',
  });

  const { name, info, progress, fav } = todolist;

  const onChange = e =>
    setTodolist({ ...todolist, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addTodolist(todolist);
    } else {
      updateTodolist(todolist);
    }
    clearAll();
    clearFilter();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Todolist' : 'Add Todolist'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Info'
        name='info'
        value={info}
        onChange={onChange}
      />
      <h5>Progress</h5>
      <input
        type='radio'
        name='progress'
        value='Undone'
        checked={progress === 'Undone'}
        onChange={onChange}
      />{' '}
      Undone{' '}
      <input
        type='radio'
        name='progress'
        value='Done'
        checked={progress === 'Done'}
        onChange={onChange}
      />{' '}
      Done
      <h5>Favorite</h5>
      <input
        type='radio'
        name='fav'
        value='true'
        checked={fav === 'true'}
        onChange={onChange}
      />{' '}
      Yes{' '}
      <input
        type='radio'
        name='fav'
        value='false'
        checked={fav === 'false'}
        onChange={onChange}
      />{' '}
      No
      <div>
        <input
          type='submit'
          value={current ? 'Update Todolist' : 'Add Todolist'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default TodolistForm;
