import React from "react";
import { CalendarEvent } from "./events";
import { styled } from "@stitches/react";


const HOUR_BOX_HEIGHT = 55; // Height for hour
const EVENT_PADDING = 4; // Small padding for spacing

export const EventBox = styled("div", {
  position: "absolute",
  top: "0", 
  height: "0",  
  left: "0",  
  width: "0",  
  backgroundColor: "rgba(146, 79, 255, 0.17)",
  backgroundImage: 'linear-gradient(to right, rgb(169, 93, 245) 3px, transparent 1px)',
  color: "rgba(96, 21, 217, 0.99)",
  borderRadius: "2px",
  padding: "2px",
  paddingRight: "0",
  fontSize: "12px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});



const getEventPosition = (event: CalendarEvent) => {
  const startHour = event.startTime;
  const endHour = event.endTime;
  const top = (startHour - 6) * HOUR_BOX_HEIGHT; 
  const height = (endHour - startHour) * HOUR_BOX_HEIGHT - EVENT_PADDING;

  return { top, height };
};

const OverlapCheck = (event1: CalendarEvent, event2: CalendarEvent): boolean => {
  return (
    event1.startTime < event2.endTime && event1.endTime > event2.startTime
  );
};


type EventRendererProps = {
  event: CalendarEvent;  
  events: CalendarEvent[];  
  columnIndex: number;
  eventIndex: number;
};

const getEventStyles = (id: string) => {
  switch (id) {
    case "1":
      return {
        backgroundColor: "rgba(85, 178, 255, 0.17)",
        backgroundImage: 'linear-gradient(to right, rgb(54, 151, 230) 3px, transparent 1px)',
        color: "rgb(54, 151, 230)",
      };
    case "2":
      return {
        backgroundColor: "rgba(44, 233, 208, 0.26)",
        backgroundImage: 'linear-gradient(to right, rgb(77, 191, 126) 3px, transparent 1px)',
        color: "rgb(77, 191, 126)",
      };
    default:
      return {}; 
  }
};

const EventRenderer: React.FC<EventRendererProps>  = ({ event, events }) => {
  const { top, height } = getEventPosition(event);

  // Get all events that overlap with the current event
  const overlappingEvents = events.filter(e => OverlapCheck(e, event));
  const totalOverlapping = overlappingEvents.length;

  // find width base on the number of overlapping events
  const width = totalOverlapping > 1 ? 100 / totalOverlapping : 100;

  // Get index of current event in the overlapping events list
  const eventIndex = overlappingEvents.findIndex(e => e.id === event.id && e.startTime 
    === event.startTime && e.endTime === event.endTime && e.index == event.index);

  // find left positioning based on index
  const left = eventIndex * width;

  return (
    <EventBox
      key={event.id}
      css={{
        ...getEventStyles(event.id),
        top: `${top}px`,
        height: `${height}px`,
        left: `${left}%`,
        width: `${width}%`,
      }}
    >
      {event.title}
    </EventBox>
  );
};

//still some problem with the renderer, if 2 event has the same id (>= 3 event), 
//they rendered as overlapped instead of side by side 


export default EventRenderer;
