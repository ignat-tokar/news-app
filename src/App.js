import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { getArticlesByTag, getArticlesByWord } from './api';
import './App.css';
import Economy from './components/Economy';
import MainPage from './components/MainPage';
import Media from './components/Media';
import Politics from './components/Politics';
import Sport from './components/Sport';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="Main-banner">
          <div className="Navlink-bar">
            <NavLink exact to="/">Main</NavLink>
            <NavLink to="/politics">Politics</NavLink>
            <NavLink to="/sport">Sport</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/economy">Economy</NavLink>
          </div>
          <h1>Australian debates commission could signal end of inane</h1>
          <p>It was the proposal designed to take the heat out of when and where the leaders of the two major parties would debate each other in the lead-up to the election.</p>
        </div>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/media" element={<Media />} />
          <Route path="/economy" element={<Economy />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
