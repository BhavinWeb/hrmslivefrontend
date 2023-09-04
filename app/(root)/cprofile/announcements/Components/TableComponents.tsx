"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const columns = [
  { name: "Announcement Lists", uid: "name" },
  { name: "Actions", uid: "actions" },
];

const items = [
  {
    id: 1,
    name: "WordPress Theme Development",
    desc: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    name: "WordPress Theme Development",
    desc: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    name: "WordPress Theme Development",
    desc: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    name: "WordPress Theme Development",
    desc: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    name: "WordPress Theme Development",
    desc: "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consectetur.",
  },
];

type Item = (typeof items)[0];

const TableComponents = () => {
  const renderCell = React.useCallback((user: Item, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof Item];

    switch (columnKey) {
      case "name":
        return (
            <div className="flex gap-2">
                <div>
                    <div className="rounded-full p-3 bg-opacity-20 flex items-center bg-slate-400">
                        <Image src={'/svg/briefcase.svg'} alt="briefcase" width={25} height={25} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-neutral-800 text-base font-medium">
                        {user.name}
                    </h1>
                    <p className="text-neutral-400 text-sm font-medium">{user.desc}</p>
                </div>
            </div>
        );

      case "actions":
        return (
          <div className="relative flex items-center gap-4">
            <div>
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Image
                  src={"/svg/edit.svg"}
                  alt="edit"
                  width={16}
                  height={16}
                />
              </span>
            </div>
            <div>
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <Image
                  src={"/svg/trash.svg"}
                  alt="trash"
                  width={16}
                  height={16}
                />
              </span>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="text-neutral-800 text-base font-semibold"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponents;
