import HeadingCard from "@/components/shared/Card/HeadingCard";
import React from "react";
import { Button } from "@/components/ui/button";
import ClientComponents from "./components/ClientComponents";

const DepartmentPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <ClientComponents />
    </div>
  );
};

export default DepartmentPage;
