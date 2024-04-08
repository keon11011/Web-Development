import React from 'react';
import SidebarNV from '../components/ui/sidebar/SidebarNV';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import CourseSelector from '../components/ui/SelectItems/CourseSelector';
import ActionIcon from '../components/ui/button/ActionIcon'
import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import avatar from '../assets/logo/avatar.svg'
import ChervonRightMD from '../components/icons/Arrow/ChevronRightMd'

const DSLead = () => {
  return (
    <main id="DSLead">
      <div className='w-full bg-background-secondary relative grid grid-cols-7 gap-4'>
        <div className='col-span-1'>
          <SidebarNV />
        </div>
        <div id="ContentContainer" className='col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px]' >
          <div>
            <HeaderAdmin>Lead</HeaderAdmin>
          </div>
          <div className='w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6 gap-[24px] '>
            <div className='flex justify-between'>
              <div className="relative flex items-center title-large mr-6">Danh sách Lead</div>
              <div className='gap-4'>
                <ActionIcon icon={<AddPlus width="1.5rem" height="1.5rem" />} />
                <ActionIcon icon={<SearchMagnifyingGlass width="1.5rem" height="1.5rem" />} />
                <ActionIcon icon={<Filter width="1.5rem" height="1.5rem" />} />
                <ActionIcon icon={<ArrowDownUp width="1.5rem" height="1.5rem" />} />
              </div>
            </div>
            <div className='flex-auto block pb-1 '>
              <div className='overflow-x-auto'>
                <table class="w-full my-0 align-middle text-middle text-dark border border-collapse border-neutral-200 rounded-2xl">
                  <thead class="align-bottom">
                    <tr class="title-small text-text-secondary">
                      <th class="pb-3 px-10 py-3 text-start min-w-[50px] ">Lead ID</th>
                      <th class="pb-3 text-middle min-w-[150px]">Tên khách hàng</th>
                      <th class="pb-3 text-middle min-w-[100px]">Thời gian cập nhật gần nhất</th>
                      <th class="pb-3 text-middle min-w-[150px]">Khóa học quan tâm</th>
                      <th class="pb-3 text-middle min-w-[100px]">Trạng thái</th>
                      <th class="pb-3 text-middle min-w-[50px]"> </th>
                      {/* <th class="pb-3 text-middle min-w-[50px]">Details</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle">
                      <td class="pl-10 px-3 py-3 body-large">LEA9021</td>
                      <td class="text-middle mb-1 text-center px-2 py-1 items-center">
                        <div class="body-medium text-text-primary flex items-center">
                          <div class="relative inline-block shrink-0 rounded-2xl pl-5 pr-5">
                            <img src={avatar} alt="" className='h-6'></img>
                          </div>
                          <div class="flex flex-col justify-start">
                            <a href="javascript:void(0)" class="mb-1 items-center ease-in-out   ">Phan Văn Trị</a>
                          </div>
                        </div>
                      </td>
                      <td class="pl-20 px-3 py-3 body-large">13:00 - 12/11/2023</td>
                      <td class="pl-20 px-3 py-3 body-large">IT Business Analysis</td>
                      <td></td>
                      <td>
                        <ActionIcon icon={<ChervonRightMD width="1.5rem" height="1.5rem" />} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
export default DSLead