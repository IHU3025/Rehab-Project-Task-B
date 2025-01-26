import './App.css';
import React, { FC, useState } from 'react';
import Calendar from './components/calendar';
import Scheduler from './components/Scheduler';
import TodayEvents from './components/todayschedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { events } from './components/events';

function App() {
  const [view, setView] = useState('Week');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on the search result
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <>
      <div className="container">
        <div className="left-panel">
          <nav className="navbar">
            {/*<div className="nav-left">
              <button className="nav-button" onClick={prevWeek}><strong>&lt;</strong></button>
              <button className="today" onClick={goToToday}>Today</button>
              <button className="nav-button" onClick={nextWeek}><strong>&gt;</strong></button>
            </div>,  having trouble with router dom and useImperativeHandle dependecy, 
            so decided to seperate the main-navbar with the scheduler one*/}
            <div className="nav-center">
              <button className="nav-view" onClick={() => setView('Day')}>Day</button>
              <button className="nav-view" onClick={() => setView('Week')}>Week</button>
              <button className="nav-view" onClick={() => setView('Month')}>Month</button>
              <button className="nav-view" onClick={() => setView('Year')}>Year</button>
            </div>
            <div className="nav-right">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input type="text" 
                     className="search-box" 
                     placeholder="Search" 
                     value={searchQuery}
                     onChange={handleSearchChange}/>
            </div>
          </nav>
          {view === 'Week' && <Scheduler events={filteredEvents} />}
          {view === 'Day' && <p>Day View Placeholder</p>}
          {view === 'Month' && <p>Month View Placeholder</p>}
          {view === 'Year' && <p>Year View Placeholder</p>}
        </div>
        <div className="right-panel">
          <Calendar/>
          <TodayEvents events={filteredEvents} />
        </div>
      </div>
    </>
  );
};

export default App;
