
import React, { useState } from "react";
import axios from "axios";

const NumberManagement = () => {
  const [numbers, setNumbers] = useState([]);

  const handleFetchNumbers = async () => {
    const urls = [
      "http://20.244.56.144/numbers/primes",
      "http://20.244.56.144/numbers/fibo",
      "http://20.244.56.144/numbers/odd",
    ];

    try {
      const responses = await Promise.all(
        urls.map((url) => axios.get(`http://localhost:8008/numbers?url=${url}`))
      );

      const mergedNumbers = responses
        .map((response) => response.data.numbers)
        .flat();

      const uniqueNumbers = Array.from(new Set(mergedNumbers)).sort(
        (a, b) => a - b
      );
      setNumbers(uniqueNumbers);
    } catch (error) {
      console.error("Error fetching numbers:", error);
    }
  };

  return (
    <div>
      <button onClick={handleFetchNumbers}>Fetch Numbers</button>
      <div>
        <h2>Merged Unique Integers:</h2>
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumberManagement;
