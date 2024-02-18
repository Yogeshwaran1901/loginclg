import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/Components/College/Home/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

