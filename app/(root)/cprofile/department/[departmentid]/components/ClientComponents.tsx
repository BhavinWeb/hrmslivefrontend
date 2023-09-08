"use client";

import { items } from "@/constants";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import TableComponents from "./TableComponents";

interface Props {
  params: {
    departmentid: string;
  };
}

const ClientComponents = ({ params }: Props) => {
  const route = useRouter();

  const data = items.find((item) => item.id === parseInt(params.departmentid));

  if (!data) {
    route.back();
  }

  return (
    <div>
      <Accordion
        variant="splitted"
        selectionMode="single"
        itemClasses={{
          title: "text-neutral-800 text-lg font-medium",
        }}
      >
        <AccordionItem
          key="1"
          aria-label="Web Development"
          title="Web Development"
        >
          <TableComponents title="Web Development" />{" "}
        </AccordionItem>
        <AccordionItem key="2" aria-label="SEO Teams" title="SEO Teams">
          <TableComponents title="SEO Teams"  />{" "}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Flutter Development"
          title="Flutter Development"
        >
          <TableComponents title="Flutter Development"  />{" "}
        </AccordionItem>
        <AccordionItem key="4" aria-label="Designers" title="Designers">
          <TableComponents title="Designers"  />{" "}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ClientComponents;
