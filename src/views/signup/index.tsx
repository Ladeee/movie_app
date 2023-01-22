import React from "react";
import SignupPageOne from "./signupPages/getStarted";
import { Routes, Route, Outlet } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignupPageOne />} />
      </Routes>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
