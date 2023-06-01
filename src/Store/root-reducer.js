import { combineReducers } from "redux";


import { userReducer } from "./user/user-reducer";
import { categoriesRducer } from "./categories/category-reducer";
import { cartReduser } from "./cart/cart-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesRducer,
  cart: cartReduser,
});
