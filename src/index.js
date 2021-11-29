import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Clock from './components/Clock';
// import NumberList from './components/NumberList';
// import Users from './components/Users';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
  }