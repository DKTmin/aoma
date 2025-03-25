import React, { createContext, useState, useContext } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addToCart = (book) => {
    // Check if book is already in cart
    const existingItem = cartItems.find(item => item.id === book.id);

    if (existingItem) {
      // If book exists, increase quantity
      setCartItems(cartItems.map(item => 
        item.id === book.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // If book is not in cart, add it with quantity 1
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  // Function to remove item from cart
  const removeFromCart = (bookId) => {
    setCartItems(cartItems.filter(item => item.id !== bookId));
  };

  // Function to update quantity
  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      // If quantity is less than 1, remove the item
      removeFromCart(bookId);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === bookId 
          ? { ...item, quantity: newQuantity } 
          : item
      ));
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Context value to be provided
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};