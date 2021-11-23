import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
// import Clock from './components/Clock';
// import NumberList from './components/NumberList';
// import Users from './components/Users';


// const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <App2 />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  }