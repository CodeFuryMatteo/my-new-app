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
          src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/277558113_7515787655128652_5201444091230306051_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7lTN0tiBqrkQ7kNvgGVT1y9&_nc_oc=Adg5FogWDCYA8-qysxn-Q0S8CzTvHE_i8kw_1MdmHHjgHiU3D2Q4tu3qDZsqIcBmK1qTJMFMQwFPEgXdIYwYNGkt&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ALyIQszIa4bsfVo2ZvDF7qZ&oh=00_AYDjp2Ea3pva31YZ24AlfOJDeit5M0DTFg7d6Rdtw3mtuA&oe=67C7C9AA" 
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




