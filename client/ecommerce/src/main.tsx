import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ShopContextProvider } from "./store/shop-store.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./store/auth-store.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ShopContextProvider>
          <App />
        </ShopContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
