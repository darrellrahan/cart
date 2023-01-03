import React from "react";
import { ACTIONS } from "../actions";
import { useGlobalContext } from "../context";
import SingleItem from "./SingleItem";

const Section = () => {
  const { data, dispatch } = useGlobalContext();

  if (data.totalAmount === 0)
    return <h1 className="empty-text">Your Cart is Empty</h1>;

  function handleClearAll() {
    dispatch({ type: ACTIONS.CLEAR_ALL });
  }

  return (
    <section>
      <div className="cart-ct">
        {data.items.map((e, i) => {
          const { id, title, price, img, amount } = e;
          return (
            <SingleItem
              key={id}
              id={id}
              index={i}
              title={title}
              price={price}
              img={img}
              amount={amount}
            />
          );
        })}
      </div>
      <div className="bottom">
        <div className="line">
          <hr />
        </div>
        <div className="total">
          <h3>Total</h3>
          <h3>${data.totalPrice}</h3>
        </div>
        <div className="clear-btn-ct">
          <button onClick={handleClearAll}>CLEAR CART</button>
        </div>
      </div>
    </section>
  );
};

export default Section;
