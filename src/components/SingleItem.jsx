import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ACTIONS } from "../actions";
import { useGlobalContext } from "../context";

const SingleItem = (prop) => {
  const { id, title, price, img, amount } = prop;
  const { dispatch } = useGlobalContext();

  function handleRemove() {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id: id } });
  }
  function handleIncrease() {
    dispatch({ type: ACTIONS.INCREASE, payload: { id: id } });
  }
  function handleDecrease() {
    dispatch({ type: ACTIONS.DECREASE, payload: { id: id } });
  }

  return (
    <div className="single-cart-ct">
      <div className="cart-left">
        <div>
          <img src={img} alt="img" className="cart-item-img" />
        </div>
        <div className="left-item">
          <h3 className="item-name">{title}</h3>
          <h3 className="price">${price}</h3>
          <button className="remove-btn" onClick={handleRemove}>
            remove
          </button>
        </div>
      </div>
      <div className="cart-right">
        <button onClick={handleIncrease} className="arrow-btn">
          <IoIosArrowUp />
        </button>
        <p className="item-amount">{amount}</p>
        <button onClick={handleDecrease} className="arrow-btn">
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
