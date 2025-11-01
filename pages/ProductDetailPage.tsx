import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { Product } from '../types';
import { CartContext } from '../App';

// Accordion Item Component
const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-gray-800 py-4 px-2 -mx-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A9A5B]"
      >
        <span className="text-base font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && <div className="pt-2 pb-4 text-sm text-gray-600 pr-4 pl-2">{children}</div>}
    </div>
  );
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || ''));
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.imageUrl || '');
  const [notification, setNotification] = useState('');

  if (!product) {
    return <div className="container mx-auto text-center py-20">Produit non trouvé.</div>;
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setNotification(`${quantity} x ${product.name} ajouté au panier !`);
    setTimeout(() => setNotification(''), 3000);
  };
  
  const recommendedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white">
       {notification && (
        <div className="fixed top-24 right-4 bg-[#8A9A5B] text-white py-2 px-4 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((img, index) => (
                <button key={index} onClick={() => setMainImage(img)} className={`aspect-square bg-gray-100 rounded-md overflow-hidden ring-2 ${mainImage === img ? 'ring-[#8A9A5B]' : 'ring-transparent'}`}>
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pt-8">
            <p className="text-sm uppercase tracking-widest text-gray-500">{product.category}</p>
            <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mt-2">{product.name}</h1>
            <p className="text-3xl text-gray-800 mt-4">{product.price.toFixed(0)} FCFA</p>
            <p className="mt-6 text-gray-600">{product.description}</p>

            {/* Quantity & Add to Cart */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md transition-all duration-150 active:scale-90">-</button>
                <span className="px-4 py-2 text-gray-800">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md transition-all duration-150 active:scale-90">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#8A9A5B] text-white uppercase tracking-widest text-sm font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 ease-in-out active:scale-95"
              >
                Ajouter au panier
              </button>
            </div>
            
            {/* Accordions */}
            <div className="mt-10">
                <AccordionItem title="Ingrédients">
                    <ul className="list-disc list-inside">
                        {product.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                    </ul>
                </AccordionItem>
                <AccordionItem title="Conseils d'utilisation">
                    <p>{product.howToUse}</p>
                </AccordionItem>
                <AccordionItem title="Livraison & Retours">
                    <p>Livraison standard offerte en France. Retours faciles sous 30 jours.</p>
                </AccordionItem>
            </div>
          </div>
        </div>
        
        {/* Recommended Products */}
        <div className="mt-24">
            <h2 className="text-2xl font-light tracking-tight text-gray-900 text-center">Vous pourriez aussi aimer</h2>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {recommendedProducts.map(p => (
                     <Link to={`/produit/${p.id}`} className="group" key={p.id}>
                        <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-103 group-hover:shadow-lg">
                        <img
                            src={p.imageUrl}
                            alt={p.name}
                            className="w-full h-full object-center object-cover"
                        />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{p.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{p.price.toFixed(0)} FCFA</p>
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;