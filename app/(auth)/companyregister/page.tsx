import { getCountry } from "@/app/action/login";
import CompanyRegistration from "@/components/forms/CompanyRegistration";
import Heading from "@/components/shared/Heading";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Home = async () => {
  const country_data = await getCountry();
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <Heading
        title="Register Your Company"
        description="Please provide all required details to register your Company with us"
      />
      <Separator className="my-7 w-full sm:w-[60%]" />
      <CompanyRegistration countryData={country_data.data} />
    </main>
  );
}

export default Home;