import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

const useRoutesHook = (role: string | null | undefined) => {
  switch (role) {
    case "ADMIN":
      return (
        <Routes>
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      );
    case "USER":
      return (
        <Routes>
          <Route path={"/home"} element={<HomePage />} />
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/login" replace/>}/>
        </Routes>
      );
  }
};

export default useRoutesHook;