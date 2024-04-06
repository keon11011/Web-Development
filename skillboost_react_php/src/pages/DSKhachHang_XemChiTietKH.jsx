
import SidebarNV from '../components/ui/sidebar/SidebarNV'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSKhachHang_XemChiTietKH = () => {

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen'>
        <SidebarNV/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin>Nguyễn Anh Thư</HeaderAdmin>
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
            <div id='Header' className='flex justify-between items-center'>
                <div className='flex space-x-[16px] items-center'>
                    <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                    <div className='text-text-primary title-large'>Thông tin khách hàng</div>
                </div>
                <div className="flex space-x-[12px]">
                    <ActionPersonDetail variant="Edit" />
                    <ActionPersonDetail variant="Delete"  />
                </div>
            </div>
          
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput variant='ReadOnly' title='ID khách hàng' showRedAsterisk>CUS4013</TextInput>
                    <TextInput variant='ReadOnly' title='ID chuyển đổi từ Lead'></TextInput>
                    <TextInput variant='ReadOnly' title='Họ tên' showRedAsterisk>Nguyễn Anh Thư</TextInput>
                </div>
                <div className='flex space-x-[24px]'>
                    <DropDown
                        variant='ReadOnly'
                        title="Giới tính"
                        showRedAsterisk
                    >
                        Nữ
                    </DropDown>
                    <CustomDatePicker 
                      variant='ReadOnly'
                      title='Ngày sinh'
                      showRedAsterisk={true}
                    >
                        2024-04-06
                    </CustomDatePicker>
                    <TextInput variant='ReadOnly' title='Số điện thoại' showRedAsterisk>09883451213</TextInput>
                </div>
                <div className='flex space-x-[24px]'>
                    <TextInput variant='ReadOnly' title='Email' showRedAsterisk>lamthukim2222@gmail.com</TextInput>  
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
                </div>
                <div className='w-1/3 space-x-[24px]'>
                    <TextInput variant='ReadOnly' title='PIC (Người tiếp nhận)' showRedAsterisk>Lê Minh Quân</TextInput>  
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        title='Ghi chú'
                        variant='ReadOnly'
                        previewText='Ghi chú'
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

export default DSKhachHang_XemChiTietKH;
