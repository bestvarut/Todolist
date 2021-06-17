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
    getTodolist,
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
        datestring: '',
        duedate: '',
      });
    }
  }, [todolistContext, current]);

  const [todolist, setTodolist] = useState({
    name: '',
    info: '',
    progress: 'Undone',
    fav: 'false',
    datestring: '',
    duedate: '',
  });

  const { name, info, progress, fav, duedate } = todolist;

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
    getTodolist();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className=''>{current ? 'Edit Todolist' : 'Add Todolist'}</h2>
      <h5>
        Task name <i className='text-danger'>*</i>{' '}
      </h5>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
        required
      />
      <h5>
        Task info <i className='text-danger'>*</i>
      </h5>
      <input
        type='text'
        placeholder='Info'
        name='info'
        value={info}
        onChange={onChange}
        required
      />
      <h5>Due date</h5>
      <input type='date' value={duedate} name='duedate' onChange={onChange} />
      <h5 style={{ margin: '1rem 0 0.2rem 0' }}>Progress</h5>
      <input
        style={{ margin: '0 0.2rem 1.5rem 0' }}
        type='radio'
        name='progress'
        value='Undone'
        checked={progress === 'Undone'}
        onChange={onChange}
      />{' '}
      Undone{' '}
      <input
        style={{ margin: '0 0.2rem 1.5rem 2rem' }}
        type='radio'
        name='progress'
        value='Done'
        checked={progress === 'Done'}
        onChange={onChange}
      />{' '}
      Done
      <h5 style={{ margin: '0 0 0.2rem 0' }}>Favorite</h5>
      <input
        style={{ margin: '0 0.2rem 1.5rem 0' }}
        type='radio'
        name='fav'
        value='true'
        checked={fav === 'true'}
        onChange={onChange}
      />{' '}
      Yes{' '}
      <input
        style={{ margin: '0 0.2rem 1.5rem 3.75rem' }}
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
