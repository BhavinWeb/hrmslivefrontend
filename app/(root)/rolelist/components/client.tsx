"use client";

import { DataTable } from '@/components/ui/data-tabel';
import React from 'react'
import columns from './columns';

interface Props {
    data: {
        id: number;
        name: string;
        status: number;
    }[]
}

const Client = ({ data }: Props) => {

  const datas = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      status: item.status
    }
  })
  
  return (
    <DataTable columns={columns} data={datas} searchKey='name' />
  )
}

export default Client