import React, { Fragment, useContext } from 'react';
import TodolistItem from './TodolistItem';
import TodolistContext from '../../context/todolist/todolistContext';

const Todolists = () => {
  const todolistContext = useContext(TodolistContext);

  const { todolists } = todolistContext;

  return (
    <Fragment>
      {todolists.map(todolist => (
        <TodolistItem key={todolist.id} todolist={todolist} />
      ))}
    </Fragment>
  );
};

export default Todolists;
