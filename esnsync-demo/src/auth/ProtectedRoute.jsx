import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import { getLoggedInUser } from "./auth";

export default function ProtectedRoute() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    setUser(getLoggedInUser());
  }

  if (!user) {
    navigate("/", { replace: true });
    return null;
  }

  return <Outlet />;
}
