import { Link } from 'react-router-dom'

import SidebarNV from '../components/ui/sidebar/SidebarNV'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import Button from '../components/ui/button/Button'
import AddPlus from '../components/icons/Edit/AddPlus'
import EmptyState from '../assets/state/EmptyState.svg'

const DSKhoaHoc = () => (
    <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
        <div id='Sidebar' className=''>
          <SidebarNV/>
        </div>
        <div id='ContentContainer' className='w-full px-[64px] py-[32px] space-y-[24px]'>
          <div id='Header'>
            <HeaderAdmin>Khóa học</HeaderAdmin>
          </div>
          <div id='ContentInside' className="w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem]">
            <div id='Header' className='flex justify-between items-center'>
              <div className='text-text-primary title-large'>Danh sách khóa học</div>
              <div className='cursor-pointer block'>
                <Link to="/khoahocAdmin/taokhoahoc">
                  <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Tạo khóa học mới</Button>
                </Link>
              </div>
            </div>
            <div id='Content' className='flex flex-col space-y-[32px] w-full h-full items-center justify-center'>
              <img src={EmptyState} alt="EmptySate" />
              <div className='title-large text-text-third'>Hiện chưa có khóa học nào</div>
            </div>
          </div>
        </div>
    </main>
)

export default DSKhoaHoc