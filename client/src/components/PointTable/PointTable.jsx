import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './PointTable.css';
import NavBar from '../NavBar/NavBar';
import { FaStar } from 'react-icons/fa';

const PointTable = () => {
  const [points, setPoints] = useState([]);
  const location = useLocation();

  const fetchPoints = async () => {
    const queryParams = new URLSearchParams(location.search);
    const eventName = queryParams.get('event');

    try {
      const response = await axios.get(`http://localhost:5050/api/v1/PointTableFullCode/get-pointTable?event=${eventName}`);
      setPoints(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchPoints();
  }, [location.search]);

  const renderStars = (totalMarksForEachTeam) => {
    const numStars = Math.round(Math.abs(totalMarksForEachTeam) / 250);
    const stars = [];
    for (let i = 0; i < 10; i++) {
      stars.push(
        <FaStar key={i} color={i < numStars ? 'gold' : 'gray'} />
      );
    }
    return stars;
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
                  <th>Team Name</th>
                  <th>All Marks</th>
                  <th>Runs</th>
                  <th>Won</th>
                  <th>Lost</th>
                  <th>NRR</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {points.map((point) => (
                  <tr key={point._id}>
                    <td>{point.nameOfTheTeam}</td>
                    <td>{point.totalMarksForEachTeam}</td>
                    <td>{point.totalRunsEachTeamMatches}</td>
                    <td>{point.wonMatches}</td>
                    <td>{point.lostMatches}</td>
                    <td>{point.nrr}</td>
                    <td>{renderStars(point.totalMarksForEachTeam)}</td>
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

export default PointTable;
