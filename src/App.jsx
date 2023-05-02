import React, { useState, useEffect } from "react";
import axios from "axios";
import { Popover, Button } from '@mui/material';

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

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() =>{
    console.log(cart)
  },[cart])

  const cartProducts = cart.length ? cart.map((elem) => {
    let item = data.find(product => product.id == elem.id)
    console.log(item);
    return (
    <div
      key={item.id}
      className="w-sm m-2 bg-red-400"
      flex="~ justify-center items-center"
    >
      <img
        src={item.image}
        height="50"
        width="50"
        border="~ solid green 1px rounded"
        className="self-center"
      />
      <h6>{item.title.substring(0, 20) +'...'}</h6>
      <h3>${item.price}</h3>
      <div className='ml-5'><span>-</span>{elem.quantity}<span>+</span></div>
    </div>
  )}) : <p className="m-10">Add items to cart </p>

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
        onClick={() => {
          let itemExist = cart.find(elem => elem.id == item.id);
          if(itemExist){
            let newCart = cart.map(elem => {
              if(elem.id == item.id){
                return {...elem, quantity: elem.quantity + 1}
              } else {
                return elem;
              }
            })
            setCart(newCart);
          } else {
            setCart([...cart, {id: item.id, quantity: 1}])
          }
        }}
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
