import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Example fixed shipping
  const total = subtotal + shipping;

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-light tracking-tight text-gray-900 text-center">Votre Panier</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center mt-12">
            <p className="text-gray-500">Votre panier est vide.</p>
            <Link to="/" className="mt-6 inline-block bg-[#8A9A5B] text-white uppercase tracking-widest text-sm font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-200 active:scale-95">
              Continuer mes achats
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                {cartItems.map(item => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3><Link to={`/produit/${item.id}`}>{item.name}</Link></h3>
                          <p className="ml-4">{(item.price * item.quantity).toFixed(0)} FCFA</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.price.toFixed(0)} FCFA</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md transition-all duration-150 active:scale-90">-</button>
                          <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md transition-all duration-150 active:scale-90">+</button>
                        </div>
                        <div className="flex">
                          <button type="button" onClick={() => removeFromCart(item.id)} className="font-medium text-[#8A9A5B] hover:text-opacity-80 transition-transform duration-150 active:scale-95">
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#F9F9F7] p-6 rounded-lg">
                <h2 className="text-lg font-medium text-gray-900">Récapitulatif</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Sous-total</p>
                    <p className="text-sm font-medium text-gray-900">{subtotal.toFixed(0)} FCFA</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">Frais de livraison</p>
                    <p className="text-sm font-medium text-gray-900">{shipping.toFixed(0)} FCFA</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>{total.toFixed(0)} FCFA</p>
                  </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Code promo</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input type="text" id="promo-code" className="flex-1 block w-full rounded-none rounded-l-md border-gray-300 focus:border-[#8A9A5B] focus:ring-[#8A9A5B] sm:text-sm" placeholder="Votre code"/>
                        <button type="button" className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-500 hover:bg-gray-100 transition-all duration-200 active:scale-95">
                            Appliquer
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                  <Link to="/paiement" className="w-full flex items-center justify-center rounded-md border border-transparent bg-[#8A9A5B] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90 transition-all duration-200 active:scale-95">
                    Procéder au Paiement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;