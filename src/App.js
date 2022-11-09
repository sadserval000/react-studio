import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from './components/BakeryItem'
import { CartItem } from './components/CartItem'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cartItems, setCartItems] = useState(Array(bakeryData.length).fill(0))

  const handleClick = (index) => {
    const newCart = [...cartItems]
    newCart[index]++
    setCartItems(newCart)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div className="content-container">
        <div className="items-container">
          {bakeryData.map((item, index) =>
            <BakeryItem 
              key={index}
              index={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              clickFunc={(index) => handleClick(index)}
            />
          )}
        </div>
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
          {cartItems.map((count, index) =>
            <CartItem 
              key={index}
              count={count}
              name={bakeryData[index].name}
              price={bakeryData[index].price}
            />
          )}
        <h3 className="total">
          Total: $
          {(cartItems.reduce((prev, curr, index) => {
            return prev + curr * bakeryData[index].price
          }, 0)).toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

export default App;
