import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConsonants } from '../../actions/consonant.action';

const Home = () => {
  const dispatch = useDispatch();
  const consonants = useSelector((state) => state.consonants.consonants);

  useEffect(() => {
    dispatch(fetchConsonants());
  }, [dispatch]);

  // Check if consonants is an array and render only if true
  if (!Array.isArray(consonants)) {
    return <div>Loading...</div>;  // Handle loading state or error gracefully
  }

  return (
    <div>
      <h1>Thai Consonants - 44</h1>
      <ol>
        {consonants.map((consonant) => (
          <li key={consonant.letter}>
            <a href={`/each_consonant/${consonant.letter}`}>
              {consonant.letter} - {consonant.thai_word} - ({consonant.rtgs}) - {consonant.emoji}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
