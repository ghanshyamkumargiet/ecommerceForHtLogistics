import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="fw-bold mb-4 text-center">Store Policies</h2>

                {/* Privacy Policy */}
                <section className="mb-4">
                  <h5 className="fw-semibold">🔒 Privacy Policy</h5>
                  <p className="text-muted">
                    We value your privacy and are committed to protecting your
                    personal information. Any data collected on this platform is
                    used only for order processing, customer support, and
                    improving user experience.
                  </p>
                </section>

                {/* Shipping Policy */}
                <section className="mb-4">
                  <h5 className="fw-semibold">🚚 Shipping Policy</h5>
                  <p className="text-muted">
                    Orders are processed within 1–2 business days. Delivery
                    timelines may vary depending on your location. We aim to
                    provide fast and reliable shipping across India.
                  </p>
                </section>

                {/* Return Policy */}
                <section className="mb-4">
                  <h5 className="fw-semibold">🔄 Return & Refund Policy</h5>
                  <p className="text-muted">
                    Products can be returned within 7 days of delivery if they
                    are unused and in original packaging. Refunds are processed
                    after successful quality inspection.
                  </p>
                </section>

                {/* Terms */}
                <section className="mb-4">
                  <h5 className="fw-semibold">📜 Terms & Conditions</h5>
                  <p className="text-muted">
                    By using this platform, you agree to comply with our terms
                    and conditions. Misuse of the platform or any fraudulent
                    activity may result in account suspension.
                  </p>
                </section>

                <p className="text-muted text-center mt-4 small">
                  Last updated: January 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
