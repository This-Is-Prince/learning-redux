interface State {
  total: number;
  cart: CartItem[];
  amount: number;
}
type Action = {
  type:
    | "DECREASE"
    | "INCREASE"
    | "REMOVE"
    | "CLEAR_CART"
    | "GET_TOTAL"
    | "GET_AMOUNT";
};

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
