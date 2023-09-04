import NotFounds from "@/components/shared/NotFounds";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <NotFounds />
    </div>
  );
};

export default NotFound;
