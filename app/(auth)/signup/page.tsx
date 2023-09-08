import UserSingupform from "@/components/forms/UserSingUpform";
import Heading from "@/components/shared/Heading";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation"; 
import React from "react";


const SingUpPage = () => {
  const cookie = cookies().get("jwt_token")?.value;

  if (cookie) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-10 w-[80%] h-full m-auto">
      <div>
        <Image src={'/logo.svg'} alt="Logo" width={145} height={34}/>
      </div>
        <Heading title="Sign Up for New Account " description="Enter your details to access the new account" textAlign="start" />

        <UserSingupform />
    </div>
  );
}

export default SingUpPage