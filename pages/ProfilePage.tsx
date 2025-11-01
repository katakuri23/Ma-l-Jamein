import React, { useState } from 'react';

type ProfileTab = 'orders' | 'info' | 'wishlist';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('orders');

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div>
            <h2 className="text-xl font-medium text-gray-800">Mes Commandes</h2>
            <div className="mt-6 border rounded-lg p-6 text-center text-gray-500">
              <p>Vous n'avez aucune commande pour le moment.</p>
            </div>
          </div>
        );
      case 'info':
        return (
          <div>
            <h2 className="text-xl font-medium text-gray-800">Mes Informations</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700">Adresse de livraison</h3>
                <p className="mt-2 text-gray-500">Vous n'avez pas encore enregistré d'adresse.</p>
                <button className="mt-2 text-sm font-medium text-[#8A9A5B] hover:text-opacity-80 transition-transform duration-150 active:scale-95 inline-block">Ajouter une adresse</button>
              </div>
              <div className="pt-6 border-t">
                 <h3 className="text-lg font-medium text-gray-700">Informations de connexion</h3>
                 <p className="mt-2 text-gray-500">Email: utilisateur@exemple.com</p>
                 <button className="mt-2 text-sm font-medium text-[#8A9A5B] hover:text-opacity-80 transition-transform duration-150 active:scale-95 inline-block">Changer le mot de passe</button>
              </div>
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div>
            <h2 className="text-xl font-medium text-gray-800">Liste de Souhaits</h2>
            <div className="mt-6 border rounded-lg p-6 text-center text-gray-500">
              <p>Votre liste de souhaits est vide.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const TabButton: React.FC<{ tabId: ProfileTab; children: React.ReactNode }> = ({ tabId, children }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        activeTab === tabId
          ? 'bg-[#8A9A5B] text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-light tracking-tight text-gray-900">Mon Compte</h1>
            <p className="mt-2 text-lg text-gray-500">Bienvenue, [Utilisateur] !</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <aside className="md:col-span-1">
            <nav className="flex flex-col space-y-2">
              <TabButton tabId="orders">Mes Commandes</TabButton>
              <TabButton tabId="info">Mes Informations</TabButton>
              <TabButton tabId="wishlist">Liste de Souhaits</TabButton>
            </nav>
          </aside>

          {/* Content */}
          <main className="md:col-span-3 bg-[#F9F9F7] p-8 rounded-lg">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
