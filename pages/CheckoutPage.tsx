import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../App';

const CheckoutPage: React.FC = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = shippingMethod === 'standard' ? 3000 : 7000;
  const total = subtotal + shippingCost;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/confirmation');
  };

  if (cartItems.length === 0 && window.location.hash !== '#/confirmation') {
    // Redirect to home if cart is empty and not on confirmation page already
    // A bit of a hack for the initial render state
    setTimeout(() => navigate('/'), 0);
    return null;
  }


  return (
    <div className="bg-white sm:bg-[#F9F9F7] min-h-screen">
      <div className="container mx-auto max-w-lg sm:p-4 lg:p-8 bg-white">
        <header className="flex items-center justify-center relative py-6 px-4 sm:px-0 border-b sm:border-none">
          <Link to="/panier" className="absolute left-4 sm:left-0 text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" transform="scale(-1, 1) translate(-24, 0)" />
            </svg>
          </Link>
          <h1 className="text-xl font-medium text-gray-800">Paiement</h1>
        </header>

        <form onSubmit={handlePayment} className="p-4 sm:p-0">
          <div className="space-y-8 mt-8">
            {/* Shipping Address */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Adresse de livraison</h2>
              <div className="grid grid-cols-1 gap-y-4">
                <input type="email" placeholder="Adresse e-mail" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                <div className="grid grid-cols-2 gap-x-4">
                  <input type="text" placeholder="Prénom" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                  <input type="text" placeholder="Nom" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                </div>
                <input type="text" placeholder="Adresse" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                <input type="text" placeholder="Appartement, suite, etc. (optionnel)" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                <div className="grid grid-cols-2 gap-x-4">
                  <input type="text" placeholder="Ville" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                  <input type="text" placeholder="Code postal" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
                </div>
                <input type="text" placeholder="Pays/Région" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A9A5B]/50" />
              </div>
            </section>

            {/* Shipping Method */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Méthode d'expédition</h2>
              <div className="space-y-4">
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${shippingMethod === 'standard' ? 'border-[#8A9A5B] ring-1 ring-[#8A9A5B]' : 'border-gray-300'}`}>
                  <input type="radio" name="shipping" value="standard" checked={shippingMethod === 'standard'} onChange={() => setShippingMethod('standard')} className="h-4 w-4 text-[#8A9A5B] focus:ring-[#8A9A5B] border-gray-300" />
                  <span className="ml-3 text-sm font-medium text-gray-800 flex-grow">Standard</span>
                  <span className="text-sm font-medium text-gray-900">3000 FCFA</span>
                </label>
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${shippingMethod === 'express' ? 'border-[#8A9A5B] ring-1 ring-[#8A9A5B]' : 'border-gray-300'}`}>
                  <input type="radio" name="shipping" value="express" checked={shippingMethod === 'express'} onChange={() => setShippingMethod('express')} className="h-4 w-4 text-[#8A9A5B] focus:ring-[#8A9A5B] border-gray-300" />
                  <span className="ml-3 text-sm font-medium text-gray-800 flex-grow">Express</span>
                  <span className="text-sm font-medium text-gray-900">7000 FCFA</span>
                </label>
              </div>
            </section>
            
            {/* Payment Section */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Paiement</h2>
              <div className="p-6 border border-gray-200 rounded-lg bg-white text-center">
                <h3 className="font-semibold text-gray-800">Mobile Money (MoMo)</h3>
                <p className="mt-3 text-sm text-gray-600">Veuillez effectuer votre dépôt sur le numéro ci-dessous :</p>
                <p className="mt-2 text-xl font-bold tracking-wider text-gray-900 bg-gray-100 py-2 rounded-md">+237 6XX XX XX XX</p>
                <p className="mt-3 text-sm text-gray-600">Montant à payer : <span className="font-bold text-gray-900">{total.toFixed(0)} FCFA</span></p>
              </div>
            </section>

            {/* Order Summary */}
            <section>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Récapitulatif de la commande</h2>
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex py-4 items-center">
                      <div className="h-16 w-16 relative flex-shrink-0">
                        <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover rounded-md" />
                        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-[#8A9A5B] rounded-full">{item.quantity}</span>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">50ml</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{(item.price * item.quantity).toFixed(0)} FCFA</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(0)} FCFA</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Livraison</span>
                    <span>{shippingCost.toFixed(0)} FCFA</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-gray-900 mt-2 pt-2 border-t">
                    <span>Total</span>
                    <span>{total.toFixed(0)} FCFA</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          <div className="mt-10 mb-4 sm:mb-0">
            <button type="submit" className="w-full flex items-center justify-center rounded-lg border border-transparent bg-[#8A9A5B] px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-opacity-90 transition-all duration-200 active:scale-95">
              Payer maintenant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;