import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [consonants, setConsonants] = useState([]);

  useEffect(() => {
    // Fetch consonants from Django API
    axios.get('http://localhost:8000/api/consonants/')
      .then(response => {
        setConsonants(response.data);  // Store the data in state
      })
      .catch(error => {
        console.error('Error fetching consonants:', error);
      });
  }, []);  // The empty array ensures this runs only once when the component mounts

  return (
    <div className="App">
      <h1>Thai Consonants - 44</h1>
      <ol>
        {consonants.map((consonant) => (
          <li key={consonant.letter}>
            <a href={`/each_consonant/${consonant.letter}`}>
              {consonant.letter} - {consonant.thai_word} - ({consonant.rtgs}) - ({consonant.emoji})
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;


