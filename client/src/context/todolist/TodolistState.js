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
  CLEAR_FILTER,
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
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(todolistReducer, initialState);

  // Add todolist
  const addTodolist = todolist => {
    todolist.id = uuidv4();
    dispatch({ type: ADD_TODOLIST, payload: todolist });
  };
  // Delete todolist
  const deleteTodolist = id => {
    dispatch({ type: DELETE_TODOLIST, payload: id });
  };
  // Set Currnet todolist
  const setCurrent = todolist => {
    dispatch({ type: SET_CURRENT, payload: todolist });
  };
  // Clear Current todolist
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update todolist
  const updateTodolist = todolist => {
    dispatch({ type: UPDATE_TODOLIST, payload: todolist });
  };
  //Filter todolist
  const filterTodolists = text => {
    dispatch({ type: FILTER_TODOLISTS, payload: text });
  };
  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <TodolistContext.Provider
      value={{
        todolists: state.todolists,
        current: state.current,
        filtered: state.filtered,
        addTodolist,
        deleteTodolist,
        setCurrent,
        clearCurrent,
        updateTodolist,
        filterTodolists,
        clearFilter,
      }}
    >
      {props.children}
    </TodolistContext.Provider>
  );
};

export default TodolistState;
