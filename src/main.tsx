import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const doctitle = document.title;
window.addEventListener("blur", () => {
  document.title = "come back 😡";
});
window.addEventListener("focus", () => {
  document.title = doctitle;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
