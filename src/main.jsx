import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import PageRoute from "./routes/PageRoute";
import { HelmetProvider } from "react-helmet-async";
import ContextProvider from "./context/ContextProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ContextProvider>
          <RouterProvider router={PageRoute} />
        </ContextProvider>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
