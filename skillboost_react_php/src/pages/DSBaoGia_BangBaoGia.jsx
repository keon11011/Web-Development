import React, { useState } from 'react';

import SidebarNV from '../components/ui/sidebar/SidebarNV';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import ActionIcon from '../components/ui/button/ActionIcon';
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan';
import Pagination from '../components/ui/pagination/Pagination';
import SearchBar from '../components/ui/placeholder/SearchBar';
import LeadQuotationListFilter from '../components/ui/SelectItems/LeadQuotationListFilter';

import AddPlus from '../components/icons/Edit/AddPlus';
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass';
import Filter from '../components/icons/Interface/Filter';
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp';
import ChevronRight from '../components/icons/Arrow/ChevronRight';

const DSBaoGia_BangBaoGia = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showLeadQuotationListFilter, setShowLeadQuotationListFilter] = useState(false);
    const [showOptionList, setShowOptionList] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSearchIconClick = () => {
        setShowSearchBar(!showSearchBar);
    };

    const handleFilterIconClick = () => {
        setShowLeadQuotationListFilter(!showLeadQuotationListFilter);
    };

    const handleOptionIconClick = () => {
        setShowOptionList(!showOptionList);
    };

    const handleSortOptionSelect = (option) => {
        setSelectedSortOption(option);
        // Perform any action with the selected option, e.g., save to database filter
    };

    return (
        <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
            <div id='Sidebar' className='sticky top-0 h-screen'>
                <SidebarNV/>
            </div>
            <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
                <div id='Header'>
                    <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
                </div>
                <div id='LeadInfoNavigation'>
                    <LeadInfoTab/>
                </div>
                <div id='ContentInside' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[36px]">
                    <div id='Header' className='flex justify-between items-start h-[30px]'>
                        <div className='text-text-primary title-large'>Danh sách báo giá</div>
                        {showSearchBar && <SearchBar previewText='Tìm kiếm báo giá'/>} 
                        <div id='ActionIconSet' className='flex space-x-[16px]'>
                            <ActionIcon size='Small' icon={<AddPlus width="1.25rem" height="1.25rem"/>} />
                            <ActionIcon size='Small' icon={<SearchMagnifyingGlass width="1.25rem" height="1.25rem"/>} onClick={handleSearchIconClick} />
                            <ActionIcon size='Small' icon={<Filter width="1.25rem" height="1.25rem"/>} onClick={handleFilterIconClick}/>
                            <ActionIcon size='Small' icon={<ArrowDownUp width="1.25rem" height="1.25rem"/>} onClick={handleOptionIconClick} />
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
                                        <th className="px-[16px] py-[24px]">ID</th>
                                        <th className="w-[278px] px-[16px] py-[24px]">Tên báo giá</th>
                                        <th className="px-[16px] py-[24px] text-center">Trạng thái</th>
                                        <th className="px-[16px] py-[24px] text-center">Thời gian chỉnh sửa lần cuối</th>
                                        <th className="px-[16px] py-[24px] text-center">Tổng tiền</th>
                                        <th className="px-[16px] py-[24px] text-center">Người thực hiện</th>
                                    </tr>
                                </thead>
                                <tbody className='body-medium text-text-primary'>
                                    <tr className="border-t">
                                        <td className="px-[16px] py-[24px]">QUO712</td>
                                        <td className="px-[16px] py-[24px]">Báo giá khóa học IT Business Analyst</td>
                                        <td className="px-[16px] py-[24px] text-center">Nháp</td>
                                        <td className="px-[16px] py-[24px] text-center">13:10 - 11/12/2023</td>
                                        <td className="px-[16px] py-[24px] text-center">4.000.000đ</td>
                                        <td className="px-[16px] py-[24px] text-center">PIC</td>
                                        <td><ActionIcon size='Small' icon={<ChevronRight width="1rem" height="1rem"/>} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id='Pagination' className='flex w-full justify-end'>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            {showLeadQuotationListFilter && 
                <div className="absolute top-[220px] right-[64px] z-50">
                    <LeadQuotationListFilter/>
                </div>
            }
        </main>
    );
}

export default DSBaoGia_BangBaoGia;