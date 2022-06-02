import { initialStore } from "./store";

import type { Reducer } from "redux";
import type { Action, State } from "./types";

// reducer
const reducer: Reducer<State, Action> = (state = initialStore, action) => {
  switch (action.type) {
    case "DECREASE":
      return { ...state, count: state.total - 1 };
    case "INCREASE":
      return { ...state, count: state.total + 1 };
    case "REMOVE":
      return { ...state, count: 0 };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
