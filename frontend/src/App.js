/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
  let api_url = 'http://127.0.0.1:8000/'
  console.log(api_url)
  fetch(api_url.concat("api")).then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentDate(data.date);

      console.log(data.time)
      console.log(data.date)
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <p>The date is {currentDate} and the time is {currentTime}.</p> <br/>

      </header>
    </div>
  );
}

export default App;