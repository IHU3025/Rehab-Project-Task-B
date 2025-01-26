import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { CalendarEvent } from "./events";
import styles from './todaystyle';

interface TodayEventsProps {
  events: CalendarEvent[];
}

interface Weather {
  temperature_2m_max: number;
  temperature_2m_min: number;
}

const TodayEvents: React.FC<TodayEventsProps> = ({ events }) => {
  const today = dayjs().startOf('day');
  const todayEvents = events.filter(event => dayjs(event.start).isSame(today, 'day'));

  // State for weather data
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    // Fetch weather data from API
    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.877266&longitude=-122.27561&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles&forecast_days=1');
        const data = await response.json();
        setWeather({
          temperature_2m_max: data.daily.temperature_2m_max[0],
          temperature_2m_min: data.daily.temperature_2m_min[0]
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
        <h3 style = {{fontSize: "15px"}}>Today Schedule</h3>
        {weather && (
          <div style={styles.weatherWidget}>
            <p style={styles.weatherP}> {Math.round(weather.temperature_2m_max * 9/5 + 32)}°/</p>
            <p style={styles.weatherP}> {Math.round(weather.temperature_2m_min * 9/5 + 32)}°F</p>
          </div>
        )}
      </div>
      <ul style={styles.eventsList}>
        {todayEvents.map(event => (
          <li
            key={event.index}
            style={styles.eventItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e0f7fa';
              const details = e.currentTarget.querySelector('.event-details') as HTMLElement;
              if (details) {
                details.style.maxHeight = '200px';
                details.style.opacity = '1';
              }
              const bullet = e.currentTarget.querySelector('.bullet-point') as HTMLElement;
              if (bullet) {
                bullet.style.transform = 'scale(1.5)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              const details = e.currentTarget.querySelector('.event-details') as HTMLElement;
              if (details) {
                details.style.maxHeight = '20px';
                details.style.opacity = '0.5';
              }
              const bullet = e.currentTarget.querySelector('.bullet-point') as HTMLElement;
              if (bullet) {
                bullet.style.transform = 'scale(1)';
              }
            }}
          >
            <div
              style={styles.bulletPoint}
              className="bullet-point"
            ></div>
            <div
              className="event-details"
            >
              <h4 style={styles.eventDetailsH4}>{event.title}</h4>
              <p style={styles.eventDetailsP}>{event.context}</p>
              <p style={styles.eventDetailsP}>{event.startTime}:00 - {event.endTime}:00</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayEvents;
