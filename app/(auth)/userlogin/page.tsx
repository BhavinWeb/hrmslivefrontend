import UserLoginform from "@/components/forms/UserLoginform";
import Heading from "@/components/shared/Heading";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";     
import { redirect } from "next/navigation"; 
import React from "react";

const UserLogin = () => {
  const cookie = cookies().get("jwt_token")?.value;

  if (cookie) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-10 w-[80%] h-full m-auto">
      <div>
        <Image src={'/logo.svg'} alt="Logo" width={145} height={34}/>
      </div>
        <Heading title="Sign In to Account" description="Enter your credentials to access your account" textAlign="start" />

        <UserLoginform />
    </div>
  );
};

export default UserLogin;
