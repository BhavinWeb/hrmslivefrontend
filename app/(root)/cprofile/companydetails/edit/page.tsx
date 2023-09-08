import HeadingCard from "@/components/shared/Card/HeadingCard";
import React from "react";
import ClientComponents from "./components/ClientComponents";
import { getCompanyDetail, getCountry } from "@/app/action/login";

const Editpage = async () => {

  const data = await getCompanyDetail();
  const country_data = await getCountry();

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
      <ClientComponents data={data} countryData={country_data.data} />
    </div>
  );
};

export default Editpage;
