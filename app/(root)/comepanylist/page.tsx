import Heading from "@/components/shared/Heading";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";
import React from "react";
import Client from "./components/client";
import { redirect } from "next/navigation";
import { getCompany } from "@/app/action/login";

const page = async () => {
  const role = cookies().get("role")?.value;

  if (role != "1") {
    return redirect("/notpermision");
  }
  const reponse = await getCompany();

  return (
    <div className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      <div className="w-full flex flex-row justify-between">
        <Heading title="Company List" textAlign="start" />
      </div>
      <Separator className="my-5 w-full " />
      <Client data={reponse} />
    </div>
  );
};

export default page;
