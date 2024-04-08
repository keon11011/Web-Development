import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SidebarNV from '../components/ui/sidebar/SidebarNV'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import DropDown from '../components/ui/placeholder/DropDown'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CourseSelector from '../components/ui/SelectItems/CourseSelector'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'

import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'

const DSLead_TaoLead = () => {
  const [showCourseSelector, setShowCourseSelector] = useState(false);

  const [selectedGioiTinh, setselectedGioiTinh] = useState(null);
  const [selectedNgheNghiep, setselectedNgheNghiep] = useState(null);
  const [selectedNguon, setselectedNguon] = useState(null);
  const [selectedNgaySinh, setselectedNgaySinh] = useState(null);

  const handleCourseSelectorClick = () => {
    setShowCourseSelector(!showCourseSelector);
  };

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen'>
        <SidebarNV/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin>Lead</HeaderAdmin>
        </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
          <div id='Header' className='flex items-center space-x-[16px]'>
            <div className='cursor-pointer block'>
              <Link to="/lead/thongtin">
                <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              </Link>
            </div>
            <div className='text-text-primary title-large'>Tạo Lead mới</div>
          </div>
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput title='Họ tên' previewText='Họ tên' showRedAsterisk></TextInput>
                    <DropDown
                        title="Giới tính"
                        previewText="Giới tính"
                        showRedAsterisk
                        options={["Nam", "Nữ", "Khác"]}
                        selectedOption={selectedGioiTinh}
                        setSelectedOption={setselectedGioiTinh}
                    />
                    <CustomDatePicker 
                      title='Ngày sinh'
                      previewText='Ngày sinh'
                      showRedAsterisk={true}
                      selectedDate={selectedNgaySinh}
                      setSelectedDate={setselectedNgaySinh}
                    />
                </div>
                <div className='flex space-x-[24px]'>
                    <TextInput title='Số điện thoại' previewText='Số điện thoại' showRedAsterisk></TextInput>
                    <TextInput title='Email' previewText='Email' showRedAsterisk></TextInput>  
                    <DropDown
                        title="Nghề nghiệp"
                        previewText="Nghề nghiệp"
                        showRedAsterisk
                        options={["Học sinh - Sinh viên", "Giảng viên", "Nhiếp ảnh", "Chuyên viên kinh doanh", "Khác"]}
                        selectedOption={selectedNgheNghiep}
                        setSelectedOption={setselectedNgheNghiep}
                    />
                </div>
                <div className='w-1/3 space-x-[24px]'>
                    <DropDown
                        title="Nguồn"
                        previewText="Nguồn"
                        showRedAsterisk
                        options={["Website", "Người thân", "Facebook", "Instagram", "Khác"]}
                        selectedOption={selectedNguon}
                        setSelectedOption={setselectedNguon}
                    />
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        title='Ghi chú'
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
                      <td colspan="3" className='px-[16px] py-[16px]'>
                        <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleCourseSelectorClick}>Thêm khóa học</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-end'>
                <div className='cursor-pointer block'>
                  <Link to="/lead/thongtin">
                    <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                  </Link>
                </div>
                <Button variant='Primary' size='Medium'>Xác nhận tạo</Button>
            </div>
            </div>
        </div>
        </div>
      {showCourseSelector && 
          <div className="absolute top-[396px] left-[500px] z-50">
              <CourseSelector/>
          </div>
      }
    </main>
  );
};

export default DSLead_TaoLead;
