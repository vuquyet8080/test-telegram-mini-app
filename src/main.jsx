import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";

WebApp.ready();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex justify-center min-h-screen bg-slate-900">
      <div className="w-full h-full max-w-screen-xl min-h-screen bg-slate-900">
        <App />
      </div>
    </div>
  </React.StrictMode>
);
