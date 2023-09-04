import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
  icon?: string;
  className?: string;
}

const HeadingCard: React.FC<Props> = ({ title, children, icon, className }) => {
  return (
    <div className="h-[69px] m-auto rounded-[14px] w-[98%] shadow-[-8px_0px_20px_0px_rgba(89,102,122,0.18)] flex items-center p-2 justify-between">
      <div className="flex gap-2 items-center">
        {icon && <Image src={icon} alt="icon" width={24} height={24} />}
        <h1
          className={cn("text-neutral-800 text-2xl font-semibold", className)}
        >
          {title}
        </h1>
      </div>
      <div className="pr-2">{children}</div>
    </div>
  );
};

export default HeadingCard;
