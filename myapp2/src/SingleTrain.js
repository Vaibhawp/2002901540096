import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleTrain = ({ trainNumber }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Make API call to get details of a particular train
    const fetchSingleTrain = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144/train/trains/${trainNumber}`
        );
        setTrain(response.data);
      } catch (error) {
        console.error("Error fetching single train:", error);
      }
    };

    fetchSingleTrain();
  }, [trainNumber]);

  return (
    <div>
      {train ? (
        <div>
          <h2>{train.trainName}</h2>
          <p>Train Number: {train.trainNumber}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;
