// // import { useState } from 'react';
// import './App.css';

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }

// export default App;

import { BrowserRouter } from 'react-router-dom';
import { TestPage } from './TestPage';
function App() {
  return (
    <BrowserRouter>
      <TestPage />
    </BrowserRouter>
  );
}

export default App;
