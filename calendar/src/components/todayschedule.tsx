import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { CalendarEvent } from "./events";
import styles from './todaystyle';

interface TodayEventsProps {
  events: CalendarEvent[];
}

interface Weather {
    temp_max: number;
    temp_min: number;
    temp_icon: string;
}

const OPENWEATHER = 'https://api.openweathermap.org/data/2.5/weather?lat=37&lon=-122&appid=dc165062c6a2a7c1bef1706208ecd3ec'

const formatHour = (hour: number) => {
  const minutes = (hour % 1) * 60;
  const hours = Math.floor(hour);
  
  const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const period = hours < 12 ? 'AM' : 'PM';
  return `${formattedHours}:${formattedMinutes} ${period}`;
};

const TodayEvents: React.FC<TodayEventsProps> = ({ events }) => {
  const today = dayjs().startOf('day');
  const now = dayjs();

  // Filter events for today that have a start time greater than or equal to the current time
  const todayEvents = events
    .filter(event => 
      dayjs(event.start).isSame(today, 'day') && event.startTime >= now.hour() + now.minute() / 60
    )
    .sort((a, b) => a.startTime - b.startTime);

  // Identify the topmost (earliest upcoming) event
  const topEvent = todayEvents.length > 0 ? todayEvents[0] : null;

  // State for weather data
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    // Weather API call
    const fetchWeather = async () => {
      try {
        const response = await fetch(OPENWEATHER);
        const data = await response.json();
        setWeather({
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
          temp_icon: data.weather[0].icon,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div style={styles.todaySchedule}>
      <div style={styles.header}>
        <h3 style={{ fontSize: "15px" }}>Today Schedule</h3>
        {weather && (
          <div style={styles.weatherWidget}>
            <p style={{ fontSize: '15px', fontWeight: 'bold' }}>
              {Math.round((weather.temp_max - 273.15) * 9/5 + 32)}°/
            </p>
            <p style={{ fontSize: "14px" }}>
              {Math.round((weather.temp_min - 273.15)* 9/5 + 32)}°
            </p>
              <img src ={`https://openweathermap.org/img/wn/${weather.temp_icon}.png`} alt="Weather Icon"/>  
          </div>
        )}
      </div>
      <ul style={styles.eventsList}>
        {todayEvents.map(event => (
          <li
            key={event.index}
            style={styles.eventItem}
            onMouseEnter={(e) => {
              //e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
              const details = e.currentTarget.querySelector('.event-details') as HTMLElement;
              if (details) {
                details.style.maxHeight = '100px';
                details.style.opacity = '1';
                details.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
                details.style.paddingBottom = '50px';
                details.style.padding = '20px';
                details.style.borderRadius = '8px';

              }
              const bullet = e.currentTarget.querySelector('.bullet-point') as HTMLElement;
              if (bullet) {
                bullet.style.transform = 'scale(1.5)';
              }
              const h4 = e.currentTarget.querySelector('.event-details h4') as HTMLElement;
              if (h4) {
                h4.style.fontSize = '15px';
              }
              
              // Add participants and meeting button dynamically
              const participantsRow = document.createElement('div');
              participantsRow.className = 'participants-row';
              participantsRow.style.display = 'flex';
              participantsRow.style.justifyContent = 'space-between';
              participantsRow.style.alignItems = 'center';
              participantsRow.style.marginTop = '10px';

              // Add participant avatars
              const avatarStack = document.createElement('div');
              avatarStack.className = 'avatar-stack';
              avatarStack.style.display = 'flex';
              avatarStack.style.position = 'relative';

              event.participants.slice(0, 4).forEach((participant, index) => {
                const avatar = document.createElement('img');
                avatar.src = participant.avatar;
                avatar.style.width = '30px';
                avatar.style.height = '30px';
                avatar.style.borderRadius = '50%';
                avatar.style.position = 'absolute';
                avatar.style.left = `${index * 20}px`;
                avatar.style.zIndex = (event.participants.length - index).toString();
                avatarStack.appendChild(avatar);
              });


              // Add virtual meeting button
              const meetingButton = document.createElement('button');
              meetingButton.textContent = '▷';
              meetingButton.style.color = 'white';
              meetingButton.style.padding = '5px 8px';
              meetingButton.style.marginTop = '25px';
              meetingButton.style.fontSize = '16px';
              meetingButton.style.borderRadius = '10px';
              meetingButton.style.backgroundColor= 'black';
              meetingButton.style.cursor = 'pointer';
              meetingButton.onclick = () => window.open(event.meetingLink, '_blank');

              participantsRow.appendChild(avatarStack);
              participantsRow.appendChild(meetingButton);

              details.appendChild(participantsRow);
          

            }}
            onMouseLeave={(e) => {
              const details = e.currentTarget.querySelector('.event-details') as HTMLElement;
              if (details) {
                details.style.maxHeight = '20px';
                details.style.backgroundColor = 'transparent';
                details.style.padding = '5px';
                details.style.display = 'flex';
                details.style.flexDirection= 'column';
                details.style.paddingBottom = '0px';

              }
              const participantsRow = details.querySelector('.participants-row');
              if (participantsRow) {
                    details.removeChild(participantsRow);
               }
              const bullet = e.currentTarget.querySelector('.bullet-point') as HTMLElement;
              if (bullet) {
                bullet.style.transform = 'scale(1)';
              }
              const h4 = e.currentTarget.querySelector('.event-details h4') as HTMLElement;
              if (h4) {
                h4.style.fontSize = '13px';
              }
              
            }}
          >
            <div style={styles.bulletPointContainer}>
              <div
                style={styles.bulletPoint}
                className="bullet-point"
              ></div>
            </div>
            <div
              className="event-details"
            >
              <div style = {styles.eventDetailsTitleTime}>
                <h4 style={styles.eventDetailsH4}>{event.title}</h4>
                <p style={{...styles.eventDetailsP,
                      float: "right",}}>{formatHour(event.startTime)}</p>
              </div>
              <p style={styles.eventDetailsP}>{event.context}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayEvents;
