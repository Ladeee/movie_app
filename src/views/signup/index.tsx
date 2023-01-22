import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import GetStarted from "./signupPages/getStarted";

export default function Signup() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetStarted />} />
      </Routes>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
