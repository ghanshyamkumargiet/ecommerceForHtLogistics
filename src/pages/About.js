import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="fw-bold mb-3 text-center">About Our Store</h2>

                <p className="text-muted text-center mb-4">
                  Your trusted destination for quality products and affordable
                  prices.
                </p>

                <p className="text-muted">
                  We are an e-commerce platform dedicated to providing customers
                  with a smooth and secure online shopping experience. Our goal
                  is to make quality products easily accessible with fast
                  delivery and reliable customer support.
                </p>

                <p className="text-muted">
                  This platform is continuously improving, and we are actively
                  working on adding new features, products, and better user
                  experience for our customers.
                </p>

                <div className="text-center mt-4">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
