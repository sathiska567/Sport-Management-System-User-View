import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PointTable.css';

const PointTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pointTable');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="point-table">
      <h1 className="title">Cricket Point Table</h1>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.won}</td>
              <td>{team.lost}</td>
              <td>{team.nrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointTable;
