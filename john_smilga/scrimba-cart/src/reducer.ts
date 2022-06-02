import { initialStore } from "./store";

import type { Reducer } from "redux";
import type { Action, CartItemType, State } from "./types";

// reducer
const reducer: Reducer<State, Action> = (state = initialStore, action) => {
  let amount = state.amount;
  let cart: CartItemType[];

  switch (action.type) {
    case "DECREASE":
      cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.amount > 0) {
            amount -= 1;
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }
        return item;
      });
      return {
        ...state,
        amount,
        cart,
      };
    case "INCREASE":
      cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          if (item.amount >= 0) {
            amount += 1;
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }
        return item;
      });
      return {
        ...state,
        amount,
        cart,
      };
    case "REMOVE":
      cart = state.cart.filter((item) => {
        if (item.id === action.payload.id) {
          amount -= item.amount;
          return false;
        } else {
          return true;
        }
      });
      return {
        ...state,
        amount,
        cart,
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
