import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4 fw-bold text-center">Contact Information</h2>

            <div className="card shadow">
              <div className="card-body">
                <p className="text-muted mb-2">
                  <strong>Name:</strong> Ghanshyam Kumar
                </p>

                <p className="text-muted mb-2">
                  <strong>Mobile:</strong> 7281015610, 8709262607
                </p>

                <p className="text-muted mb-4">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:gk728101@gmail.com">gk728101@gmail.com</a>
                </p>

                {/* Call & WhatsApp Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <a href="tel:7281015610" className="btn btn-success">
                    📞 Call Now
                  </a>

                  <a
                    href="https://wa.me/917281015610"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-success"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
