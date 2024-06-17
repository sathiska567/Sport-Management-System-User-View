import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PointTable.css';
import NavBar from '../NavBar/NavBar'



const PointTable = () => {


  const [points, setPoints] = useState([]);


  useEffect(() => {


    
    const fetchPoint = async () => {

      try {
      
      // API call
        const response = await axios.get('http://localhost:5000/api/pointTable');


        setPoints(response.data); 
      } 
      
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPoint();
  }, []);

 


  const dummyPoints = [
    
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
      _id: 4,
      nameOfTheEvent: 'Event 4',
      nameOfTheTeam: 'Dummy Team 3',
      location: '10',
      eventNewDate: '2',
      formattedTime: '+3.23232',
    },
    {
      _id: 5,
      nameOfTheEvent: 'Event 5',
      nameOfTheTeam: 'Dummy Team 5',
      location: '2',
      eventNewDate: '0',
      formattedTime: '+1.2334',
    },
  ];

  
  const pointList = points.length > 0 ? points : dummyPoints;

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
            {pointList.map((point) => (
              <tr key={point._id}>
                <td>{point.nameOfTheEvent}</td>
                <td>{point.nameOfTheTeam}</td>
                <td>{point.location}</td>
                <td>{point.eventNewDate}</td>
                <td>{point.formattedTime}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
    </NavBar>
  );
};

export default PointTable;