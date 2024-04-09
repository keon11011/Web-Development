import React, { useState } from "react";
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import DropDown from '../components/ui/placeholder/DropDown'
import ActionIcon from '../components/ui/button/ActionIcon'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import Check from '../components/icons/Interface/Check'
import TextInput from '../components/ui/placeholder/TextInput';
import Button from '../components/ui/button/Button'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail'
import EditPencil01 from '../components/icons/Edit/EditPencil01'; 
import TrashFull from '../components/icons/Interface/TrashFull';
import AlertInfo from '../components/ui/inform/AlertInfo';
import TextArea from '../components/ui/placeholder/TextArea'
import CloseMd from '../components/icons/Menu/CloseMd'


const DSQDGG_XemChiTietQuyDinhGiamGia = () => {
  const [selectedNgheNghiep, setselectedNgheNghiep] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

    const showDialog = () => {
      let dialog = document.getElementById('dialog');
      dialog.classList.remove('hidden');
      dialog.classList.add('flex');
      setTimeout(()=>{
        dialog.classList.add('opacity-100');
      },500);
    };

    const hideDialog = () => {
      let dialog = document.getElementById('dialog');
      dialog.classList.add('opacity-0');
      setTimeout(()=>{
        dialog.classList.add('hidden');
      },5000);
    };

  return (
<main id = "DSQDGG_TaoQuyDinhGiamGia">
<div className='w-full h-screen bg-background-secondary relative grid grid-cols-7 gap-4' onClick={hideDialog}>
    <div className='max-sm:hidden col-span-1'>
      <SidebarQL/>
    </div>
    <div id ="ContentContainer" className='flex flex-col h-fit sm:col-span-6 max-sm:col-span-7 bg-background-secondary px-[64px] py-[32px] space-y-[24px]' >
      <div className="max-sm:hidden">
        <HeaderAdmin>Quy định giảm giá</HeaderAdmin>
      </div>
      <div className="sm:hidden max-sm:headline-medium max-sm:flex max-sm:justify-between max-sm:pr-28 ">
        <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
        <div className="max-sm:font-bold max-sm:text-center max-sm:pt-1">Thông tin quy định giảm giá</div>
      </div>
      <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 gap-[24px] '>
        <form>
          <div className='max-sm:hidden pb-5 flex justify-between'>
            <div id='Header' className=' flex items-center space-x-[16px]'>
              <div className='cursor-pointer block'>
                <Link to="/dsqdgg">
                <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                </Link>
              </div>   
              <div className='text-text-primary title-large '>Thông tin định giảm giá</div>
            </div>
            <div className="flex justify-between space-x-[10px]">
              <Link to ="/dsqdgg/chinhsuadsqdgg">
                <ActionPersonDetail variant='Edit'/>
              </Link>
              <ActionPersonDetail variant='Delete' onClick={handleDelete}/>
            </div>
          </div>
          <div className='sm:hidden pb-5 flex justify-end'>
            <div className="flex justify-between space-x-[10px]">
              <Link to ="/dsqdgg/chinhsuadsqdgg">
                <ActionPersonDetail variant='Edit'/>
              </Link>
              <ActionPersonDetail variant='Delete' onClick={handleDelete}/>
            </div>
          </div>
          <div className='flex-auto block pb-1 '>
        <div className='overflow-x-auto'>

          <div className='flex flex-col pb-2 '>
            <div className='pb-2 title-medium text-text-secondary'>Mô tả loại giảm giá <text className='text-red-600'>*</text></div>
            <TextInput previewText="Mô tả loại giảm giá" />
          </div>

            <div className="pt-4 flex max-sm:flex-col w-full sm:space-x-4">
              <div className='sm:w-1/2 sm:flex-col max-sm:flex-row pb-2 '>
                <TextInput title="Số lượng khóa học đăng kí" showRedAsterisk previewText="Số lượng khóa học đăng kí" />
              </div>

              <div className='w-1/2 sm:flex-col max-sm:flex-row pb-2'>
                <DropDown 
                  title="Nghề nghiệp"
                  previewText='Học sinh - Sinh viên'
                  showRedAsterisk
                  options={["Học sinh - Sinh viên", "Giảng viên", "Nhiếp ảnh", "Chuyên viên kinh doanh", "Khác"]}
                  selectedOption={selectedNgheNghiep}
                  setSelectedOption={setselectedNgheNghiep}
                >
                </DropDown>
              </div>
            </div>

            <div className="pt-4 flex max-sm:flex-col w-full sm:space-x-4">
              <div className='sm:w-1/4 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Phần trăm giảm giá mặc định <text className='text-red-600'>*</text></div>
                <TextInput previewText="Phần trăm giảm giá mặc định" />
              </div>
              <div className='sm:w-1/4 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Phần trăm giảm giá tối đa <text className='text-red-600'>*</text></div>
                <TextInput previewText="Phần trăm giảm giá mặc định" />
              </div>
              <div className='sm:w-1/4 flex-col pb-2 '>
                <CustomDatePicker 
                      title='Ngày bắt đầu'
                      previewText='2003-12-07'
                      showRedAsterisk={true}
                      selectedDate={startDate}
                      setSelectedDate={setStartDate}
                    >
                </CustomDatePicker>
              </div>
              <div className='sm:w-1/4 flex-col pb-2 '>
                <CustomDatePicker 
                      title='Ngày kết thúc'
                      previewText='2003-12-07'
                      showRedAsterisk={true}
                      selectedDate={fromDate}
                      setSelectedDate={setFromDate}
                    >
                </CustomDatePicker>
              </div>
            </div>
        </div>
      </div>
          </form>
      </div>
      {showDeleteConfirmation && (
          <div className="fixed top-0 left-0  w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative max-sm:w-[450px] flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div className="space-x-[24px]">
              <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận xóa quy định giảm giá</div>
              <div className='absolute top-[28px] right-[36px]'>
              <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelDelete}/>} />
              </div>
              </div>
              <div className='flex flex-col space-y-[16px] sm:w-[463px] max-sm:w-[400px]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do xóa' previewText='Nhập lý do xóa'/>
                </div>
                <AlertInfo>Để xóa quy định giảm giá cần điền lý do xóa</AlertInfo>
              </div>
                <Button stretch='full' variant="Destructive" size='Big' onClick={handleDelete && showDialog }>Xác nhận xóa</Button>
            </div>
          </div>
        )}
        <div id="dialog" className="sm:left-1/3 max-sm:left-1/4 flex absolute max-h-[calc(100vh-5em)] h-fit max-w-lg overflow-hidden
          overscroll-contain rounded-md bg-sematic-green p-3 text-white shadow-2xl transition-opacity hidden ">
          <Check width="1.5rem" height="1.5rem"/>
          <h3 className="pl-2 flex-col body-large">Xóa quy định giảm giá thành công</h3>
      </div>
    </div>      
</div>
      
</main>
  )
}
export default DSQDGG_XemChiTietQuyDinhGiamGia