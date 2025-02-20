import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GoogleTravelLayout from "./layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <GoogleTravelLayout>
        <App />
      </GoogleTravelLayout>
  </StrictMode>
);
