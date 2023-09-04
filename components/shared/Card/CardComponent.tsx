"use client";

import { cn } from "@/lib/utils";
import React from "react";

const CardComponent = React.forwardRef<
  React.ReactNode,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "border-none w-[341px] h-[294px] shadow-[-8px_0px_20px_0px_rgba(89,102,122,0.18)] rounded-lg overflow-hidden m-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CardComponent.displayName = "CardComponent";

export { CardComponent };
