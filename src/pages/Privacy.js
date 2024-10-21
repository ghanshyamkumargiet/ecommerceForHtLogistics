import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast/headless";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      let auth = localStorage.getItem("auth");

      if (auth) {
        auth = JSON.parse(auth);
      } else {
        toast.error("No authentication data found.");
        console.log(auth);
      }

      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/user-auth`,
        { headers: { Authorization: `${auth?.token}` } }
      );
      if (res.data.data) {
        setOk(true);
      } else {
        Navigate("/login");
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
