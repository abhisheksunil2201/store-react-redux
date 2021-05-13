import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id="1"
          title="ZOTAC Gaming GEFORCE RTX 3090 Trinity 24GB GDDR6X Graphic Card"
          price={284999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61RdOtWEiML._SL1024_.jpg"
        />
        <Product
          id="2"
          title="Corsair Void RGB Elite Wireless, Carbon"
          price={15929.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61oGokyedML._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Razer Huntsman Mini"
          price={10875.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61hLGl3QbiL._SL1000_.jpg"
        />
        <Product
          id="4"
          title="LG Ultragear 27 240Hz"
          price={32694.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71VHmNBWJQL._SL1500_.jpg"
        />
        <Product
          id="5"
          title="Xbox Wireless Controller - Phantom Magenta Special Edition"
          price={6158.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71NW2LibZzL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Samsung Ultra Wide Curved Monitor"
          price={153900.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
