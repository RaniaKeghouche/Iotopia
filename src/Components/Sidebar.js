import React, { useState } from 'react';
import '../App.css';
import { Sidebardata } from './Sidebardata';
import { useNavigate } from 'react-router-dom'; // Hook pour la navigation

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null); // État pour suivre l'élément actif
  const navigate = useNavigate(); // Permet de naviguer entre les routes

  return (
    <div className="Sidebar">
      {/* Section du haut : Logo */}
      <div className="sidebar-top">
        <div className="logo-container">
          <img
            src={Sidebardata[0].icon} // Utilise l'icône du premier élément (le logo)
            alt="Logo"
            className="icon-logo" // Classe spécifique pour le logo
          />
        </div>
      </div>

      {/* Section milieu : Photo de profil et nom de l'utilisateur */}
      <div className="profile-section">
        <div className="profile-container">
          <img
            src="https://via.placeholder.com/50" // Remplacez par l'URL de la photo de profil
            alt="Admin Profile"
            className="profile-picture"
          />
          <div className="profile-name">Admin</div>
        </div>
      </div>

      {/* Section basse : Liens de navigation */}
      <ul className="sidebar-links">
        {Sidebardata.slice(1).map((val, key) => { // Ignore le premier élément (le logo)
          return (
            <li
              key={key}
              onClick={() => {
                navigate(val.link); // Navigue vers la route spécifiée
                setActiveItem(val.title); // Met à jour l'élément actif
              }}
              className={activeItem === val.title ? 'active' : ''} // Ajoute la classe .active
              style={{
                backgroundColor: activeItem === val.title ? '#ffffff33' : 'transparent',
              }}
            >
              {/* Icône */}
              <img
                src={val.icon} // Charge l'image
                alt={val.title}
                style={{
                  filter: activeItem === val.title ? 'invert(0%)' : 'none',
                }}
              />
              {/* Texte */}
              <div
                className={val.titleClass}
                style={{
                  color: activeItem === val.title ? '#ffffff' : '#cccccc',
                }}
              >
                {val.title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;