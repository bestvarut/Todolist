import React from 'react';
import Todolists from '../todolists/Todolists';
import TodolistForm from '../todolists/TodolistForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <TodolistForm />
      </div>
      <div>
        <Todolists />
      </div>
    </div>
  );
};
export default Home;
