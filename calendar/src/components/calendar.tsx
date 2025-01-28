import "@fontsource/anek-telugu";
import { useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import * as Styles from "./calendarStyle";

import {eventForDate} from "./events";

/*code from https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj*/

const  Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const currentDay = useMemo(() => dayjs().toDate(), []);

  const firstDayOfTheMonth = useMemo(
    () => selectedDate.clone().startOf("month"),
    [selectedDate]
  );

  const firstDayOfFirstWeekOfMonth = useMemo(
    () => dayjs(firstDayOfTheMonth).startOf("week"),
    [firstDayOfTheMonth]
  );

  const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];
    for (let i = 1; i < 6; i++) {
      const date = day.clone().add(i, "week");
      dates.push(date);
    }
    return dates;
  }, []);

  const generateWeek = useCallback((day: Dayjs): Date[] => {
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = day.clone().add(i, "day").toDate();
      dates.push(date);
    }
    return dates;
  }, []);


  const generateWeeksOfTheMonth = useMemo((): Date[][] => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(
      firstDayOfFirstWeekOfMonth
    );
    return firstDayOfEachWeek.map((date) => generateWeek(date));
  }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

  const currentWeekDay = dayjs().day();

  return (
    <Styles.MainWrapper>

      <Styles.CalendarHeaderWrapper>
        <h3 style={{ color: 'black' }}>{selectedDate.clone().format("MMMM")} <span style={{ color: 'red' }}>{selectedDate.clone().format("YYYY")}</span></h3>
        <div>
          <MdKeyboardArrowLeft
            size={25} style = {{paddingRight: "25px", color: "rgb(184, 184, 184)"}}
            onClick={() => setSelectedDate((date) => date.subtract(1, "month"))}
          />
          <MdKeyboardArrowRight
            size={25} style = {{color: "rgb(184, 184, 184)"}}
            onClick={() => setSelectedDate((date) => date.add(1, "month"))}
          />
        </div>
      </Styles.CalendarHeaderWrapper>

      {/*Display weekdays, highlight the current weekday*/}
      <Styles.WeekDaysWrapper>
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <Styles.WeekDayCell key={`week-day-${index}`} style={{
            color: index === currentWeekDay ? 'rgb(85, 40, 157)' : "rgb(184, 184, 184)",
            fontWeight: index === currentWeekDay ? "bold" : "normal",}}>
            {day.toUpperCase()} 
          </Styles.WeekDayCell>
        ))}
      </Styles.WeekDaysWrapper>
      
      {generateWeeksOfTheMonth.map((week, weekIndex) => (
        <Styles.CalendarContentWrapper key={`week-${weekIndex}`}>
        {week.map((day, dayIndex) => {
          const isCurrentDate = dayjs(currentDay).isSame(day, "date");
          const event = eventForDate(day);
          return (
            <Styles.CalendarDayCell
              key={`day-${dayIndex}`}
              variant={
              selectedDate.clone().toDate().getMonth() !== day.getMonth()
                  ? "nextMonth"
                  : dayjs(currentDay).isSame(day, "date")
                  ? "today"
                  : "default"
              }
              style={
                isCurrentDate
                  ? { borderRadius: '50%', backgroundColor: 'rgb(85, 40, 157)', color: "white" }
                  :event
                  ? { borderRadius: '50%', backgroundColor:  "rgb(225, 225, 225)"} 
                  : {color: "rgb(207, 204, 204)"}
              }
            >
              {event ? day.getDate() : '●'}  
            </Styles.CalendarDayCell>
          );   {/*if there are event keys correspond to the data then it display the number*/ }
        })}
      </Styles.CalendarContentWrapper>
    ))}
  </Styles.MainWrapper>
  )
}
export default Calendar;