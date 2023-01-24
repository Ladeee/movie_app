// ----------- import external dependencies ------------
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

// ------------ import internal dependencies -------------
import { router } from "./routes";
import "./css/main.css";
import theme from "./components/reuseableStyles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
