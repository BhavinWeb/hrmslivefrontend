import { cookies } from 'next/headers';
import React from 'react'
import LeftSidebar from './LeftSidebar';

const ManSidebar = () => {
    const cookie = cookies().get("jwt_token")?.value;
    const role = cookies().get("role")?.value;
  return (
    <div className="border-b">
        <LeftSidebar cookies={cookie || ""} role={role || ""} />
    </div>
  )
}

export default ManSidebar