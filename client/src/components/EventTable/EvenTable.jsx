import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventTable.css';
import NavBar from '../NavBar/NavBar'

const EventTable = () => {


  const [events, setEvents] = useState([]);


  useEffect(() => {


    
    const fetchEvents = async () => {

      try {
      
      // API call
        const response = await axios.get('http://localhost:5000/api/pointTable');


        setEvents(response.data); 
      } 
      
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEvents();
  }, []);

 


  const dummyEvents = [
    {
      _id: 1,
      nameOfTheEvent: 'Dummy Event 1',
      location: 'Dummy Location 1',
      eventNewDate: '2024-06-15',
      formattedTime: '10:00 AM',
    },
    {
      _id: 2,
      nameOfTheEvent: 'Dummy Event 2',
      location: 'Dummy Location 2',
      eventNewDate: '2024-06-16',
      formattedTime: '11:00 AM',
    },
    {
      _id: 3,
      nameOfTheEvent: 'Dummy Event 3',
      location: 'Dummy Location 3',
      eventNewDate: '2024-06-17',
      formattedTime: '12:00 PM',
    },
  ];

  
  const eventList = events.length > 0 ? events : dummyEvents;

  return (


    <NavBar>

    <div className="Event-table">

      <div className="table-container">

        <div className="title-container">

          <h2 className='title'>Events List</h2>
        </div>

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
            {eventList.map((event) => (
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
    </NavBar>
  );
};

export default EventTable;