import React from 'react';
import '../App.css';

function UsersPage() {
  // Fonction pour formater la date
  const getFormattedDate = () => {
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('fr-FR', options); // Formatage en français
  };

  return (
    <div className="page-container">
      <div className="page-header">
        {/* Titre de la page */}
        <h1 className="page-title">Utilisateurs</h1>

        {/* Date du jour */}
        <p className="page-date">{getFormattedDate()}</p>
      </div>
    </div>
  );
}

export default UsersPage;