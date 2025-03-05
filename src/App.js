// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import InnovationHub from './InnovationHub';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="header-title">St. Nicholas International College</h1>
          <h2 className="header-subtitle">Le Cœur du Savoir</h2>
          <p>
            Bienvenue à St. Nicholas International College, où la connaissance et 
            l'excellence se rencontrent.
          </p>
          <Link to="/innovation-hub">
            <button className="innovation-hub-button">Pôle d'innovation étudiant</button>
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/innovation-hub" element={<InnovationHub />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="content-container">
      <div className="text-frame">
        <img 
          className="paragraph-image" 
          src="/images/logo.jpg"
          alt="St. Nicholas College" 
        />
        <p className="text-content">
          Saint Nicholas International College, fondé en juin 2003, est une école bien équilibrée, forte en études et en sport. Ces dernières années, nos élèves ont eu de très bons résultats aux O-Levels et en compétitions sportives. Nous apprenons, grandissons et brillons ensemble. Comme le dit notre devise : “The learned shine like stars,” ce qui signifie “Les savants brillent comme des étoiles”.
        </p>
      </div>
    </div>
  );
}

export default App;




