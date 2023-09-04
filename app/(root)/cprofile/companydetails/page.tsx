import HeadingCard from '@/components/shared/Card/HeadingCard'
import React from 'react'
import ClientComponents from './components/Client'

const CompanyDetailsPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeadingCard title="Company Details" />
      <ClientComponents />
    </div>
  );
}

export default CompanyDetailsPage