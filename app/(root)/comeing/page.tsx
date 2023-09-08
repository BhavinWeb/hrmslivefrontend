import CommingSoon from "@/components/shared/coming-soon";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Comeing = () => {
  const role = cookies().get("role")?.value;

  if (role == "1" || role == "2") {
    return redirect("/notpermision");
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CommingSoon />
    </div>
  );
};

export default Comeing;
