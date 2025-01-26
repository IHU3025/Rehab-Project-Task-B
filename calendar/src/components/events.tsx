import { IntegerType } from "mongodb";
import internal from "stream";
import dayjs, { Dayjs } from "dayjs";


export type CalendarEvent = {
   start: Date
   startTime: number
   endTime: number
   title: string
   type: string
   id: string 
   index: number
   context: string 
}

export const eventForDate = (date: Date): CalendarEvent | undefined => {
    return events.find((event) =>
      dayjs(event.start).isSame(dayjs(date), "day")
    );
  };

export const events: CalendarEvent[] = [
    {
      start: dayjs("2025-01-26").startOf("day").toDate(),
      startTime: 14,
      endTime: 15,
      title: "Event 2",
      type: "1",
      id: "1",
      context: "Some context for Event 2",
      index: 1
    },
    {
      start: dayjs("2025-01-27").startOf("day").toDate(),
      startTime: 9,
      endTime: 10,
      title: "Event 3",
      type: "1",
      id: "2",
      context: "Some context for Event 3",
      index: 2
    },
    {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 10,
        endTime: 11,
        title: "Event 1",
        id: "3",
        type: "1",
        context: "Some context for Event 3",
        index: 3
      },
    {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 13.5,
        endTime: 15,
        title: "Event 2",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index: 4
      },
      {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 13,
        endTime: 14,
        title: "Event 2",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index:5
      },
      {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 13,
        endTime: 14,
        title: "Event 1",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index:6
      },
    {
        start: dayjs("2025-01-28").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 1",
        id: "2",
        type: "1",
        context: "Some context for Event 1",
        index:7
      },
      {
        start: dayjs("2025-01-28").startOf("day").toDate(),
        startTime: 14.5,
        endTime: 16.3,
        title: "Event 3",
        id: "3",
        type: "1",
        context: "Some context for Event 3",
        index:8
      },
      {
        start: dayjs("2025-01-29").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 1",
        id: "1",
        type: "1",
        context: "Some context for Event 1",
        index:9
      },
      {
        start: dayjs("2025-01-29").startOf("day").toDate(),
        startTime: 9,
        endTime: 10,
        title: "Event 1",
        id: "2",
        type: "1",
        context: "Some context for Event 1",
        index:10
      },
      {
        start: dayjs("2025-1-30").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 2",
        id: "3",
        type: "1",
        context: "Some context for Event 2",
        index:11
      },
      {
        start: dayjs("2025-01-31").startOf("day").toDate(),
        startTime: 11,
        endTime: 12,
        title: "Event 3",
        id: "2",
        type: "1",
        context: "Some context for Event 3",
        index:12
      },
      {
        start: dayjs("2025-02-01").startOf("day").toDate(),
        startTime: 9,
        endTime: 10,
        title: "Event 1",
        id: "1",
        type: "1",
        context: "Some context for Event 1",
        index:13
      },
      {
        start: dayjs("2025-02-15").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 2",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index:14
      },
];





  