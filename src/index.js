import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
