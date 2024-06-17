import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PointTable.css';
import NavBar from '../NavBar/NavBar'



const PointTable = () => {


  const [points, setPoints] = useState([]);


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
            {points.map((point) => (
              <tr key={point._id}>
                <td>{point.nameOfTheMatch}</td>
                <td>{point.nameOfTheTeam}</td>
                <td>{point.wonMatches}</td>
                <td>{point.lostMatches}</td>
                <td>{point.nrr}</td>
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