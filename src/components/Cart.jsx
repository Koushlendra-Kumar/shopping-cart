import React from "react";

function Cart(props) {
  return (
    <div
      key={props.id}
      className="w-sm m-2 bg-red-400"
      flex="~ justify-center propss-center"
    >
      <img
        src={props.image}
        height="50"
        width="50"
        border="~ solid green 1px rounded"
        className="self-center"
      />
      <h6>{props.title.substring(0, 20) + "..."}</h6>
      <h3>${props.price}</h3>
      <div className="ml-5">
        <span>-</span>
        {props.quantity}
        <span>+</span>
      </div>
    </div>
  );
}

export default Cart;
