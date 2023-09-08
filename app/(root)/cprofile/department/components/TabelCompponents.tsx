"use client";

import {
  Pagination,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CardComponent } from "@/components/shared/Card/CardComponent";
import { useRouter } from "next/navigation";
import { items } from "@/constants";

const columns = [
  { name: "Departments Name", uid: "departmentsname" },
  { name: "Sub Departments", uid: "subdepartments" },
  { name: "Employees", uid: "employees" },
  { name: "Actions", uid: "actions" },
];

type User = (typeof items)[0];

const TabelCompponents = () => {
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "departmentsname",
    direction: "descending",
  });
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const route = useRouter();

  const pages = Math.ceil(items.length / rowsPerPage);

  const itemsR = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return items.slice(start, end);
  }, [page, rowsPerPage]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "departmentsname":
        return (
          <div className="text-zinc-600 text-base font-normal">
            {user.departmentsname}
          </div>
        );
      case "subdepartments":
        return (
          <div className="flex flex-col">
            <p className="text-zinc-600 text-base font-normal">
              {user.subdepartments}
            </p>
          </div>
        );
      case "employees":
        return (
          <div className="text-zinc-600 text-base font-normal">
            {user.employees}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-4">
            <div>
              <span onClick={() => {route.push(`/cprofile/department/${user.id}`)}} className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Image src={"/svg/eye.svg"} alt="eye" width={16} height={16} />
              </span>
            </div>
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
  },[]);

  const sortedItems = React.useMemo(() => {
    return [...itemsR].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, itemsR]);

  return (
    <div className="flex flex-col gap-4">
      <CardComponent className="w-[98%] h-[479px]">
        <Table sortDescriptor={sortDescriptor} className="h-full" onSortChange={setSortDescriptor}>
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align="center"
                className="text-stone-950 text-base font-medium"
                allowsSorting={column.uid !== "actions"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardComponent>
      <CardComponent className="w-[98%] h-15">
        
        <div className="py-2 px-2 flex justify-between items-center">
        <div>
            <h1>Showing {(1+(rowsPerPage * (page - 1)))} to {`${((page - 1) ===0 ? 1 * rowsPerPage : page === pages ? items.length  : page * rowsPerPage)}`} of {items.length}</h1>

        </div>
          <Pagination
            showControls
            classNames={{
              cursor: "bg-indigo-500 rounded-md",
            }}
            color="primary"
            page={page}
            total={pages}
            variant="light"
            onChange={setPage}
          />
        </div>
      </CardComponent>
    </div>
  );
};

export default TabelCompponents;
