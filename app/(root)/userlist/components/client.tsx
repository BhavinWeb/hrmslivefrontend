"use client";

import { DataTable } from '@/components/ui/data-tabel';
import React from 'react'
import columns from './columns';

interface Props {
    data: {
        id: number;
        name: string;
        email: string;
        password: string;
        status: string;
        role_id: number;
        role:{
          name: string;
        }
        company:{
          name: string;
        }
    }[]
}

const Client = ({ data }: Props) => {

  const datas = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      companyname: item.company.name,
      rolename: item.role.name,
      role_id: item.role_id
    }
  })
  
  return (
    <DataTable columns={columns} data={datas} searchKey='name' />
  )
}

export default Client