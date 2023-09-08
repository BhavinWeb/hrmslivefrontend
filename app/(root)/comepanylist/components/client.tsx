"use client";

import { DataTable } from '@/components/ui/data-tabel';
import React from 'react'
import columns, { userListColums } from './columns';

interface Props {
    data: userListColums[]
}

const Client = ({ data }: Props) => {
  const datas = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      status: item.status,
      website: item.website,
      company_name: item.company_name,
      contact_no: item.contact_no
    }
  })
  
  return (
    <DataTable columns={columns} data={datas} searchKey='name' />
  )
}

export default Client