
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-80">
        <img src="https://picsum.photos/seed/about_hero/1800/600" alt="AURA ingredients" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-white text-center">Notre Histoire</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Our Philosophy */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900">La simplicité est le soin ultime.</h2>
          <p className="mt-6 text-lg text-gray-600">
            AURA est née d'une idée simple : créer des soins pour la peau qui sont aussi purs qu'efficaces. Nous avons voulu nous éloigner des routines compliquées et des listes d'ingrédients interminables pour revenir à l'essentiel. Chaque produit est une célébration de la puissance de la nature, formulé pour nourrir, protéger et révéler la beauté naturelle de votre peau.
          </p>
        </section>

        {/* Core Values */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-medium text-gray-800">Transparence</h3>
              <p className="mt-4 text-gray-600">Nous croyons en une communication honnête. Chaque ingrédient a un but, et nous sommes fiers de partager nos formules avec vous.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Efficacité</h3>
              <p className="mt-4 text-gray-600">Nos produits sont basés sur la science et la nature. Nous utilisons des actifs éprouvés à des concentrations optimales pour des résultats visibles.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Conscience</h3>
              <p className="mt-4 text-gray-600">De l'approvisionnement éthique de nos ingrédients à nos emballages recyclables, nous nous engageons à minimiser notre impact sur la planète.</p>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-96 rounded-lg overflow-hidden">
            <img src="https://picsum.photos/seed/commitment/800/1000" alt="Nature et science" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-light text-gray-900">Notre Engagement</h2>
            <p className="mt-6 text-gray-600">
              Chaque flacon AURA est le fruit d'une recherche méticuleuse. Nous collaborons avec des botanistes et des chimistes pour créer des synergies parfaites entre les ingrédients naturels et les innovations scientifiques.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
                <li className="flex items-start"><span className="text-[#8A9A5B] mr-3 mt-1">&#10003;</span><span>Sans cruauté et végétalien</span></li>
                <li className="flex items-start"><span className="text-[#8A9A5B] mr-3 mt-1">&#10003;</span><span>Formulé sans parabènes, sulfates, ni phtalates</span></li>
                <li className="flex items-start"><span className="text-[#8A9A5B] mr-3 mt-1">&#10003;</span><span>Testé dermatologiquement pour toutes les peaux, même sensibles</span></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
