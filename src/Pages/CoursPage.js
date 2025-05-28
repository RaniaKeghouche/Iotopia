import React, { useState } from "react";
import "../App.css";
import "./CoursPage.css";

// SVG Icons as components for better quality
const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const PenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

function CoursPage() {
  // State for new course - initialize with empty values
  const [newCourse, setNewCourse] = useState({
    name: "",
    link: "",
    description: "",
  });

  // Handler for adding a new course
  const handleAddCourse = () => {
    console.log("Adding course:", newCourse);
    // Add API call or state update logic here
  };

  // Add state for course to delete - initialize with empty values
  const [courseToDelete, setCourseToDelete] = useState({
    name: "",
    link: "",
    description: "",
  });

  // Handler for deleting a course
  const handleDeleteCourse = () => {
    console.log("Deleting course:", courseToDelete);
    // Add API call or state update logic here
  };

  // Add state for course to modify
  const [courseToModify, setCourseToModify] = useState({
    name: "",
    link: "",
    description: "",
  });

  // Handler for modifying a course
  const handleModifyCourse = () => {
    console.log("Modifying course:", courseToModify);
    // Add API call or state update logic here
  };

  // Generate random IoT elements for background with enhanced animations
  const renderIoTElements = () => {
    const elements = [];

    // Create interactive network nodes
    for (let i = 0; i < 7; i++) {
      const size = Math.floor(Math.random() * 80) + 40;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 20) + 10;
      elements.push(
        <div
          key={`circle-${i}`}
          className="iot-element iot-circle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `float ${duration}s infinite ease-in-out ${
              i * 2
            }s, pulse-border 4s infinite ease-in-out ${i}s`,
          }}
        />
      );

      // Add inner circle for nodes
      elements.push(
        <div
          key={`inner-circle-${i}`}
          className="iot-element iot-inner-circle"
          style={{
            width: `${size * 0.5}px`,
            height: `${size * 0.5}px`,
            top: `calc(${top}% + ${size * 0.25}px)`,
            left: `calc(${left}% + ${size * 0.25}px)`,
            animation: `spin ${
              Math.floor(Math.random() * 20) + 10
            }s infinite linear ${i}s`,
          }}
        />
      );
    }

    // Create data transmission dots
    for (let i = 0; i < 15; i++) {
      const size = Math.floor(Math.random() * 4) + 2;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 30) + 15;
      elements.push(
        <div
          key={`dot-${i}`}
          className="iot-element iot-dot"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `float ${duration}s infinite ease-in-out ${
              i * 1.5
            }s, data-transmit 7s infinite ease-in-out ${i * 0.5}s`,
          }}
        />
      );
    }

    // Create sensor pulse animations
    for (let i = 0; i < 5; i++) {
      const size = Math.floor(Math.random() * 100) + 50;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      elements.push(
        <div
          key={`pulse-${i}`}
          className="iot-element iot-pulse"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${i * 2}s`,
          }}
        />
      );
    }

    // Create network connection lines
    for (let i = 0; i < 8; i++) {
      const width = Math.floor(Math.random() * 150) + 100;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const rotate = Math.floor(Math.random() * 180);
      const duration = Math.floor(Math.random() * 25) + 15;
      elements.push(
        <div
          key={`line-${i}`}
          className="iot-element iot-line"
          style={{
            width: `${width}px`,
            top: `${top}%`,
            left: `${left}%`,
            transform: `rotate(${rotate}deg)`,
            animation: `float ${duration}s infinite ease-in-out ${
              i * 1.2
            }s, line-pulse 3s infinite ease-in-out ${i * 0.7}s`,
          }}
        />
      );
    }

    // Add data flow animations along lines
    for (let i = 0; i < 10; i++) {
      const size = 6;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const distance = Math.floor(Math.random() * 200) + 50;
      const angle = Math.floor(Math.random() * 360);
      const duration = Math.floor(Math.random() * 8) + 5;

      elements.push(
        <div
          key={`data-flow-${i}`}
          className="iot-element iot-data-packet"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `data-flow ${duration}s infinite linear ${i * 0.5}s`,
          }}
          data-angle={`${angle}deg`}
          data-distance={distance}
        />
      );
    }

    // Create cloud computing symbols
    for (let i = 0; i < 3; i++) {
      const size = Math.floor(Math.random() * 40) + 60;
      const top = Math.floor(Math.random() * 70) + 10;
      const left = Math.floor(Math.random() * 70) + 10;

      elements.push(
        <div
          key={`cloud-${i}`}
          className="iot-element iot-cloud"
          style={{
            width: `${size}px`,
            height: `${size * 0.6}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `float ${
              Math.floor(Math.random() * 20) + 30
            }s infinite ease-in-out ${
              i * 3
            }s, cloud-pulse 8s infinite ease-in-out ${i * 2}s`,
          }}
        />
      );
    }

    return elements;
  };

  return (
    <div className="course-page">
      {/* IoT Background Elements */}
      <div className="iot-background">{renderIoTElements()}</div>

      {/* Page Content */}
      {/* Add Course Section */}
      <div className="course-header">
        <div className="header-left">
          <div className="icon-circle">
            <PlusIcon />
          </div>
          <h2>Ajouter un nouveau cours</h2>
        </div>
        <button className="add-button" onClick={handleAddCourse}>
          <span className="check-icon">
            <CheckIcon />
          </span>{" "}
          Ajouter cour
        </button>
      </div>

      <div className="form-container">
        {/* Left Column - Form Inputs */}
        <div className="form-left">
          <div className="input-group">
            <label>Nom du cour :</label>
            <input
              type="text"
              value={newCourse.name}
              onChange={(e) =>
                setNewCourse({ ...newCourse, name: e.target.value })
              }
              placeholder="Introduction à l'Internet des Objets (IoT)"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <label>Lien vers le cours :</label>
            <input
              type="text"
              value={newCourse.link}
              onChange={(e) =>
                setNewCourse({ ...newCourse, link: e.target.value })
              }
              placeholder="https://www.youtube.com/watch?v=qqPz-ASzYvQ"
              className="form-input"
            />
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="form-right">
          <div className="description-header">
            <label>Description :</label>
            <span className="char-count">
              {newCourse.description.length}/1000
            </span>
          </div>
          <textarea
            value={newCourse.description}
            onChange={(e) =>
              setNewCourse({ ...newCourse, description: e.target.value })
            }
            placeholder="Pour un projet IoT utilisant un microcontrôleur, il est important de mettre en place une gestion efficace de la consommation d'énergie pour prolonger la durée de vie de la batterie."
            className="description-input"
            maxLength={1000}
          />
        </div>
      </div>

      {/* Delete Course Section */}
      <div className="course-header section-spacing">
        <div className="header-left">
          <div className="icon-circle">
            <TrashIcon />
          </div>
          <h2>Supprimer un cours</h2>
        </div>
        <button className="add-button" onClick={handleDeleteCourse}>
          <span className="check-icon">
            <CheckIcon />
          </span>{" "}
          Supprimer cours
        </button>
      </div>

      <div className="form-container">
        {/* Left Column - Form Inputs */}
        <div className="form-left">
          <div className="input-group">
            <label>Nom du quiz :</label>
            <input
              type="text"
              value={courseToDelete.name}
              onChange={(e) =>
                setCourseToDelete({ ...courseToDelete, name: e.target.value })
              }
              placeholder="Introduction à l'Internet des Objets (IoT)"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <label>Lien vers le cours :</label>
            <input
              type="text"
              value={courseToDelete.link}
              onChange={(e) =>
                setCourseToDelete({ ...courseToDelete, link: e.target.value })
              }
              placeholder="https://www.youtube.com/watch?v=qgPz-ASzVvQ"
              className="form-input"
            />
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="form-right">
          <div className="description-header">
            <label>Description :</label>
            <span className="char-count">
              {courseToDelete.description.length}/1000
            </span>
          </div>
          <textarea
            value={courseToDelete.description}
            onChange={(e) =>
              setCourseToDelete({
                ...courseToDelete,
                description: e.target.value,
              })
            }
            placeholder="Pour un projet IoT utilisant un microcontrôleur, il est important de mettre en place une gestion efficace de la consommation d'énergie pour prolonger la durée de vie de la batterie."
            className="description-input"
            maxLength={1000}
          />
        </div>
      </div>

      {/* Modify Course Section - Based on the image you provided */}
      <div className="course-header section-spacing">
        <div className="header-left">
          <div className="icon-circle">
            <PenIcon />
          </div>
          <h2>Modifier un cours</h2>
        </div>
        <button className="add-button" onClick={handleModifyCourse}>
          <span className="check-icon">
            <CheckIcon />
          </span>{" "}
          Modifier cour
        </button>
      </div>

      <div className="form-container">
        {/* Left Column - Form Inputs */}
        <div className="form-left">
          <div className="input-group">
            <label>Nom du quiz :</label>
            <input
              type="text"
              value={courseToModify.name}
              onChange={(e) =>
                setCourseToModify({ ...courseToModify, name: e.target.value })
              }
              placeholder="Introduction à l'Internet des Objets (IoT)"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <label>Lien vers le cours :</label>
            <input
              type="text"
              value={courseToModify.link}
              onChange={(e) =>
                setCourseToModify({ ...courseToModify, link: e.target.value })
              }
              placeholder="https://www.youtube.com/watch?v=qqPz-ASzVvQ"
              className="form-input"
            />
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="form-right">
          <div className="description-header">
            <label>Description :</label>
            <span className="char-count">
              {courseToModify.description.length}/1000
            </span>
          </div>
          <textarea
            value={courseToModify.description}
            onChange={(e) =>
              setCourseToModify({
                ...courseToModify,
                description: e.target.value,
              })
            }
            placeholder="Pour un projet IoT utilisant un microcontrôleur, il est important de mettre en place une gestion efficace de la consommation d'énergie pour prolonger la durée de vie de la batterie."
            className="description-input"
            maxLength={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default CoursPage;
