import React, { useReducer } from 'react';
import axios from 'axios';
import TodolistContext from './todolistContext';
import todolistReducer from './todolistReducer';
import {
  GET_TODOLISTS,
  CLEAR_TODOLISTS,
  ADD_TODOLIST,
  DELETE_TODOLIST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TODOLIST,
  FILTER_TODOLISTS,
  CLEAR_FILTER,
  TODOLIST_ERROR,
} from '../types';

const TodolistState = props => {
  const initialState = {
    todolists: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(todolistReducer, initialState);

  //Get Todolists
  const getTodolist = async () => {
    try {
      const res = await axios.get('/api/todolist');

      dispatch({ type: GET_TODOLISTS, payload: res.data });
    } catch (err) {
      dispatch({ type: TODOLIST_ERROR, payload: err.response.msg });
    }
  };

  // Add todolist
  const addTodolist = async todolist => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/todolist', todolist, config);

      dispatch({ type: ADD_TODOLIST, payload: res.data });
    } catch (err) {
      dispatch({ type: TODOLIST_ERROR, payload: err.response.msg });
    }
  };
  // Delete todolist
  const deleteTodolist = async id => {
    try {
      await axios.delete(`/api/todolist/${id}`);

      dispatch({ type: DELETE_TODOLIST, payload: id });
    } catch (err) {
      dispatch({ type: TODOLIST_ERROR, payload: err.response.msg });
    }
  };

  // Update todolist
  const updateTodolist = async todolist => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/todolist/${todolist._id}`,
        todolist,
        config
      );

      dispatch({ type: UPDATE_TODOLIST, payload: res.data });
    } catch (err) {
      dispatch({ type: TODOLIST_ERROR, payload: err.response.msg });
    }
  };

  // Clear todolists
  const clearTodolist = () => {
    dispatch({ type: CLEAR_TODOLISTS });
  };

  // Set Currnet todolist
  const setCurrent = todolist => {
    dispatch({ type: SET_CURRENT, payload: todolist });
  };
  // Clear Current todolist
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        error: state.error,
        getTodolist,
        addTodolist,
        deleteTodolist,
        clearTodolist,
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
