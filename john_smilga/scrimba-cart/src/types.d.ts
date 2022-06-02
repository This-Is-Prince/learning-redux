interface State {
  total: number;
  cart: CartItemType[];
  amount: number;
}

type Action =
  | {
      type: "CLEAR_CART" | "GET_TOTAL" | "GET_AMOUNT";
    }
  | { type: "DECREASE"; payload: { id: number } }
  | { type: "INCREASE"; payload: { id: number } }
  | { type: "REMOVE"; payload: { id: number } };

interface NavbarProps {
  amount: number;
}

interface CartItemType {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export { State, Action, NavbarProps, CartItemType };
