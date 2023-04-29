import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const products = data.map((item) => (
    <div
      key={item.id}
      className="w-sm h-sm m-2 bg-red-400"
      flex="~ justify-center items-center col"
    >
      <img
        src={item.image}
        height="100"
        width="100"
        border="~ solid green 1px rounded"
        className="self-center"
      />
      <h4>{item.title}</h4>
      <p>{item.description.substring(0, 80) + "..."}</p>
      <h3>${item.price}</h3>
      <button
        type="button"
        onClick={() => setCart([...cart, item.id])}
        className="bg-amber h-8 w-28 hover:bg-blue"
      >
        Add to cart
      </button>
    </div>
  ));

  return (
    <div flex flex-col>
      <header flex="~ justify-around items-center">
        <h1>Shopping Cart</h1>
        <div className="h-18 w-md" flex="~ justify-around items-center">
          <a href="#" h-full flex="~ justify-center items-center">
            Cart({cart.length})
          </a>
          <a href="#" className="flex flex-justify-around flex-items-center">
            Orders
          </a>
        </div>
      </header>
      <div flex="~ justify-between content-center wrap" gap-1>
        {products}
      </div>
    </div>
  );
}

export default App;
