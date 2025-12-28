import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    // later yahin payment / backend call hoga
    navigate("/payment"); // 🔥 redirect here
  };

  return (
    <Layout>
      <div className="container py-5">
        <h2 className="mb-4">Checkout</h2>

        <div className="row">
          <div className="col-md-7">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5>Billing Details</h5>

                <input className="form-control mb-3" placeholder="Full Name" />
                <input className="form-control mb-3" placeholder="Email" />
                <input className="form-control mb-3" placeholder="Address" />
                <input className="form-control mb-3" placeholder="City" />
                <input className="form-control mb-3" placeholder="Pincode" />

                {/* 🔥 FIXED BUTTON */}
                <button
                  className="btn btn-success w-100"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5>Order Summary</h5>
                {cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between">
                    <span>
                      {item.name} × {item.qty}
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
                <hr />
                <h6>Total: ₹{total}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
