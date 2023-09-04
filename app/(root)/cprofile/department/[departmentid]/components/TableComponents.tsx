import { TableItems } from "@/constants";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import DeleteModal from "./deleteModal";

const columns = [
  { name: "Employee ID", uid: "id" },
  { name: "Employee Name", uid: "name" },
  { name: "Designation", uid: "designation" },
  { name: "Email ID", uid: "email" },
  { name: "Contact No.", uid: "contactno" },
  { name: "Actions", uid: "actions" },
];

type Item = (typeof TableItems)[0];

const TableComponents = ({ title }: { title: string; }) => {
  const [TableItemsId, setTableItemId] = React.useState(TableItems);
  const route = useRouter();
  const Params = useParams();
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "id",
    direction: "ascending",
  });
  const [isOpen, onClose] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState('');

  const renderCell = React.useCallback((item: Item, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof Item];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-6">
            <div>
              <span
                onClick={() => {
                  route.push(
                    `/cprofile/department/${Params.departmentid}/${item.id}`
                  );
                }}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <Image src={"/svg/eye.svg"} alt="eye" width={16} height={16} />
              </span>
            </div>
            <div>
              <span
                onClick={() => {onClose(true), setDeleteId(item.id)}}
                className="text-lg text-danger cursor-pointer active:opacity-50"
              >
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

  const sortedItems = React.useMemo(() => {
    return [...TableItemsId].sort((a: Item, b: Item) => {
      const first = a[sortDescriptor.column as keyof Item];
      const second = b[sortDescriptor.column as keyof Item];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, TableItemsId]);

  const onConfrom = () => {
    setTableItemId(TableItemsId.filter(item => item.id != deleteId))
    console.log(TableItemsId)
    onClose(false)
  }

  return (
    <>
    <DeleteModal isOpen={isOpen} onClose={() => { onClose(false), setDeleteId('') }} title={title} onConform={() => {onConfrom()}} />
      <Table sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              className="text-neutral-800 text-base font-semibold"
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
    </>
  );
};

export default TableComponents;
