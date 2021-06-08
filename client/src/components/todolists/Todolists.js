import React, { Fragment, useContext } from 'react';
import TodolistItem from './TodolistItem';
import TodolistContext from '../../context/todolist/todolistContext';

const Todolists = () => {
  const todolistContext = useContext(TodolistContext);

  const { todolists, filtered } = todolistContext;

  if (todolists.length === 0) {
    return <h4 className='text-center'>Please Add todolist</h4>;
  }

  return (
    <Fragment>
      {filtered
        ? filtered.map(todolist => (
            <TodolistItem key={todolist.id} todolist={todolist} />
          ))
        : todolists.map(todolist => (
            <TodolistItem key={todolist.id} todolist={todolist} />
          ))}
    </Fragment>
  );
};

export default Todolists;
