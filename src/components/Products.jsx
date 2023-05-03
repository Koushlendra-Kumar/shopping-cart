import React from "react";

function Product(props) {
  return (
    <div
      key={props.id}
      className="w-sm h-sm m-2 bg-red-400"
      flex="~ justify-center propss-center col"
    >
      <img
        src={props.image}
        height="100"
        width="100"
        border="~ solid green 1px rounded"
        className="self-center"
      />
      <h4>{props.title}</h4>
      <p>{props.description.substring(0, 80) + "..."}</p>
      <h3>${props.price}</h3>
      <button
        type="button"
        onClick={() => props.updateCart(props.id)}
        className="bg-amber h-8 w-28 hover:bg-blue"
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
