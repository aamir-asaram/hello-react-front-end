import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greetings);
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <p>
        Error:
        {error}
      </p>
    );
  } else {
    content = <h1>{greeting}</h1>;
  }

  return <div>{content}</div>;
};

export default Greeting;
