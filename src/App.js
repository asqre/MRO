import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerScreen from "./screens/CustomerScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerScreen />} />
    </Routes>
  );
};

export default App;
