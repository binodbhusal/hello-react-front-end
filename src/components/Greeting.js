import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchRandomGreeting from '../redux/fetchdata';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, isError } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  let greetingContent;

  if (isLoading) {
    greetingContent = 'Loading...';
  } else if (isError) {
    greetingContent = `Error: ${isError}`;
  } else {
    greetingContent = greeting;
  }
  return (
    <div>
      <h1>Greeting:</h1>
      <p>{greetingContent}</p>
    </div>
  );
}

export default Greeting;
