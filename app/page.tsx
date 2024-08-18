import Shipment from '@/components/Shipment'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = ({params, searchParams}:any) => {
  const currentTab:string= searchParams.tab
  return (
    <div className='flex gap-8 px-4'>
      <div className='relative w-[250px]'>
        <Sidebar activeTab={currentTab}/>
      </div>
      <div className='flex-1'>
          {currentTab==="shipments"&&<Shipment/>}
      </div>
    </div>
  )
}

export default page