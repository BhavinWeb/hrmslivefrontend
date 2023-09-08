"use client";

import React, { useState } from 'react'
import { userListColums } from './columns'
import { Button } from '@/components/ui/button'
import { Edit, Trash2 } from 'lucide-react'
import { useDeleteModal } from '@/hooks/deleteModal'
import DeleteModel from '@/components/modal/deleteModal'
import { usePathname, useRouter } from 'next/navigation'
import { DeleteRole } from '@/app/action/login'
import { useRoleModal } from '@/hooks/roleModal'

interface CellActionProp {
    data: userListColums
}

const CellAction: React.FC<CellActionProp> = ({ data }) => {
  const pathname = usePathname();
  const roleModal = useRoleModal();
  const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);


  const DeleteModalHandler = () => {
    DeleteRole({id: data.id, path: pathname})
    setOpen(false)
  }

  return (
    <>
    <DeleteModel 
        isOpen={open}
        loading={loading}
        onClose={() => setOpen(false)}
        onConfirm={DeleteModalHandler}
    />
    <div className='flex flex-row gap-2 items-center justify-center'>
        <Button size='icon' variant='ghost' onClick={() => { roleModal.setData(data); roleModal.onOpen()}}><Edit className='h-4 w-4' /></Button>
        <Button size='icon' variant='destructive' onClick={() => setOpen(true)}><Trash2 className='h-4 w-4' /> </Button>
    </div>
    </>
  )
}

export default CellAction