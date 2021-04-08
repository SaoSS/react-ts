import React, { useState } from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from './router/index';

function App() {
  return (
    <Router>
        {renderRoutes(routes)}
    </Router>
  );
}

// function App() {
//     const [count, setCount] = useState(0);

//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>Hello Vite + React!</p>
//                 <p>
//                     <button onClick={() => setCount((count) => count + 1)}>
//                         count is: {count}
//                     </button>
//                 </p>
//                 <p>
//                     Edit <code>App.tsx</code> and save to test HMR updates.
//                 </p>
//                 <p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Learn React
//                     </a>
//                     {" | "}
//                     <a
//                         className="App-link"
//                         href="https://vitejs.dev/guide/features.html"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Vite Docs
//                     </a>
//                 </p>
//             </header>
//         </div>
//     );
// }

export default App;
