import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext/AuthContext";
import TaskContextProvider from "./contexts/taskContext/TaskContextProvider";
import ScrollToTop from "./hooks/scroll-to-top/ScrollToTop";
import { VAAuthContextProvider } from "./contexts/VAContexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <VAAuthContextProvider>
      <AuthContextProvider>
        <TaskContextProvider>
          <ScrollToTop />
          <App />
        </TaskContextProvider>
      </AuthContextProvider>
    </VAAuthContextProvider>
  </BrowserRouter>
);
