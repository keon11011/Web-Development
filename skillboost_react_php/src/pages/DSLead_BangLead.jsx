import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import ActionIcon from '../components/ui/button/ActionIcon'
import SearchBar from '../components/ui/placeholder/SearchBar';
import LeadListFilter from '../components/ui/SelectItems/LeadListFilter';
import LeadTableStatus from '../components/ui/chips/LeadTableStatus'

import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import ChevronRight from '../components/icons/Arrow/ChevronRight'

import avatar from '../assets/logo/avatar.svg'

const DSLead_BangLead = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showLeadListFilter, setShowLeadListFilter] = useState(false);
    const [showOptionList, setShowOptionList] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSearchIconClick = () => {
        setShowSearchBar(!showSearchBar);
    };

    const handleFilterIconClick = () => {
        setShowLeadListFilter(!showLeadListFilter);
    };

    const handleOptionIconClick = () => {
        setShowOptionList(!showOptionList);
    };

    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option);
        // Perform any action with the selected option, e.g., save to database filter
    };

    return (
    <main id = "DSLead" className='relative w-full bg-background-secondary flex'>
        <div id='SidebarQL' className='sticky top-0 h-screen'>
            <SidebarQL/>
        </div>
        <div id ="ContentContainer" className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div>
            <HeaderAdmin>Lead</HeaderAdmin>
        </div>
        <div className="relative w-full h-auto rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[36px]">
            <div className='flex justify-between h-[30px] '>
                <div className="flex items-center title-large">Danh sách Lead</div>
                {showSearchBar && <SearchBar previewText='Tìm kiếm Lead'/>}
                <div className='flex space-x-[16px] items-center'>
                    <div className='cursor-pointer block'>
                        <Link to="/lead/thongtin/taolead">
                            <ActionIcon size='Small' icon={<AddPlus width="1.25rem" height="1.25rem"/>}/>
                        </Link>
                    </div>
                    <ActionIcon size='Small' icon={<SearchMagnifyingGlass width="1.25rem" height="1.25rem"/>} onClick={handleSearchIconClick}/>
                    <ActionIcon size='Small' icon={<Filter width="1.25rem" height="1.25rem"/>} onClick={handleFilterIconClick}/>
                    <ActionIcon size='Small' icon={<ArrowDownUp width="1.25rem" height="1.25rem"/>} onClick={handleOptionIconClick}/>
                    {showOptionList && (
                        <div className="absolute top-[56px] right-[16px] z-50 bg-background-primary shadow-md rounded-md p-[12px]">
                            <ul>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 1')}>Từ A-Z</li>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 2')}>Từ Z-A</li>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 3')}>Mới nhất</li>
                                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 4')}>Cũ nhất</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div id='Content' className='flex flex-col space-y-[32px] w-full h-auto'>
                <div id='Table' className="flex w-full rounded-lg border border-outline-table">
                    <table className="table-auto w-full">
                        <thead className='title-small text-text-secondary text-left'> 
                            <tr>
                                <th class="px-[16px] py-[24px]">Lead ID</th>
                                <th class="px-[16px] py-[24px]">Tên Lead</th>
                                <th class="px-[16px] py-[24px] text-center">Thời gian cập nhật gần nhất</th>
                                <th class="px-[16px] py-[24px] text-center">Khóa học quan tâm</th>
                                <th class="px-[16px] py-[24px] text-center">Trạng thái</th>
                                <th class="px-[16px] py-[24px] text-center"></th>
                            </tr>             
                        </thead>
                        <tbody className='body-medium text-text-primary'>
                            <tr className="border-t">
                                <td class="px-[16px] py-[24px]">LEA9021</td>
                                <td class="px-[16px] py-[24px]">
                                <div class="body-medium text-text-primary flex items-center space-x-[12px]">
                                    <div class="w-[28px] h-[28px] shrink-0 rounded-2xl">
                                        <img src={avatar} alt="" className='h-6'></img>
                                    </div>
                                    <div class="flex flex-col justify-start">Phan Văn Trị</div>
                                </div>
                                </td>
                                <td class="px-[16px] py-[24px] text-center">13:00 - 12/11/2023</td>
                                <td class="px-[16px] py-[24px] text-center">IT Business Analyst</td>
                                <td class="flex px-[16px] py-[24px] justify-center"><LeadTableStatus/></td>
                                <td class="items-center text-center">
                                <div className='cursor-pointer block'>
                                    <Link to="/lead/thongtin/xemchitietlead">
                                    <ActionIcon size='Small' icon={<ChevronRight width="1rem" height="1rem"/>} />
                                    </Link>
                                </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {showLeadListFilter && 
                <div className="absolute top-[16px] right-[40px] z-50">
                    <LeadListFilter/>
                </div>
                }
        </div>
        </div>
        </div>
    </main>
  )
}
export default DSLead_BangLead