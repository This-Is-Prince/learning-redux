import { FC } from "react";
import { connect, MapStateToProps } from "react-redux";
import { Dispatch } from "redux";
import { Action, CartItemType, State } from "../types";
import CartItem from "./CartItem";

const CartContainer: FC<{
  cart: CartItemType[];
  total: number;
  dispatch: Dispatch<Action>;
}> = ({ cart = [], total, dispatch }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps: MapStateToProps<
  { cart: CartItemType[]; total: number },
  any,
  State
> = (state) => {
  return { cart: state.cart, total: state.total };
};

export default connect(mapStateToProps)(CartContainer);
