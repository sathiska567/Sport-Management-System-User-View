import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EventList.css';
import NavBar from '../NavBar/NavBar';

const EventList = () => {
  const [points, setPoints] = useState([]);
  const navigate = useNavigate();

  const fetchPoints = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/v1/PointTableFullCode/get-pointTable');
      setPoints(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  const handleSeeTeams = (eventName) => {
    navigate(`/point-table?event=${eventName}`);
  };

  // Function to get unique event names
  const getUniqueEventNames = () => {
    const uniqueEvents = [];
    points.forEach((point) => {
      if (!uniqueEvents.includes(point.nameOfTheMatch)) {
        uniqueEvents.push(point.nameOfTheMatch);
      }
    });
    return uniqueEvents;
  };

  return (
    <NavBar>
      <div className="Event-table">
        <div className="table-container">
          <div className="title-container">
            <h2 className='title'>Point Table</h2>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Event List</th>
                  <th>See Teams</th>
                </tr>
              </thead>
              <tbody>
                {getUniqueEventNames().map((eventName) => {
                  // Find the first point with this event name
                  const point = points.find((p) => p.nameOfTheMatch === eventName);
                  return (
                    <tr key={point._id}>
                      <td>{eventName}</td>
                      <td>
                        <button
                          className="button-see-teams"
                          onClick={() => handleSeeTeams(eventName)}
                        >
                          Teams
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

export default EventList;
