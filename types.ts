export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  gallery: string[];
  ingredients: string[];
  howToUse: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}