import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const Tablebody = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-none">
          <TableHead className="text-center">Full Name</TableHead>
          <TableHead className="text-center">Department</TableHead>
          <TableHead className="text-center">Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-none">
          <TableCell className="font-medium">Vinay Alexa</TableCell>
          <TableCell>Flutter Developer</TableCell>
          <TableCell>Tech Interview</TableCell>
        </TableRow>
        <TableRow className="border-none">
          <TableCell className="font-medium">Vinay Alexa</TableCell>
          <TableCell>Flutter Developer</TableCell>
          <TableCell>Tech Interview</TableCell>
        </TableRow>
        <TableRow className="border-none">
          <TableCell className="font-medium">Vinay Alexa</TableCell>
          <TableCell>Flutter Developer</TableCell>
          <TableCell>Tech Interview</TableCell>
        </TableRow>
        <TableRow className="border-none">
          <TableCell className="font-medium">Vinay Alexa</TableCell>
          <TableCell>Flutter Developer</TableCell>
          <TableCell>Tech Interview</TableCell>
        </TableRow>
        <TableRow className="border-none">
          <TableCell className="font-medium">Vinay Alexa</TableCell>
          <TableCell>Flutter Developer</TableCell>
          <TableCell>Tech Interview</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Tablebody;
