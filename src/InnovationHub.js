// src/InnovationHub.js
import React, { useState } from 'react';

function InnovationHub() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', description: '', imageUrl: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProject.title && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ title: '', description: '', imageUrl: '' });
    }
  };

  return (
    <div className="innovation-hub">
      <h2>Pôle d'innovation étudiant</h2>
      <div className="add-project-form">
        <h3>Ajouter un projet</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={newProject.title}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={newProject.description}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (optional)"
            value={newProject.imageUrl}
            onChange={handleInputChange}
          />
          <button type="submit">ajouter un projet</button>
        </form>
      </div>
      <div className="projects-list">
        <h3>Projet</h3>
        {projects.length === 0 ? (
          <p>Aucun projet ajouté pour le moment. Soyez le premier à partager votre innovation !</p>
        ) : (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.imageUrl && (
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default InnovationHub;