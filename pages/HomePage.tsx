import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { Product } from '../types';

// Product Card Component - defined locally for this page
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Link to={`/produit/${product.id}`} className="group">
    <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-103 group-hover:shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-center object-cover"
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">{product.price.toFixed(0)} FCFA</p>
  </Link>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F9F9F7]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/hero/1800/1200" alt="Skincare model" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter">L'essence du soin.</h1>
          <p className="mt-4 max-w-xl mx-auto text-lg">Des formules pures et efficaces pour une peau visiblement saine.</p>
          <Link to="#" className="mt-8 inline-block bg-white text-gray-900 uppercase tracking-widest text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-200 ease-in-out active:scale-95">
            Découvrir
          </Link>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light tracking-tight text-gray-900">Nos solutions de soin</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Des routines simples et ciblées pour répondre aux besoins essentiels de votre peau.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {/* Solution Item 1 */}
            <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/solution1/600/600" alt="Hydratation" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Hydratation</h3>
                <p className="mt-2 text-sm text-gray-500">Pour une peau souple et repulpée.</p>
            </div>
             {/* Solution Item 2 */}
            <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/solution2/600/600" alt="Éclat" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Éclat</h3>
                <p className="mt-2 text-sm text-gray-500">Révélez la lumière naturelle de votre teint.</p>
            </div>
             {/* Solution Item 3 */}
            <div className="flex flex-col items-center">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/solution3/600/600" alt="Purification" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Purification</h3>
                <p className="mt-2 text-sm text-gray-500">Pour une peau nette et équilibrée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 text-center">Nos produits phares</h2>
          <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {products.slice(0, 9).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#F9F9F7] py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                      <h2 className="text-3xl font-light tracking-tight text-gray-900">Notre philosophie</h2>
                      <p className="mt-6 text-lg text-gray-600">
                          Chez AURA, nous croyons en la puissance de la simplicité. Nos formules sont créées avec des ingrédients d'origine naturelle, choisis pour leur efficacité et leur douceur. Moins, c'est mieux.
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nous nous engageons pour une beauté transparente, éthique et respectueuse de votre peau et de la planète.
                      </p>
                      <Link to="/about" className="mt-8 inline-block bg-[#8A9A5B] text-white uppercase tracking-widest text-sm font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 ease-in-out active:scale-95">
                          En savoir plus
                      </Link>
                  </div>
                  <div className="order-1 md:order-2 h-80 md:h-96 rounded-lg overflow-hidden">
                      <img src="https://picsum.photos/seed/philosophy/800/1000" alt="Philosophie AURA" className="w-full h-full object-cover"/>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;