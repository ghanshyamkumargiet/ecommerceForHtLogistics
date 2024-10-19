import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const { auth } = useAuth(); // Destructure as an object

  return (
    <Layout>
      <h1> This is HomePage</h1>

      {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
    </Layout>
  );
};

export default HomePage;
