import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationForm from "../pages/ApplicationFormPage";
import CreateTrip from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTrip from "../pages/ListTripsPages";
import LoginPage from "../pages/LoginPage";
import TripDetails from "../pages/TripDetailsPage";


export const Router = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="loginPage/:Admin" element={<AdminHomePage/>}/>
      <Route path="listTrip/:Form" element={<ApplicationForm/>}/>
      <Route path="loginPage/:Admin/CreateTrip" element={<CreateTrip/>}/>
      <Route path="ListTrip" element={<ListTrip/>}/>
      <Route path="LoginPage" element={<LoginPage/>}/>
      <Route path="TripDetails" element={<TripDetails/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}
export default Router;