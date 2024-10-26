import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviesProvider from "./contexts/MoviesContext.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <MoviesProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <StrictMode>
        <App />
      </StrictMode>
    </MoviesProvider>
  </QueryClientProvider>
);
