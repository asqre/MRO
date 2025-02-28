import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerScreen from "./screens/CustomerScreen";
import CreateServiceRequest from "./screens/CreateServiceRequest";
import AppointmentDetailsScreen from "./screens/AppointmentDetailsScreen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomerScreen />} />
      <Route
        path="/createServiceRequest"
        element={<CreateServiceRequest />}
      />
      <Route
        path="/appointmentDetails"
        element={<AppointmentDetailsScreen />}
      />
    </Routes>
  );
};

export default App;
