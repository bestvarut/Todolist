import React, { useState, useContext } from 'react';
import TodolistContext from '../../context/todolist/todolistContext';

const TodolistForm = () => {
  const todolistContext = useContext(TodolistContext);

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
    todolistContext.addTodolist(todolist);
    setTodolist({
      name: '',
      info: '',
      progress: 'Undone',
      fav: 'false',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Todolist</h2>
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
          value='Add Todolist'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default TodolistForm;
