import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
//import * as Scripts from './js/scripts.js';

export const Context = createContext(null)

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// root.render(<Scripts />);

ReactDOM.render(
    <Context.Provider value={{user: new UserStore()}}>
        <App />
    </Context.Provider>, 
  document.getElementById('root')
);