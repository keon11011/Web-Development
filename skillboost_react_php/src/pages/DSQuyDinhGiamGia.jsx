import React, { useState } from 'react';
import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import Pagination from '../components/ui/pagination/Pagination';
import ActionIcon from '../components/ui/button/ActionIcon'
import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import  ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import avatar from '../assets/logo/avatar.svg'
import ChervonRightMD from '../components/icons/Arrow/ChevronRightMd'
import DiscountListFilter from '../components/ui/SelectItems/DiscountListFilter';

const DSQuyDinhGiamGia = () => {
  const [showDiscountListFilter, setDiscountListFilter] = useState(false);
  
  const handleDiscountListFilterClick = () => {
    setDiscountListFilter(!showDiscountListFilter);
  };  
  return (
<main id = "DSQuyDinhGiamGia">
<div className='w-full h-screen bg-background-secondary relative grid grid-cols-7 gap-4'>
    <div className='col-span-1'>
      <SidebarQL/>
    </div>
    <div id ="ContentContainer" className='flex flex-col h-screen col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px]' >
      <div>
        <HeaderAdmin>Quy định giảm giá</HeaderAdmin>
      </div>
      <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 gap-[24px] '>
          <div className='pb-5 flex justify-between'>
            <div className="relative flex items-center title-large mr-6">Danh sách quy định giảm giá</div>
            <div className='gap-4'>
            <ActionIcon icon={<AddPlus width="1.5rem" height="1.5rem"/>}/>
            <ActionIcon icon={<SearchMagnifyingGlass width="1.5rem" height="1.5rem"/>}/>
            <ActionIcon icon={<Filter width="1.5rem" height="1.5rem"/>} onClick={handleDiscountListFilterClick}/>
            <ActionIcon icon={<ArrowDownUp width="1.5rem" height="1.5rem"/>}/>
            </div>
          </div>
          <div className='flex-auto block pb-1 '>
        <div className='overflow-x-auto'>
          <table class="w-full my-0 align-middle text-middle text-dark border border-collapse border-neutral-200 rounded-2xl">
            <thead class="align-bottom"> 
            <tr class="title-small text-text-secondary text-center">
                  <th class="pb-3 px-10 py-3 text-start min-w-[50px] ">ID</th>
                  <th class="pb-3 px-3 py-3 text-left min-w-[150px]">Mô tả</th>
                  <th class="pb-3 text-middle min-w-[150px]">Phần trăm giảm giá mặc định</th>
                  <th class="pb-3 text-middle min-w-[150px]">Phần trăm giảm giá tối đa</th>
                  <th class="pb-3 text-middle min-w-[100px]">Thời gian tạo</th>
                  <th class="pb-3 text-middle min-w-[100px]">Tạo bởi</th>
                  <th class="pb-3 text-middle min-w-[50px]"> </th>
                  {/* <th class="pb-3 text-middle min-w-[50px]">Details</th> */}
                </tr>             
            </thead>
            <tbody>
              <tr className=" body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle">
                <td class="pl-10 py-3 body-large text-left">DIS001</td>
                <td class=" px-3 py-3 body-large text-left">Giảm giá cơ bản</td>
                <td class=" px-3 py-3 body-large text-center">0%</td>
                <td class=" px-3 py-3 body-large text-center">10%</td>
                <td class=" px-3 py-3 body-large text-center">00:00 - 01/01/2023</td>
                <td class=" px-3 py-3 body-large text-center">Nguyễn Phương Thanh</td>
                <td></td>
                <td>
                <ActionIcon icon={<ChervonRightMD width="1.5rem" height="1.5rem"/>}/>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <div className='pt-2'><Pagination/></div>
      </div>
      
    </div>
</div>
    {showDiscountListFilter && 
                <div className="absolute top-[160px] right-[60px] z-50">
                    <DiscountListFilter/>
                </div>
      }
</main>
  )
}
export default DSQuyDinhGiamGia