import React from "react";
import { CalendarEvent } from "./events";
import { styled } from "@stitches/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCalendarDays, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const HOUR_BOX_HEIGHT = 55; // Height for hour
const EVENT_PADDING = 4; 


const formatHour = (hour: number) => {
  const minutes = (hour % 1) * 60
  const hours = Math.floor(hour);
  
  const formattedHours = hours % 12
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const period = hours < 12 ? 'AM' : 'PM';
  return `${formattedHours}:${formattedMinutes} ${period}`;
};

const iconMap: { [key: string]: IconDefinition } = {
  "1": faVideo,
  "2": faCalendarDays,
}



export const EventBox = styled("div", {
  position: "absolute",
  top: "0", 
  height: "0",  
  left: "0",  
  width: "0",  
  backgroundColor: "rgba(146, 79, 255, 0.17)",
  backgroundImage: 'linear-gradient(to right, rgb(169, 93, 245) 3px, transparent 1px)',
  color: "rgba(130, 84, 202, 0.99)",
  borderRadius: "2px",
  padding: "2px",
  paddingRight: "0",
  fontSize: "12px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  zIndex: 10,
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
  const eventIcon = iconMap[event.id];

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
      <div style = {{paddingLeft: "15px",
                     paddingTop: "5px",
                     }}>
        <div style = {{
          display: 'flex',
          }}>
          <b>{formatHour(event.startTime)}</b>
          <FontAwesomeIcon icon = {eventIcon} style = {{paddingLeft: "10px"}}/>
        </div>
        <div style={{
            overflow: 'hidden',
            whiteSpace: 'normal',
            paddingRight: '4px',
            lineHeight: '1.2',
          }}><b>{event.context}</b></div>
    
      </div>
    </EventBox>
  );
};

//two event 13-15 pm on Jan 27th had some problem when re-rendering


export default EventRenderer;
