import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPE } from "./cart-type";

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

export const setIsCartOpen = (Boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, Boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItmes = addcartItems(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItmes);
};

export const removeItmesFromCart = (cartItems, CartToRemove) => {
  const newCartItmes = removeCartItems(cartItems, CartToRemove);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItmes);
};

export const clearItemsFromCart = (cartItems, CartToClear) => {
  const newCartItmes = clearCartItem(cartItems, CartToClear);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItmes);
};
