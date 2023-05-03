import React, { useState, useEffect } from "react";
import axios from "axios";
import { Popover, Button } from '@mui/material';

import Cart from "./components/Cart";
import Product from "./components/Products";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const updateCart = (id) => {
    let itemExist = cart.find((elem) => elem.id == id);
          if (itemExist) {
            let newCart = cart.map((elem) => {
              if (elem.id == id) {
                return { ...elem, quantity: elem.quantity + 1 };
              } else {
                return elem;
              }
            });
            setCart(newCart);
          } else {
            setCart([...cart, { id, quantity: 1 }]);
          }
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cartProducts = cart.length ? cart.map((elem) => {
    let item = data.find(product => product.id == elem.id)
    console.log(item);
    return (
      <Cart
        id={item.id}
        title={item.title}
        image={item.image}
        quantity={elem.quantity}
        price={item.price}
      />
    );
  }) : <p className="m-10">Add items to cart </p>

  const products = data.map((item) => (
    <Product 
      id={item.id}
      title={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
      updateCart={updateCart}
    />
  ));

  return (
    <div flex flex-col>
      <header flex="~ justify-around items-center">
        <h1>Shopping Cart</h1>
        <div className="h-18 w-md" flex="~ justify-around items-center">
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Cart ({cart.length})
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          {cartProducts}
        </Popover>
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
