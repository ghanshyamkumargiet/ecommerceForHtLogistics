import React from "react";
import Layout from "../components/Layout/Layout";

const Payment = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="mb-4">Payment</h2>

        <div className="row">
          {/* Razorpay */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5>Razorpay</h5>
                <p className="text-muted">UPI / Card / NetBanking</p>
                <button className="btn btn-primary w-100">
                  Pay with Razorpay
                </button>
              </div>
            </div>
          </div>

          {/* Stripe */}
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5>Stripe</h5>
                <p className="text-muted">International Cards</p>
                <button className="btn btn-dark w-100">Pay with Stripe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
