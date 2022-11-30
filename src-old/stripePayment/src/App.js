import React from "react";
import { Routes, Route } from "react-router-dom";
import Pay from "./Pages/Pay";
import Success from "./Pages/Success";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pay />} />
      <Route path="/payment-success" element={<Success />} />
    </Routes>
  );
};

export default App;
