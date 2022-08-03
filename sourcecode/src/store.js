import { createStore } from 'redux';
import reducer from './reducer/index'; // or just './reducer'. It will automaticaly look for a file called index in that folder

// CREATE THE REDUX STORE 
// if redux devtools are installed => you'll enable them; else, you'll not do anything
const store = createStore(
    reducer, // the route reducer
    typeof window === 'object' // this could run in node without any problems
        && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
);

export default store;