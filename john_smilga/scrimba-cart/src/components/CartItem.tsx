import { connect } from "react-redux";

import type { FC } from "react";
import type { MapDispatchToProps } from "react-redux";
import type { CartItemType } from "../types";

const CartItem: FC<{
  increase: Increase;
  decrease: Decrease;
  remove: Remove;
  title: string;
  price: number;
  img: string;
  amount: number;
}> = ({ img, title, price, amount, increase, remove, decrease }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button onClick={() => remove()} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button onClick={() => increase()} className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button onClick={() => decrease()} className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

type Remove = () => { type: "REMOVE"; payload: { id: number } };
type Increase = () => { type: "INCREASE"; payload: { id: number } };
type Decrease = () => { type: "DECREASE"; payload: { id: number } };

interface TDispatchProps {
  remove: Remove;
  increase: Increase;
  decrease: Decrease;
}

const mapDispatchToProps: MapDispatchToProps<TDispatchProps, CartItemType> = (
  dispatch,
  props
) => {
  return {
    remove: () => dispatch({ type: "REMOVE", payload: { id: props.id } }),
    increase: () => dispatch({ type: "INCREASE", payload: { id: props.id } }),
    decrease: () => dispatch({ type: "DECREASE", payload: { id: props.id } }),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
