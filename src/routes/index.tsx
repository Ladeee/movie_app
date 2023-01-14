// ----------- import external dependencies -------------
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-blue-500 text-center">
        Welcome to the world of nothingness. All you find is amaazing
      </div>
    ),
  },
]);
