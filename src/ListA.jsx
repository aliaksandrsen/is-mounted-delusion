import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// ! But in react 18 - no such error
// ! `Can't perform a React state update on an unmounted component`

// !!!!!!! github.com/reactwg/react-18/discussions/82

// ! However, this fix does not actually solve any "memory leaks".
// ! It just suppresses the warning.As mentioned earlier, there's also no actual leak here anyway.
// !Waiting for a Promise is temporary, and there's nothing holding onto the component indefinitely.

export const ListA = () => {
  const isMounted = useRef(false);
  console.log('render ListA  isMounted:', isMounted.current);
  const [data, setData] = useState([]);

  useEffect(() => {
    isMounted.current = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );

        // Check if a component is mounted before updating state
        if (isMounted.current) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchData();

    return () => {
      // When the component is unmounted, set the flag to false
      isMounted.current = false;
      console.log('return useEffect isMounted:', isMounted.current);
    };
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
