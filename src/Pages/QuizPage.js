import React from 'react';
import '../Pages/QuizPage.css';
import ajouter from '../images/ajouter.png';

function QuizPage() {
  const getFormattedDate = () => {
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Quiz</h1>
        <p className="page-date">{getFormattedDate()}</p>
      </div>

      <div className="new-quiz-section">
        <div className="title-container">
          <img 
            src={ajouter} 
            alt="Icône ajouter" 
            className="quiz-add-icon"
          />
          <h2 className="new-quiz-title">Ajouter un nouveau quiz</h2>
          <button className="add-quiz-button">Ajouter le quiz</button>
        </div>
        
        <div className="quiz-rectangles-container">
          <div className="quiz-rectangle left-rectangle">
  <div className="quiz-info">
    <p>Section</p>
    <p>Niveau</p>
    <p>Numéro du quiz</p>
    <p>Nom du quiz</p>
    <p>Type de réponse</p>
    <p>Réponse</p>
  </div>
</div>
          <div className="quiz-rectangle right-rectangle">
            {/* Contenu du rectangle droit */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
