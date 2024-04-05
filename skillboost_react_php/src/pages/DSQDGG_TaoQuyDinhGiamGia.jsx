import React, { useState } from "react";
import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import Pagination from '../components/ui/pagination/Pagination';
import ActionIcon from '../components/ui/button/ActionIcon'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import TextInput from '../components/ui/placeholder/TextInput';
import Button from '../components/ui/button/Button'

const DSQDGG_TaoQuyDinhGiamGia = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [width, setWidth] = useState(100);
  const changeWidth = (event) => {
    setWidth(event.target.value);
  };
    const [range, setRange] = useState({ min: 100, max: 300 });
  
    const handleChange = (values) => {
      setRange({ min: values.min, max: values.max });
    };
  return (
<main id = "DSQDGG_TaoQuyDinhGiamGia">
<div className='w-full h-screen bg-background-secondary relative grid grid-cols-7 gap-4'>
    <div className='col-span-1'>
      <SidebarQL/>
    </div>
    <div id ="ContentContainer" className='flex flex-col h-fit col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px]' >
      <div>
        <HeaderAdmin>Quy định giảm giá</HeaderAdmin>
      </div>
      <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 gap-[24px] '>
        <form>
          <div className='pb-5 flex justify-between'>
            <div id='Header' className='flex items-center space-x-[16px]'>
              <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              <div className='text-text-primary title-large'>Tạo quy định giảm giá</div>
            </div>
          </div>
          <div className='flex-auto block pb-1 '>
        <div className='overflow-x-auto'>
          
          <div className='flex flex-col pb-2 '>
            <div className='pb-2 title-medium text-text-secondary'>Mô tả loại giảm giá <text className='text-red-600'>*</text></div>
            <TextInput previewText="Mô tả loại giảm giá" />
          </div>
        
            <div className="pt-4 flex w-full space-x-4">
              <div className='w-1/2 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Số lượng khóa học đăng kí <text className='text-red-600'>*</text></div>
                <TextInput previewText="Số lượng khóa học đăng kí" />
              </div>
              
              <div className='w-1/2 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Nghề nghiệp <text className='text-red-600'>*</text></div>
                <TextInput  previewText="Nghề nghiệp" />
              </div>
            </div>

            <div className="pt-4 flex w-full space-x-4">
              <div className='w-1/4 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Phần trăm giảm giá mặc định <text className='text-red-600'>*</text></div>
                <TextInput previewText="Phần trăm giảm giá mặc định" />
              </div>
              <div className='w-1/4 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Phần trăm giảm giá tối đa <text className='text-red-600'>*</text></div>
                <TextInput previewText="Phần trăm giảm giá mặc định" />
              </div>
              <div className='w-1/4 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Ngày bắt đầu<text className='text-red-600'>*</text></div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showIcon />
              </div>
              <div className='w-1/4 flex-col pb-2 '>
                <div className='pb-2 title-medium text-text-secondary'>Ngày kết thúc <text className='text-red-600'>*</text></div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showIcon />
              </div>
            </div>

         
        </div>
        
      </div>
      <div className="  display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg p-3 lg:overflow-visible">
              <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Medium" variant="Primary">Xác nhận tạo</Button>
              </div>
              <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Medium" variant="Destructive-plain">Hủy tạo</Button>
              </div>
          </div>
          </form>
      </div>
      
    </div>
</div>
</main>
  )
}
export default DSQDGG_TaoQuyDinhGiamGia