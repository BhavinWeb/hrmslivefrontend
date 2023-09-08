import HeadingCard from '@/components/shared/Card/HeadingCard'
import React from 'react'
import ClientComponents from './components/Client'
import { getCompanyDetail } from '@/app/action/login'

const CompanyDetailsPage = async () => {

  const data = await getCompanyDetail();

  return (
    <div className="flex flex-col gap-2">
      <HeadingCard title="Company Details" />
      <ClientComponents data={data} />
    </div>
  );
}

export default CompanyDetailsPage