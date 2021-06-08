import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodolistContext from './todolistContext';
import todolistReducer from './todolistReducer';
import {
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODOLIST,
  FILTER_TODOLISTS,
  CLEAR_TODOLIST,
} from '../types';

const TodolistState = props => {
  const initialState = {
    todolists: [
      {
        id: 1,
        name: 'Do Homework',
        info: 'Doing homework',
        progress: 'Done',
        fav: 'true',
      },
      {
        id: 2,
        name: 'Clear Homework',
        info: 'Clearing homework',
        progress: 'Undone',
        fav: 'true',
      },
      {
        id: 3,
        name: 'Go to Clinic',
        info: 'This monday',
        progress: 'Undone',
        fav: 'false',
      },
    ],
  };

  const [state, dispatch] = useReducer(todolistReducer, initialState);

  // Add todolist
  const addTodolist = todolist => {
    todolist.id = uuidv4();
    dispatch({ type: ADD_TODOLIST, payload: todolist });
  };
  // Delete todolist

  // Set Currnet todolist

  // Clear Current todolist

  // Update todolist

  //Filter todolist

  //Clear Filter

  return (
    <TodolistContext.Provider
      value={{
        todolists: state.todolists,
        addTodolist,
      }}
    >
      {props.children}
    </TodolistContext.Provider>
  );
};

export default TodolistState;
