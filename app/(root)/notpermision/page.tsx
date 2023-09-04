import React from "react";
import Permissions from "@/components/shared/permission";

const Permission = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Permissions />
      <div> You don&apos;t have permission to access to this page </div>
    </div>
  );
};

export default Permission;
