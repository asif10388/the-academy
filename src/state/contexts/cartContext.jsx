import { useState, createContext, useEffect, useReducer } from "react";

const addItem = (cartItems, itemToAdd) => {
  const existing = cartItems.find((item) => item.id === itemToAdd.id);

  if (existing) {
    return cartItems.map((item) => (item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CART_ACTION_TYPES = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
      return {};
    case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
      return {};
    default:
      throw new Error(`Invalid action type: ${type}`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartCount: 0,
  total: 0,
  addItemsToCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  removeItemsFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const newTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setCartCount(newCartCount);
    setTotal(newTotal);
  }, [cartItems]);

  const addItemsToCart = (itemToAdd) => {
    setCartItems(addItem(cartItems, itemToAdd));
  };

  const removeItemsFromCart = (itemToRemove) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    setCartItems(updatedItems);
  };

  const increaseItemQuantity = (itemToIncrease) => {
    const updatedItems = cartItems.map((item) => (item.id === itemToIncrease.id ? { ...item, quantity: item.quantity + 1 } : item));
    setCartItems(updatedItems);
  };

  const decreaseItemQuantity = (itemToDecrease) => {
    const updatedItems = cartItems.map((item) => (item.id === itemToDecrease.id ? (item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item) : item));
    setCartItems(updatedItems);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemsToCart, removeItemsFromCart, cartCount, total, increaseItemQuantity, decreaseItemQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
