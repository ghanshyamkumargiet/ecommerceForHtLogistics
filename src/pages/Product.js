import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const Product = () => {
  // Define the products array
  const products = [
    { id: 1, name: "Laptop", price: 999.99, image: "/images/laptop.jpg" },
    { id: 2, name: "Mobile", price: 499.99, image: "/images/mobile.jpg" },
    { id: 3, name: "Desktop", price: 799.99, image: "/images/desktop.jpg" },
    { id: 4, name: "Printer", price: 199.99, image: "/images/printer.jpg" },
    { id: 5, name: "Tablet", price: 299.99, image: "/images/tablet.jpg" },
    {
      id: 6,
      name: "Smartwatch",
      price: 199.99,
      image: "/images/smartwatch.jpg",
    },
    {
      id: 7,
      name: "Headphones",
      price: 149.99,
      image: "/images/headphones.jpg",
    },
    { id: 8, name: "Camera", price: 599.99, image: "/images/camera.jpg" },
    { id: 9, name: "Speaker", price: 99.99, image: "/images/speaker.jpg" },
    { id: 10, name: "Charger", price: 29.99, image: "/images/charger.jpg" },
  ];

  // State for cart items
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  // Calculate total items in the cart
  const totalItems = cart.length;

  // Calculate the sum of prices in the cart
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <Layout>
      <h1>My Products</h1>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Items in Cart: {totalItems}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      <h2>Cart Items</h2>
      <div className="cart-list">
        {cart.map((product, index) => (
          <div key={index} className="cart-item">
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => removeFromCart(product)}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Available Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} width="150" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Product;
