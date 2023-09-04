import HeadingCard from "@/components/shared/Card/HeadingCard";
import React from "react";
import { Button } from "@/components/ui/button";
import ClientComponents from "./components/ClientComponents";

const DepartmentPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeadingCard title="Department">
        <div>
          <Button className="bg-indigo-500 hover:bg-indigo-700 rounded-md">
            Add Department
          </Button>
        </div>
      </HeadingCard>
      <ClientComponents />
    </div>
  );
};

export default DepartmentPage;
