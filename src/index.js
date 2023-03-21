import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from './features/user';
import themeReducer from './features/theme';

/*Creating our global store of states. We are making a collection of REDUCERS, state managers that act analogous to Hooks in
normal React. */
const store = configureStore({
    reducer: {
        //And there we have it! Our login reducer (imported as userReducer) is ready for action.
        user: userReducer,
        theme: themeReducer
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
        {/* For what you see here, we are providing our wrapped App call with the name of our global store
        at the highest level of our app in the index.js file. From here, if we need to toggle/edit a slice from anywhere in this
        project, we know where to go! */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
