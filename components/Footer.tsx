import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-lg font-medium tracking-widest text-gray-800 uppercase">AURA</h2>
            <p className="mt-4 text-sm text-gray-500">Des soins conscients pour une peau radieuse.</p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Explorer</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">À Propos</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">FAQ</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">Conditions d'utilisation</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">Politique de confidentialité</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300">Politique de retour</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-500">Recevez nos offres et nouveautés en avant-première.</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="Votre email" className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
              <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#8A9A5B] rounded-r-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8A9A5B] transition-all duration-200 active:scale-95">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AURA SKIN CARE. Tous droits réservés.</p>
          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Replace with actual social icons */}
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">Insta</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">Fb</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">Tw</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;