import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventTable.css';
import NavBar from '../NavBar/NavBar';

const EventTable = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // API call to your back-end
        const response = await axios.get('http://localhost:5050/api/v1/GetAllEvents/get-all-events');
        setEvents(response.data.data); // Ensure you access the correct data structure
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEvents();
  }, []);

  

  return (
    <NavBar>
      <div className="Event-table">
        <div className="table-container">
          <div className="title-container">
            <h2 className='title'>Events List</h2>
          </div>
          <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Location</th>
                <th>Event Date</th>
                <th>Event Time</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td>{event.nameOfTheEvent}</td>
                  <td>{event.location}</td>
                  <td>{event.eventNewDate}</td>
                  <td>{event.formattedTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default EventTable;