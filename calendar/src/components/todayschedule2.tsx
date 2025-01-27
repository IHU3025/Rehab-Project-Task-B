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
        {todayEvents.map((event) => {
          const isTopEvent = event === topEvent;

          return (
            <li
              key={event.index}
              style={{
                ...styles.eventItem,

              }}
            >
              <div
                style={{
                  ...styles.bulletPointContainer,
                }}
              >
                <div style={{...styles.bulletPoint, ...(isTopEvent && { transform: 'scale(1.8)' })}}
                 className="bullet-point"></div>
              </div>
              <div style = {{...(isTopEvent && 
                { backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  padding: '12px',
                  borderRadius: '17px',
                  paddingBottom: '15px',
                  margin: 0,

                }),
                }}>
                <div style={{...styles.eventDetailsTitleTime,
                            ...(isTopEvent && { gap: '10px' })
                }}>        

                  <h4
                    style={{
                      ...styles.eventDetailsH4,
                      ...(isTopEvent && { fontSize: '15px' }),
                    }}
                  >
                    {event.title}
                  </h4>
                  <p style={styles.eventDetailsP}>{formatHour(event.startTime)}</p>
                </div>
                <p style={styles.eventDetailsP}>{event.context}</p>
            

                {isTopEvent && (
                <div style={styles.participantsRow}>


                  {/* Participant Avatars */}
                  <div style={styles.avatarStack}>
                    {event.participants.slice(0, 4).map((participant, index) => (
                      <img
                        key={participant.id}
                        src={participant.avatar}
                        style={{
                          ...styles.avatar,
                          left: `${index * 20}px`, // Slight horizontal overlap
                          zIndex: event.participants.length - index, // Ensure stacking order
                        }}
                      />
                    ))}
                    {/* Show "+X" if more participants exist */}
                    {event.participants.length > 4 && (
                      <div style={styles.extraParticipants}>
                        +{event.participants.length - 4}
                      </div>
                    )}
                  </div>

                  {/* Virtual Meeting Button */}
                  <button style={styles.meetingButton} onClick={() => window.open(event.meetingLink, '_blank')}>
                    ▷
                  </button>
                </div>
                )}
              
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodayEvents;
