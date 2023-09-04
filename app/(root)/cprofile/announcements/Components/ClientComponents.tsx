import { CardComponent } from "@/components/shared/Card/CardComponent";
import Image from "next/image";
import React from "react";
import TableComponents from "./TableComponents";

const ClientComponents = () => {
  const data = true;
  return (
    <div>
      <CardComponent className="h-[700px] w-[98%] mt-4">
        {data ? (
          <TableComponents />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col gap-2 items-center">
              <Image
                src={"/svg/clould.svg"}
                alt="cloud"
                width={100}
                height={100}
              />
              <h1 className="opacity-50 text-neutral-800 text-2xl font-semibold">
                No Announcement Found
              </h1>
            </div>
          </div>
        )}
      </CardComponent>
    </div>
  );
};

export default ClientComponents;
