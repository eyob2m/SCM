import { Outlet, useNavigate } from "react-router-dom";
import React from 'react'
import { useEffect } from "react";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Main;
