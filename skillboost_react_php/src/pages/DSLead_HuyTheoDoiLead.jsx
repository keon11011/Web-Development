import { Link } from 'react-router-dom'

import SidebarNV from '../components/ui/sidebar/SidebarNV'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'; 

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSLead_HuyTheoDoiLead = () => {

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen'>
        <SidebarNV/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin>Phan Văn Trị</HeaderAdmin>
        </div>
        <div id="LeadInfoNavigation" className="flex space-x-[24px]">
          <div className="grow">
            <LeadInfoTab />
          </div>
          <LeadProgressStatus variant="HuyTheoDoi" />
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
            <div id='Header' className='flex justify-between items-center'>
                <div className='flex space-x-[16px] items-center'>
                    <div className='cursor-pointer block'>
                      <Link to="/lead/thongtin">
                        <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                      </Link>
                    </div> 
                    <div className='text-text-primary title-large'>Thông tin khách hàng</div>
                </div>
            </div>
          
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full opacity-50'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput variant='ReadOnly' title='Lead ID' showRedAsterisk>LEA9021</TextInput>
                    <TextInput variant='ReadOnly' title='Họ tên' showRedAsterisk>Phan Văn Trị</TextInput>
                    <DropDown
                        variant='ReadOnly'
                        title="Giới tính"
                        showRedAsterisk
                    >
                        Nam
                    </DropDown>
                </div>
                <div className='flex space-x-[24px]'>
                    <CustomDatePicker 
                      variant='ReadOnly'
                      title='Ngày sinh'
                      showRedAsterisk={true}
                    >
                        07/12/2003
                    </CustomDatePicker>
                    <TextInput variant='ReadOnly' title='Số điện thoại' showRedAsterisk>09883454712</TextInput>
                    <TextInput variant='ReadOnly' title='Email' showRedAsterisk>phanvantri0712@gmail.com</TextInput> 
                </div>
                <div className='flex space-x-[24px]'>
                    <DropDown
                        variant='ReadOnly'
                        title="Nghề nghiệp"
                        showRedAsterisk
                    >
                        Học sinh - Sinh viên
                    </DropDown>
                    <DropDown
                        variant='ReadOnly'
                        title="Nguồn Lead"
                        showRedAsterisk
                    >
                        Website
                    </DropDown>
                    <TextInput variant='ReadOnly' title='PIC (Người tiếp nhận)' showRedAsterisk>Lê Minh Quân</TextInput>  
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        title='Ghi chú'
                        variant='ReadOnly'
                    />
                </div>
            </div>
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Khóa học đã mua</div>
              <div id='Table' className="overflow-x-auto rounded-lg border border-outline-table">
                <table className="table-auto w-full">
                  <thead className='title-small text-text-secondary text-left'>
                    <tr className='border-b'>
                      <th className="w-[649px] px-[16px] py-[24px]">Tên khóa học</th>
                      <th className="w-[649px] px-[16px] py-[24px]">Giảng viên</th>
                      <th className="w-[214px] px-[16px] py-[24px]">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody className='body-medium text-text-primary'>
                    <tr>
                      <td className="w-[649px] px-[16px] py-[24px]">IT Business Analyst</td>
                      <td className="w-[649px] px-[16px] py-[24px]">Ryan Nguyễn</td>
                      <td className="w-[214px] px-[16px] py-[24px]">4.000.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
        </div>
        </div>
    </main>
  );
};

export default DSLead_HuyTheoDoiLead;
