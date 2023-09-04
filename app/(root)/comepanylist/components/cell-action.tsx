"use client";

import React from "react";
import { userListColums } from "./columns";
import { Button } from "@/components/ui/button";
import { Badge, BadgeCheck, Edit, Trash2 } from "lucide-react";
import { updateCompanyStatus } from "@/app/action/login";
import { useToast } from "@/components/ui/use-toast";

interface CellActionProp {
  data: userListColums;
}

const CellAction: React.FC<CellActionProp> = ({ data }) => {
  const { toast } = useToast();


  const onClickHandler = async (id: number) => {
    const data = await updateCompanyStatus({ id })

    if(data.status === 'fail' || data.status === '404'){
      toast({
        title: data.message,
        duration: 1000
      });
    }else{
      toast({
        title: "Successfully updated Company status",
        duration: 1000
      });
    }
  }

  return (
    <>
      <div className="flex flex-row gap-2 items-center justify-center">
        {data.status ? (
          <Button size="icon" variant="ghost" onClick={() => {}} disabled>
            <BadgeCheck className="h-4 w-4 text-green-600" />
          </Button>
        ) : (
          <Button size="icon" variant="ghost" onClick={() => onClickHandler(data.id)}>
            <Badge className="h-4 w-4 text-red-600" />{" "}
          </Button>
        )}
      </div>
    </>
  );
};

export default CellAction;
