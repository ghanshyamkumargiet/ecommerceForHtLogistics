import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <Layout>
      <div className="container py-5 text-center">
        <h1 className="text-success mb-3">✅ Order Placed Successfully</h1>
        <p className="text-muted mb-4">
          Thank you for shopping with us. Your order is being processed.
        </p>

        <Link to="/product" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    </Layout>
  );
};

export default OrderSuccess;
