import React, { useState } from "react";
import { MainWrapper, HGrid, DayVWrapper, VGrid, Hour } from "./schdstyle"; // Import your Stitches styles
import { getSunday, getDate, areDatesOnSameDay } from "./datefunc"; 
import "../App.css";
import { events, CalendarEvent } from "./events";
import EventRenderer from "./eventrender";


const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOURS = Array.from({ length: 11 }, (_, i) => i + 7);


{/*code reference https://codesandbox.io/p/sandbox/weekly-calendar-d4bn7e?file=%2Fsrc%2FApp.js%3A54%2C6*/}

interface SchedulerProps {
    events: CalendarEvent[];
  }



const Scheduler: React.FC<SchedulerProps> = ({ events }) => {


    const [sundayDate, setSundayDate] = useState(getSunday());
    const today = new Date();

    const formatHour = (hour: number) => {
        if (hour < 12) {
        return `${hour} AM`;
        } else if (hour === 12) {
        return `${hour} PM`;
        } else {
        return `${hour % 12} PM`;
        }
    };


    const nextWeek = () => setSundayDate(getDate(new Date(sundayDate), 7));
    const prevWeek = () => setSundayDate(getDate(new Date(sundayDate), -7));

  return (
    
    <MainWrapper>
      <nav className="scheduler-navbar">
        <button className="nav-button" onClick={prevWeek}>
         <b>&lt;</b> 
        </button>
        <button className="today" onClick={() => setSundayDate(getSunday())}>
          Today
        </button>
        <button className="nav-button" onClick={nextWeek}>
          <b>&gt;</b> 
        </button>
      </nav>
      
      {/* GRID*/}
      <HGrid>
        {/* Hour */}
        <VGrid>
          <Hour key="empty"></Hour>
          {HOURS.map((hour) => (
            <Hour key={hour}>{formatHour(hour)}</Hour>
          ))}
        </VGrid>

        {/* Days */}
        {DAYS.map((day, i) => {
          const date = getDate(new Date(sundayDate), i);
          const isToday = areDatesOnSameDay(date, today);
          const isWeekend = i === 0 || i === 6;
          const dayEvents = events.filter(event => areDatesOnSameDay(event.start, date));

          return (
            <DayVWrapper
              key={i}
              style={{
                backgroundColor: isToday ? 'rgb(229, 231, 237)' :
                                isWeekend ? 'rgb(240, 241, 244)': 
                                'rgb(245, 246, 248)',
              }}
            >
               <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", height: "100%" , paddingLeft: "20px"}}>
                <p style={{ fontSize: "12px", margin: "0" , lineHeight: "1.5"}}>
                  {day.toUpperCase()}
                </p>
                <p style={{ fontSize: "24px", fontWeight: "bold", margin: "0" , lineHeight: "1"}}>
                  {date.getDate()}
                </p>
              </div>


              {/* Render Events */}
              {dayEvents.map((event, eventIndex) => (
                <EventRenderer key={event.id}  event={event} events={dayEvents} columnIndex={i} eventIndex={eventIndex} />
              ))}
            </DayVWrapper>
          );
        })}
        
        <VGrid>
          <Hour key="empty">
            <div style={{ flexDirection: "column"}}>
                <p style = {{lineHeight: "0"}}>EST</p>
                <p style = {{lineHeight: "0"}}>GMT-5</p>
            </div>
          </Hour>
          {HOURS.map((hour) => (
            <Hour key={hour}>{formatHour(hour)}</Hour>
          ))}
        </VGrid>
      </HGrid>
    </MainWrapper>
  );
};

export default Scheduler;
