import React, { useEffect } from 'react';
import Counter from '../components/Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateAgeUser } from 'store/user/action';

const HomePage = () => {
  const { name, age } = useSelector(state => state.user);
  console.log('name,age :>> ', name, age);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createUser('Bob'));
    dispatch(updateAgeUser(42));
    // dispatch({ type: 'createNewName', payload: 'Bob' })
  }, [dispatch]);

  return <Counter />;
};

export default HomePage;
