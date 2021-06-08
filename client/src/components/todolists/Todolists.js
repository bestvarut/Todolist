import React, { Fragment, useContext, useEffect } from 'react';
import TodolistItem from './TodolistItem';
import TodolistContext from '../../context/todolist/todolistContext';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';

const Todolists = () => {
  const todolistContext = useContext(TodolistContext);

  const { loading, getTodolist, todolists, filtered } = todolistContext;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    getTodolist();
    // eslint-disable-next-line
  }, []);

  if (todolists !== null && todolists.length === 0 && !loading) {
    return <h4 className='text-center'>Please Add todolist</h4>;
  }

  return (
    <Fragment>
      {todolists !== null && !loading ? (
        filtered ? (
          filtered.map(todolist => (
            <TodolistItem key={todolist._id} todolist={todolist} />
          ))
        ) : (
          todolists.map(todolist => (
            <TodolistItem key={todolist._id} todolist={todolist} />
          ))
        )
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Todolists;
