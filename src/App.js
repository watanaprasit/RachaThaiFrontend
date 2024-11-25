import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.jsx';

function App() {

  return (
   <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
   </Router>
  );
}

export default App;


