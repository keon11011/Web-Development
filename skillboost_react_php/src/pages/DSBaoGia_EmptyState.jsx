import React from 'react'
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import Button from '../components/ui/button/Button'
import AddPlus from '../components/icons/Edit/AddPlus'
import EmptyState from '../assets/state/EmptyState.svg'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'

const DSBaoGia_EmptyState = () => (
  <main id='DSBaoGia_EmptyState'>    
    <div className='w-full bg-background-secondary relative grid grid-cols-7'>
      
      <div id='Sidebar'>
        <SidebarQL/>
      </div>

      <div id='ContentContainer' className='col-span-6 max-sm:col-span-7 bg-background-secondary px-16 max-sm:px-4 py-8 h-auto space-y-6'>
        <div id='Header' className='max-sm:pl-16'>
          <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
        </div>

        <div id='LeadInfoNavigation'>
          <LeadInfoTab/>
        </div>

        <div id='ContentInside' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6">
          <div id='Header' className='flex justify-between'>
            <div className='text-text-primary title-large flex items-center '>Danh sách báo giá</div>
              <Link to='/lead/dsbaogia/taobaogia'>
                <Button 
                variant='Neutral' 
                size='Medium' 
                leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}
                />}>Tạo báo giá mới</Button>
              </Link>
            </div>

            <div id='Content' className='flex flex-col space-y-8 w-full h-screen items-center justify-center'>
              <img src={EmptyState} alt="EmptySate" />
              <div className='title-large text-text-third'>Hiện chưa có báo giá nào</div>
            </div>
        </div>
      </div>
    </div>
  </main>
)

export default DSBaoGia_EmptyState