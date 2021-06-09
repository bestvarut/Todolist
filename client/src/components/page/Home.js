import React from 'react';
import Todolists from '../todolists/Todolists';
import TodolistForm from '../todolists/TodolistForm';
import TodolistFilter from '../todolists/TodolistFilter';
const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <TodolistForm />
      </div>
      <div>
        <TodolistFilter />
        <Todolists />
      </div>
    </div>
  );
};
export default Home;
