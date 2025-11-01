import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingBackButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // N'affiche pas le bouton sur la page d'accueil ou s'il n'y a pas d'historique de navigation.
  if (location.pathname === '/' || !window.history.state || window.history.state.idx === 0) {
    return null;
  }

  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Retour à la page précédente"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#8A9A5B] focus:ring-offset-2 active:scale-95"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>
  );
};

export default FloatingBackButton;
