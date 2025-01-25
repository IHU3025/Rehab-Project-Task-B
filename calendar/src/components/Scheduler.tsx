import "@fontsource/anek-telugu";
import { useCallback, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import event from "./events";

import * as Styles from "./schdstyle";

const events = {
    "2025-02-01": "Event 1",
    "2025-02-15": "Event 2",
    // Add more events here
  };



  function Scheduler() {
    const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  
    const currentDay = useMemo(() => dayjs().toDate(), []);
  
    const firstDayOfTheWeek = useMemo(
      () => selectedDate.clone().startOf("week"),
      [selectedDate]
    );
  
    const generateWeekDays = useCallback((): Dayjs[] => {
      const days: Dayjs[] = [];
      for (let i = 0; i < 7; i++) {
        days.push(firstDayOfTheWeek.clone().add(i, "day"));
      }
      return days;
    }, [firstDayOfTheWeek]);
  
    const generateTimeSlots = useCallback((): string[] => {
      const times: string[] = [];
      for (let i = 7; i <= 17; i++) {
        times.push(`${i}:00`);
      }
      return times;
    }, []);
  
    const weekDays = generateWeekDays();
    const timeSlots = generateTimeSlots();
  
    return (
      <Styles.MainWrapper>
        <Styles.CalendarHeaderWrapper>
          <h3 style={{ color: 'black' }}>{selectedDate.clone().format("MMMM")} <span style={{ color: 'red' }}>{selectedDate.clone().format("YYYY")}</span></h3>
          <div>
            <MdKeyboardArrowLeft
              size={25}
              onClick={() => setSelectedDate((date) => date.subtract(1, "week"))}
            />
            <MdKeyboardArrowRight
              size={25}
              onClick={() => setSelectedDate((date) => date.add(1, "week"))}
            />
          </div>
        </Styles.CalendarHeaderWrapper>
        <Styles.WeekDaysWrapper>
          {weekDays.map((day, index) => (
            <Styles.WeekDayCell key={`week-day-${index}`}>
              {day.format("ddd DD")}
            </Styles.WeekDayCell>
          ))}
        </Styles.WeekDaysWrapper>
        {timeSlots.map((time, timeIndex) => (
          <Styles.CalendarContentWrapper key={`time-slot-${timeIndex}`}>
            <Styles.TimeSlot>{time}</Styles.TimeSlot>
            {weekDays.map((day, dayIndex) => {
              const dateString = day.format("YYYY-MM-DD");
              const isCurrentDate = dayjs(currentDay).isSame(day, "date");
              return (
                <Styles.CalendarDayCell
                  key={`day-${dayIndex}`}
                  variant={
                    selectedDate.clone().toDate().getMonth() !== day.month()
                      ? "nextMonth"
                      : isCurrentDate
                      ? "today"
                      : "default"
                  }
                  style={
                    isCurrentDate
                      ? { borderRadius: '50%', backgroundColor: 'rgb(85, 40, 157)', color: "white" }
                      : events[dateString]
                      ? { borderRadius: '50%', backgroundColor: 'rgb(219, 221, 229)' }
                      : {}
                  }
                >
                  {events[dateString] ? day.date() : '•'}  
                </Styles.CalendarDayCell>
              );  
            })}
            <Styles.TimeSlot>{time}</Styles.TimeSlot> {/* Add time slot on the right edge */}
          </Styles.CalendarContentWrapper>
        ))}
      </Styles.MainWrapper>
    );
  }
  
  export default Scheduler