import Heading from "@/components/shared/Heading";
import { Separator } from "@/components/ui/separator";
import { cookies } from "next/headers";
import React from "react";
import Client from "./components/client";
import { redirect } from "next/navigation";
import AddButton from "@/components/shared/AddButton";
import { getUserList } from "@/app/action/login";

const page = async () => {
  const cookie = cookies().get("jwt_token")?.value;

  const role = cookies().get("role")?.value;

  if (role != "2") {
    return redirect("/notpermision");
  }
  const reponse = await getUserList();

  return (
    <div className="flex min-h-screen flex-col items-center p-4 lg:p-24">
      <div className="w-full flex flex-row justify-between">
        <Heading title="Employe List" textAlign="start" />
        <AddButton isUserR title="Add Employe" />
      </div>
      <Separator className="my-5 w-full " />
      <Client data={reponse} />
    </div>
  );
};

export default page;
