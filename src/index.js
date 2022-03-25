import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';
// fontawesome에 있는 모든 것들을 임포트 해왔습니당!

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

