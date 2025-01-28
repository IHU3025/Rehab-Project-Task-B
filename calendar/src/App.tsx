import './App.css';
import { FC, useState, ChangeEvent } from 'react';
import Calendar from './components/calendar';
import Scheduler from './components/Scheduler';
import TodayEvents from './components/TodaySchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { events } from './components/events';

const App: FC = () => {
  //manually setting view since cant install react touter library due to dependency issue
  const [view, setView] = useState('Week');

  //search box update value
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); 
  };


  // filter events based on the search result
  const filteredEvents = events.filter(
    event => event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
      <div className="container">
        <div className="left-panel">
          <nav className="navbar">
            {/*<div className="nav-left">
              <button className="nav-button" onClick={prevWeek}><strong>&lt;</strong></button>
              <button className="today" onClick={goToToday}>Today</button>
              <button className="nav-button" onClick={nextWeek}><strong>&gt;</strong></button>
            </div>,  having trouble with router dom and useImperativeHandle dependency, 
            so decided to seperate the scheduler nav-bar from the main nav-bar*/}
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
          <div className='calendar'><Calendar/></div>
          <TodayEvents events={filteredEvents} />
        </div>
      </div>
  );
};

export default App;
