// ----------- import external dependencies ------------
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ------------ import internal dependencies -------------
import { router } from "./routes";
import "./css/main.css";

/**
 * react-query global setup
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (count: number, error: any) =>
        error?.response?.status !== 500 || false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
