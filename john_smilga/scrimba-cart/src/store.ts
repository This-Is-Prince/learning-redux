import { createStore } from "redux";
import cartItems from "./cart-items";

import reducer from "./reducer";

import type { State } from "./types";

// initial store
export const initialStore: State = {
  amount: 5,
  cart: cartItems,
  total: 105,
};

const store = createStore(reducer, initialStore);

export default store;
