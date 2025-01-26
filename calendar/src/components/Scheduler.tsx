import React, { useState } from "react";
import dayjs from "dayjs";
import { MainWrapper, HGrid, DayVWrapper, VGrid } from "./schdstyle"; // Import your Stitches styles

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOURS = Array.from({ length: 12 }, (_, i) => i + 7);
const HOUR_BOX_HEIGHT = 30;

const getMonday = () => {
  const today = new Date();
  const first = today.getDate() - today.getDay() + 1;
  return new Date(today.setDate(first));
};

const getDate = (start: Date, index: number): Date =>
  new Date(start.setDate(start.getDate() + index));

const areDatesOnSameDay = (first: Date, second: Date): boolean =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

const Scheduler: React.FC = () => {
  const [mondayDate, setMondayDate] = useState(getMonday());

  const nextWeek = () => setMondayDate(getDate(new Date(mondayDate), 7));
  const prevWeek = () => setMondayDate(getDate(new Date(mondayDate), -7));

  return (
    <MainWrapper>
      <div>
        <button onClick={prevWeek}>Prev Week</button>
        <button onClick={nextWeek}>Next Week</button>
      </div>
      
      {/* GRID STRUCTURE */}
      <HGrid>
        {/* Hour Column */}
        <VGrid>
          {HOURS.map((hour) => (
            <div key={hour} style={{ borderBottom: "1px solid black" }}>
              {String(hour).padStart(2, "0")}:00
            </div>
          ))}
        </VGrid>

        {/* Days Columns */}
        {DAYS.map((day, i) => (
          <DayVWrapper
            key={i}
          >
            <p>{day} {getDate(new Date(mondayDate), i).getDate()}</p>

        
          </DayVWrapper>
        ))}
      </HGrid>
    </MainWrapper>
  );
};

export default Scheduler;
