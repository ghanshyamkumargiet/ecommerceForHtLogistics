import React from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold mb-3">Welcome to Our E-Commerce Store</h1>
              <p className="text-muted mb-4">
                Best quality products at affordable prices. Fast delivery •
                Secure payment • Trusted service
              </p>
              <button className="btn btn-primary btn-lg">Shop Now</button>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/images/Banner.jpg"
                alt="Shopping"
                className="img-fluid rounded "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🚚 Fast Delivery</h5>
                <p className="card-text text-muted">
                  Quick and reliable delivery across India.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">💳 Secure Payment</h5>
                <p className="card-text text-muted">
                  100% secure online payment options.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">📦 Quality Products</h5>
                <p className="card-text text-muted">
                  Verified sellers and quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-primary text-white py-5 text-center">
        <h2 className="mb-3">Start Shopping Today</h2>
        <p className="mb-4">Explore thousands of products with best deals.</p>
        <button className="btn btn-light btn-lg">Browse Products</button>
      </div>
    </Layout>
  );
};

export default HomePage;
