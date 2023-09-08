import HeadingCard from "@/components/shared/Card/HeadingCard";
import { items } from "@/constants";
import React from "react";
import ClientComponents from "./components/ClientComponents";

interface Props {
  params: {
    departmentid: string;
  };
}

const DepartmentIdpage = ({ params }: Props) => {
  const data = items.find((item) => item.id === parseInt(params.departmentid));

  return (
    <div className="flex flex-col gap-2">
      <HeadingCard title={data?.departmentsname || ""}>
        <div className="text-right">
          <span className="text-gray-400 text-base font-medium">
            Department
          </span>
          <span className="text-slate-500 text-base font-medium">
            {" "}
            {">>"} {data?.departmentsname || ""}
          </span>
        </div>
      </HeadingCard>
      <ClientComponents params={params}/>
    </div>
  );
};

export default DepartmentIdpage;
