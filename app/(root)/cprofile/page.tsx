import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    redirect('/cprofile/companydetails')
  return null
}

export default page