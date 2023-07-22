import React, { useEffect, useState } from "react";
import axios from "axios";

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get(
          "http://20.244.56.144:80/train/trains"
        );
        setTrains(response.data);
      } catch (error) {
        console.error("Error fetching trains:", error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>All Trains</h2>

      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            <h3>{train.trainName}</h3>
            <p>Train Number: {train.trainNumber}</p>
            {/* Display other train details */}
            {/* ... */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTrains;
