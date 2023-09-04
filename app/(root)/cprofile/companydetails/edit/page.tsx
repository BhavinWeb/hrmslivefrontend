import HeadingCard from "@/components/shared/Card/HeadingCard";
import React from "react";
import ClientComponents from "./components/ClientComponents";

const Editpage = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeadingCard title="Company Details">
        <div className="text-right">
          <span className="text-gray-400 text-base font-medium">
            Company Details
          </span>
          <span className="text-slate-500 text-base font-medium">
            {" "}
            {">>"} Edit Profile
          </span>
        </div>
      </HeadingCard>
      <ClientComponents />
    </div>
  );
};

export default Editpage;
