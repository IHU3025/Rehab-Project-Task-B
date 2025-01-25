import './App.css';
import React, { FC } from 'react';
import Calendar from './components/calendar';
import Scheduler from './components/Scheduler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <div className="container">
        <div className="left-panel">
          <nav className="navbar">
            <div className="nav-left">
              <button className="nav-button"><strong>&lt;</strong></button>
              <button className="today">Today</button>
              <button className="nav-button"><strong>&gt;</strong></button>
            </div>
            <div className="nav-center">
              <button className="nav-view">Day</button>
              <button className="nav-view">Week</button>
              <button className="nav-view">Month</button>
              <button className="nav-view">Year</button>
            </div>
            <div className="nav-right">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" className="search-box" placeholder="Search" />
            </div>
          </nav>
          <Scheduler/>
        </div>
        <div className="right-panel">
          <Calendar/>
        </div>
      </div>
    </>
  );
};

export default App;
