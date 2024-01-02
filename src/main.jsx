import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ContextProvider from "./context/ContextProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageRouter from "./routes/PageRouter";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ContextProvider>
          <RouterProvider router={PageRouter} />
        </ContextProvider>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
