import React, { useContext, useEffect } from 'react';
import Todolists from '../todolists/Todolists';
import TodolistForm from '../todolists/TodolistForm';
import TodolistFilter from '../todolists/TodolistFilter';
import AuthContext from '../../context/auth/authContext';
const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

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
