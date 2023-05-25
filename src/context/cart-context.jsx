import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addcartItems = (cartItems, productToAdd) => {
  const existingCardtItmes = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );
  if (existingCardtItmes) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItems = (cartItems, CartToRemove) => {
  const existingCardtItmes = cartItems.find(
    (cartItems) => cartItems.id === CartToRemove.id
  );
  if (existingCardtItmes.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== CartToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === CartToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, CartToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== CartToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItmesFromCart: () => {},
  clearItemsFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITAIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReduser = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhndled type of ${type} in cartReduser`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReduser, INITAIAL_STATE);

  const updateCartItmesReducer = (newCartItmes) => {
    const newCartTotal = newCartItmes.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    const newCartCount = newCartItmes.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItmes,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItmes = addcartItems(cartItems, productToAdd);
    updateCartItmesReducer(newCartItmes);
  };

  const removeItmesFromCart = (CartToRemove) => {
    const newCartItmes = removeCartItems(cartItems, CartToRemove);
    updateCartItmesReducer(newCartItmes);
  };

  const clearItemsFromCart = (CartToClear) => {
    const newCartItmes = clearCartItem(cartItems, CartToClear);
    updateCartItmesReducer(newCartItmes);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, bool));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartCount,
    addItemToCart,
    cartItems,
    removeItmesFromCart,
    clearItemsFromCart,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
