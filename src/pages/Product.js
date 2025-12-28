import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";

const Product = () => {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, image: "/images/laptop.jpg" },
    { id: 2, name: "Mobile", price: 499.99, image: "/images/mobile.jpg" },
    { id: 3, name: "Desktop", price: 799.99, image: "/images/desktop.jpg" },
    { id: 4, name: "Printer", price: 199.99, image: "/images/printer.jpg" },
  ];

  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCart(savedCart);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Layout>
      <div className="container py-5">
        {/* Cart Summary */}
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex justify-content-between">
            <strong>🛒 Items: {cart.length}</strong>
            <strong>💰 Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        </div>

        {/* Products */}
        <div className="row">
          {products.map((p) => (
            <div key={p.id} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={p.image}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h6>{p.name}</h6>
                  <p className="text-muted">${p.price}</p>
                  <button
                    className="btn btn-success btn-sm w-100"
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Items */}
        {cart.length > 0 && (
          <>
            <h4 className="mt-5">Your Cart</h4>
            <div className="list-group">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name}</strong>
                    <div className="text-muted">
                      ${item.price} × {item.qty}
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decreaseQty(item.id)}
                    >
                      −
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <a href="/checkout" className="btn btn-primary mt-4">
              Proceed to Checkout
            </a>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Product;
