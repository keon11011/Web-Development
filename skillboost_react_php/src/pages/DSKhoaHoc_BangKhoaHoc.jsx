import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import CourseTableStatus from '../components/ui/chips/CourseTableStatus'
import ActionIcon from '../components/ui/button/ActionIcon'
import Pagination from '../components/ui/pagination/Pagination.jsx'
import SearchBar from '../components/ui/placeholder/SearchBar'
import CourseListFilter from '../components/ui/SelectItems/CourseListFilter'
import CourseSelector from '../components/ui/SelectItems/CourseSelector.jsx'

import AddPlus from '../components/icons/Edit/AddPlus'
import SearchMagnifyingGlass from '../components/icons/Interface/SearchMagnifyingGlass'
import Filter from '../components/icons/Interface/Filter'
import ArrowDownUp from '../components/icons/Arrow/ArrowDownUp'
import avatar from '../assets/logo/avatar.svg'
import ChervonRightMD from '../components/icons/Arrow/ChevronRightMd'

const DSKhoaHoc_BangKhoaHoc = () => {
  // const [Bgkhoahoc, setBgkhoahoc] = useState([]);
  //   useEffect(() => {
  //       getBgkhoahoc();
  //   }, []);

  //   function getBgkhoahoc() {
  //       axios.get('http://localhost:8080/SkillBoost-API/api/QuyDinhGiamGia/read_all.php').then(function(response) {
  //           console.log(response.data);
  //           setBgkhoahoc(response.data);
  //       });
  //   }
  
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCourseListFilter, setCourseListFilter] = useState(false);
  const [showOptionList, setShowOptionList] = useState(false);
  const [sortOptionSelect, setSortOptionSelect] = useState(null);
  const handleSearchIconClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleCourseListFilterClick = () => {
    setCourseListFilter(!showCourseListFilter);
  };  

  const handleOptionIconClick = () => {
    setShowOptionList(!showOptionList);
  };

  const handleSortOptionSelect = (option) => {
    setSortOptionSelect(option);
  };



  return (
<main id = "DSKhoaHoc_BangKhoaHoc">
<div className='bg-background-secondary relative grid grid-cols-7'>
  <div id='Sidebar'>
    <SidebarQL />
  </div>
    
  <div id="ContentContainer" className='col-span-6 max-sm:col-span-7 bg-background-secondary px-16 max-sm:px-4 py-8 max-sm:h-screen space-y-6' >
    <div id="Header" className='max-sm:pl-20'>
      <HeaderAdmin>Khóa học</HeaderAdmin>
    </div>
      
    <div id="CourseList" className='w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col items-start justify-between p-6'>
      <div className='flex justify-between pb-9 max-sm:pb-4'>

        <div className="relative flex items-center title-large  mr-6">Danh sách khóa học</div>
        <div className="max-sm:hidden">{showSearchBar && <SearchBar previewText='Tìm kiếm khóa học'/>}</div>

          <div className='gap-4 cursor-pointer block'>
            <Link to='khoahocAdmin/taokhoahoc'>
            <ActionIcon icon={<AddPlus width="1.5rem" height="1.5rem"/>}/>
            </Link>
            <ActionIcon icon={<SearchMagnifyingGlass width="1.5rem" height="1.5rem"/>} onClick={handleSearchIconClick}/>
            <ActionIcon icon={<Filter width="1.5rem" height="1.5rem"/>} onClick={handleCourseListFilterClick}/>
            <ActionIcon icon={<ArrowDownUp width="1.5rem" height="1.5rem"/>} onClick={handleOptionIconClick}/>
          </div>

          {showOptionList && (
            <div className="absolute top-[70px] right-4 z-50 bg-background-primary shadow-md rounded-md p-3">
              <ul>
                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 1')}>Từ A-Z</li>
                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 2')}>Từ Z-A</li>
                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 3')}>Mới nhất</li>
                <li className='title-medium text-text-secondary p-[12px] text-right hover:bg-background-third cursor-pointer' onClick={() => handleSortOptionSelect('Option 4')}>Cũ nhất</li>
              </ul>
            </div>
          )}

        </div>

        <div className='sm:hidden flex justify-center pb-4'>            
            {showSearchBar && <SearchBar previewText='Tìm kiếm khóa học'/>}                     
        </div>

      <div className='flex-auto block pb-1'>
        <div id="Table" className='overflow-x-auto'>
          <table className="table-auto w-full my-0 align-middle text-middle text-dark border border-collapse border-neutral-200 rounded-2xl">
            <thead className="align-bottom"> 
            <tr className="title-small text-text-secondary">
                  <th className="pb-3 pl-4 py-3 text-start min-w-[50px] ">ID</th>
                  <th className="pb-3 text-middle min-w-[150px] text-start px-4">Tên khóa học</th>
                  <th className="pb-3 text-middle min-w-[125px]">Giảng viên</th>
                  <th className="pb-3 text-middle min-w-[125px]">Ngày khai giảng</th>
                  <th className="pb-3 text-middle min-w-[125px]">Học phí</th>
                  <th className="pb-3 text-middle min-w-[150px]">Trạng thái</th>
                  <th className="pb-3 text-middle min-w-[25px]"> </th>
                </tr>             
            </thead>

            <tbody>
              <tr className="body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle">
                <td className="px-4 py-3 body-medium">CRS001</td>
                <td className="text-middle mb-1 text-center px-4 py-[11px] items-center">
                <div className=" text-text-primary flex items-center">
                          <div className="relative inline-block shrink-0 pr-3">
                            <img src={avatar} alt="course image" className='h-7 w-7 rounded'></img>
                          </div>
                          <div className="flex flex-col justify-start">
                            <a href="javascript:void(0)" className="items-left ease-in-out body-medium">IT Business Analyst</a>
                          </div>
                  </div>
                </td>
                <td className="py-3 text-center">Ryan Nguyễn</td>
                <td className="py-3 text-center">06/04/2024</td>
                <td className="py-3 text-center">4.000.000đ</td>
                <td className='py-3 flex items-center justify-center'>
                  <CourseTableStatus />
                </td>
                <td>
                  <Link to="/khoahocAdmin/ctkhoahoc">
                <ActionIcon icon={<ChervonRightMD width="1.5rem" height="1.5rem"/>}/>
                  </Link>
                </td>
              </tr>

              <tr className="body-medium text-text-primary border-t border-solid last:border-b-0 align-middle text-middle">
                <td className="px-4 py-3 body-medium">CRS001</td>
                <td className="text-middle mb-1 text-center px-4 py-[11px] items-center">
                <div className=" text-text-primary flex items-center">
                          <div className="relative inline-block shrink-0 pr-3">
                            <img src={avatar} alt="course image" className='h-7 w-7 rounded'></img>
                          </div>
                          <div className="flex flex-col justify-start">
                            <a href="javascript:void(0)" className="items-left ease-in-out body-medium">IT Business Analyst</a>
                          </div>
                  </div>
                </td>
                <td className="py-3 text-center">Ryan Nguyễn</td>
                <td className="py-3 text-center">06/04/2024</td>
                <td className="py-3 text-center">4.000.000đ</td>
                <td className='py-3 flex items-center justify-center'>
                  <CourseTableStatus variant='DangChieuSinh'/>
                </td>
                <td>
                <ActionIcon icon={<ChervonRightMD width="1.5rem" height="1.5rem"/>}/>
                </td>
              </tr>

            </tbody>

          </table>
          </div>
          <div id='Pagination' className='flex w-full justify-end pt-9'>
            <Pagination />
        </div>
      </div>
    </div>
  </div>
</div>
  {showCourseListFilter && 
    <div className="absolute top-[170px] max-sm:right-[30px] max-sm:left-[30px] sm:right-[60px] z-50">
      <CourseListFilter />
    </div>
  }
</main>
  )
}
export default DSKhoaHoc_BangKhoaHoc