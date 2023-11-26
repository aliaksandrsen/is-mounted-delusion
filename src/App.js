import { useEffect, useState } from 'react';
import { ListA } from './ListA';

function App() {
  const [showList, setShowList] = useState(true);

  return (
    <>
      <button onClick={() => setShowList(!showList)}>Toggle List</button>

      {showList && <ListA id={Math.floor(Math.random() * 20) + 1} />}
    </>
  );
}

export default App;
