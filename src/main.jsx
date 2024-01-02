import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "../src/admin/context";
import axios from "axios";
import "../src/css/tailwind.css";
import "react-datepicker/dist/react-datepicker.css";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <MaterialTailwindControllerProvider>
        <App />
      </MaterialTailwindControllerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
