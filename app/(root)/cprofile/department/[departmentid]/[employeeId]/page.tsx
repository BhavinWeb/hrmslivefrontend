import HeadingCard from '@/components/shared/Card/HeadingCard';
import { TableItems, items } from '@/constants';

import React from 'react'
import ClientComponents from './components/ClientComponents';

interface Props {
    params:{
        departmentid: string;
        employeeId: string;
    }
}

const EmployeePage = ({params}:Props) => {
    const data = items.find((item) => item.id === parseInt(params.departmentid));   
    const da = TableItems.find((item) => item.id === params.employeeId);
  return (
    <div className="flex flex-col gap-2">
      <HeadingCard title="Employee Details">
        <div className="text-right">
          <span className="text-gray-400 text-base font-medium">
            Department
          </span>
          <span className="text-slate-500 text-base font-medium">
            {" "}
            {">>"} {data?.departmentsname || ""}
          </span>
          <span className="text-slate-500 text-base font-medium">
            {" "}
            {">>"} {da?.name || ""}
          </span>
        </div>
      </HeadingCard>
      <ClientComponents />
    </div>
  )
}

export default EmployeePage