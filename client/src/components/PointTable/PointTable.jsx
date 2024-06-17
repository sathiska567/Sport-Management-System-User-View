import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PointTable.css';
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
      nameOfTheEvent: 'Event 1',
      nameOfTheTeam: 'Dummy Team 1',
      location: '2',
      eventNewDate: '0',
      formattedTime: '+1.2334',
    },
    {
      _id: 2,
      nameOfTheEvent: 'Event 2',
      nameOfTheTeam: 'Dummy Team 2',
      location: '4',
      eventNewDate: '1',
      formattedTime: '-1.03224',
    },
    {
      _id: 3,
      nameOfTheEvent: 'Event 3',
      nameOfTheTeam: 'Dummy Team 3',
      location: '10',
      eventNewDate: '2',
      formattedTime: '+3.23232',
    },
    {
      _id: 3,
      nameOfTheEvent: 'Event 4',
      nameOfTheTeam: 'Dummy Team 3',
      location: '10',
      eventNewDate: '2',
      formattedTime: '+3.23232',
    },
  ];

  
  const eventList = events.length > 0 ? events : dummyEvents;

  return (


    <NavBar>

    <div className="Event-table">

      <div className="table-container">

        <div className="title-container">

          <h2 className='title'>Point Table</h2>
        </div>

        <table>

          <thead>
            <tr>
              <th>Event Name</th>
              <th>Team Name</th>
              <th>Won</th>
              <th>Lost</th>
              <th>NRR</th>
            </tr>
          </thead>


          <tbody>
            {eventList.map((event) => (
              <tr key={event._id}>
                <td>{event.nameOfTheEvent}</td>
                <td>{event.nameOfTheTeam}</td>
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