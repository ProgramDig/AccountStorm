import React from "react";
import { Routes } from "react-router-dom";

const useRoutesHook = (role: string | null | undefined) => {
  switch (role) {
    case "ADMIN":
      return(
        <Routes>

        </Routes>
      );
    case "USER":
      return(
        <Routes>

        </Routes>
      );
    default:
      return (
        <Routes>

        </Routes>
      );
  }
};

export default useRoutesHook;