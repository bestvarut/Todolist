import React, { useContext, useRef, useEffect } from 'react';
import TodolistContext from '../../context/todolist/todolistContext';

const TodolistFilter = () => {
  const todolistContext = useContext(TodolistContext);
  const text = useRef('');

  const { clearFilter, filterTodolists, filtered } = todolistContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterTodolists(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Todolists...'
        onChange={onChange}
      />
    </form>
  );
};

export default TodolistFilter;
