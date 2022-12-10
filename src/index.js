import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext/AuthContext";
import TaskContextProvider from "./contexts/taskContext/TaskContextProvider";
import ScrollToTop from "./hooks/scroll-to-top/ScrollToTop";
import { VAAuthContextProvider } from "./contexts/VAContexts/AuthContext";
import { ToastContainer } from "react-toastify";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import reportWebVitals from "./reportWebVitals";
import * as atatus from "atatus-js";
atatus.config("6be34f2b3b1944eca8c000dffbbd5bda").install();

Sentry.init({
  dsn: "https://27853217d7d54bbfa34eb63e578376de@o4504281294176256.ingest.sentry.io/4504282186973184",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <VAAuthContextProvider>
      <AuthContextProvider>
        <TaskContextProvider>
          <ScrollToTop />
          <ToastContainer />
          <App />
        </TaskContextProvider>
      </AuthContextProvider>
    </VAAuthContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
