import UserResetPasswordForm from "@/components/forms/UserResetPasswordform";
import UserSingupform from "@/components/forms/UserSingUpform";
import Heading from "@/components/shared/Heading";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation"; 
import React from "react";


const ResetPasswordPage = () => {
  const cookie = cookies().get("jwt_token")?.value;

  if (cookie) {
    redirect("/");
  }

  return (
    <div className="flex flex-col gap-10 w-[80%] h-full m-auto">
      <div>
        <Image src={'/logo.svg'} alt="Logo" width={145} height={34}/>
      </div>
        <Heading title="Reset Password " description="Enter your credentials to access your account" textAlign="start" />

        <UserResetPasswordForm />
    </div>
  );
}

export default ResetPasswordPage