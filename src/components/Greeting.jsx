import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector(state => state.greetings);
  useEffect(() => {
    dispatch(fetchGreetings());
    console.log(greeting);
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <h1>{greeting}</h1>
      )}
    </div>
  );
}

export default Greeting;
