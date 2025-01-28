import dayjs, { Dayjs } from "dayjs";

export type Participant = {
    id: number;
    avatar: string;
  };

export type CalendarEvent = {
   start: Date;
   startTime: number;
   endTime: number;
   title: string;
   type: string;
   id: string;
   index: number;
   context: string;
   participants: Participant[];
   meetingLink: string;
};

export const eventForDate = (date: Date): CalendarEvent | undefined => {
    return events.find((event) =>
      dayjs(event.start).isSame(dayjs(date), "day")
    );
  };



//sample data for participant and calendarevent
const participant_example: Participant [] = [
    { id: 1, avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
    { id: 2, avatar: "https://randomuser.me/api/portraits/men/7.jpg" },
    { id: 3, avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 4, avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5, avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 6, avatar: "https://randomuser.me/api/portraits/women/5.jpg" },
    { id: 7, avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
  ];

export const events: CalendarEvent[] = [
    {
      start: dayjs("2025-01-26").startOf("day").toDate(),
      startTime: 14,
      endTime: 15,
      title: "Patient Meeting",
      type: "1",
      id: "1",
      context: "Chat with patient Group D",
      index: 1,
      participants: participant_example,
      meetingLink: "https://zoom.us/j/123456789",
    },

    {
      start: dayjs("2025-01-27").startOf("day").toDate(),
      startTime: 9,
      endTime: 10,
      title: "Patient Meeting",
      type: "1",
      id: "2",
      context: "Chat with patient Group D",
      index: 2,
      participants: participant_example,
      meetingLink: "https://zoom.us/j/123456789"
    },
    {
        start: dayjs("2025-01-26").startOf("day").toDate(),
        startTime: 24,
        endTime: 24,
        title: "Patient Meeting",
        type: "1",
        id: "2",
        context: "Chat with patient Group D",
        index: 17,
        participants: participant_example,
      meetingLink: "https://zoom.us/j/123456789"
      },
    {
        start: dayjs("2025-01-26").startOf("day").toDate(),
        startTime: 24,
        endTime: 24,
        title: "Patient Meeting",
        type: "1",
        id: "2",
        context: "Chat with patient Group D",
        index: 18,
        participants: participant_example,
      meetingLink: "https://zoom.us/j/123456789"
    },
    {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 10,
        endTime: 11,
        title: "Event 1",
        id: "3",
        type: "1",
        context: "Some context for Event 3",
        index: 3,
        participants: participant_example,
      meetingLink: "https://zoom.us/j/123456789"
      },
    {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 13.5,
        endTime: 15,
        title: "Patient Meeting",
        id: "1",
        type: "1",
        context: "Chat with patient Group",
        index: 4,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 13,
        endTime: 14,
        title: "Patient Meeting",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index:5,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-27").startOf("day").toDate(),
        startTime: 13,
        endTime: 14,
        title: "Event 1",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index:6,
        participants: participant_example,
        meetingLink: ""
      },
    {
        start: dayjs("2025-01-28").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Patient Meeting",
        id: "2",
        type: "1",
        context: "Some context for Event 1",
        index:7,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-28").startOf("day").toDate(),
        startTime: 14.5,
        endTime: 16.3,
        title: "Event 3",
        id: "3",
        type: "1",
        context: "Some context for Event 3",
        index:8,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-29").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 1",
        id: "1",
        type: "1",
        context: "Some context for Event 1",
        index:9,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-29").startOf("day").toDate(),
        startTime: 9,
        endTime: 10,
        title: "Event 1",
        id: "2",
        type: "1",
        context: "Some context for Event 1",
        index:10,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-1-30").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 2",
        id: "3",
        type: "1",
        context: "Some context for Event 2",
        index:11,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-31").startOf("day").toDate(),
        startTime: 11,
        endTime: 12,
        title: "Event 3",
        id: "2",
        type: "1",
        context: "Some context for Event 3",
        index:12,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-02-01").startOf("day").toDate(),
        startTime: 9,
        endTime: 10,
        title: "Event 1",
        id: "1",
        type: "1",
        context: "Some context for Event 1",
        index:13,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-02-15").startOf("day").toDate(),
        startTime: 14,
        endTime: 15,
        title: "Event 2",
        id: "1",
        type: "1",
        context: "Some context for Event 2",
        index:14,
        participants: participant_example,
        meetingLink: ""
      },
      {
        start: dayjs("2025-01-26").startOf("day").toDate(),
        startTime: 9,
        endTime: 10,
        title: "Event 3",
        type: "1",
        id: "2",
        context: "Some context for Event 3",
        index: 15,
        participants: participant_example,
        meetingLink: ""
      },
    {
        start: dayjs("2025-01-26").startOf("day").toDate(),
        startTime: 9,
        endTime: 10,
        title: "Event 3",
        type: "1",
        id: "2",
        context: "Some context for Event 3",
        index: 16,
        participants: participant_example,
        meetingLink: ""
    },  
];





  