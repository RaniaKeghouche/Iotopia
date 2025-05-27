import dash from '../images/Dashboard.png';
import para from '../images/Parametres.png';
import quiz from '../images/quiz.png';
import user from '../images/Utilisateur.png';
import logo from '../images/logo.png';
import crs from '../images/cours.png';

export const Sidebardata = [
  {
    title: " ",
    icon: logo,
    link: "/", // Route par défaut
    className: "icon-logo", // Classe spécifique pour le logo
    titleClass: "title-logo" // Classe spécifique pour le titre du logo
  },
  {
    title: "Dashboard",
    icon: dash,
    link: "/Dashboard", // Route pour la page du tableau de bord
    className: "icon-dashboard",
    titleClass: "title-dashboard" // Classe spécifique pour le titre "Dashboard"
  },
  {
    title: "Utilisateurs",
    icon: user,
    link: "/Users", // Route pour la page des utilisateurs
    className: "icon-user",
    titleClass: "title-user" // Classe spécifique pour le titre "Utilisateurs"
  },
  {
    title: "Quiz",
    icon: quiz,
    link: "/Quiz", // Route pour la page des quiz
    className: "icon-quiz",
    titleClass: "title-quiz" // Classe spécifique pour le titre "Quiz"
  },
  {
    title: "Paramètres",
    icon: para,
    link: "/Settings", // Route pour la page des paramètres
    className: "icon-settings",
    titleClass: "title-settings" // Classe spécifique pour le titre "Paramètres"
  },
  {
    title: "Cours",
    icon: crs,
    link: "/Cours", // Route pour la page des paramètres
    className: "icon-cours",
    titleClass: "title-cours" // Classe spécifique pour le titre "Paramètres"
  },
];