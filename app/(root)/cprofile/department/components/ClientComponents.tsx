"use client";

import React from "react";
import TabelCompponents from "./TabelCompponents";
import HeadingCard from "@/components/shared/Card/HeadingCard";
import { Button } from "@/components/ui/button";
import AddDepartmentModal from "@/components/modal/AddDepartmentModal";

const ClientComponents = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <AddDepartmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <HeadingCard title="Department">
        <div>
          <Button onClick={() => setIsOpen(true)} className="bg-indigo-500 hover:bg-indigo-700 rounded-md">
            Add Department
          </Button>
        </div>
      </HeadingCard>
      <TabelCompponents />
    </div>
  );
};

export default ClientComponents;
