import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="bg-white flex-grow flex items-center justify-center">
      <div className="text-center p-8 max-w-lg mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
          <svg className="w-12 h-12 text-[#8A9A5B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-light tracking-tight text-gray-900">Merci pour votre commande !</h1>
        <p className="mt-4 text-lg text-gray-500">
          Votre commande a été enregistrée. Vous recevrez bientôt un e-mail de confirmation.
        </p>
        <p className="mt-2 text-gray-500">
            Pour finaliser, veuillez suivre les instructions de paiement Mobile Money qui vous ont été présentées.
        </p>
        <Link 
          to="/" 
          className="mt-8 inline-block bg-[#8A9A5B] text-white uppercase tracking-widest text-sm font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 ease-in-out active:scale-95"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;