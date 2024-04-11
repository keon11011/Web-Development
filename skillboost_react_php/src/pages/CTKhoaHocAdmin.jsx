import './../font.css'

import SidebarQL from '../components/ui/sidebar/SidebarQL.jsx'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin.jsx'
import ActionIcon from '../components/ui/button/ActionIcon.jsx'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail.jsx'

import EditPencil01 from '../components/icons/Edit/EditPencil01.jsx'
import TrashFull from '../components/icons/Interface/TrashFull.jsx'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft.jsx'
import Star from '../components/icons/Interface/Star.jsx'
import UserCheck from '../components/icons/User/UserCheck.jsx'
import UserGroup from '../components/icons/User/UsersGroup.jsx'
import CalendarCheck from '../components/icons/Calendar/CalendarCheck.jsx'
import CalendarClose from '../components/icons/Calendar/CalendarClose.jsx'
import Clock from '../components/icons/Calendar/Clock.jsx'

import React, { useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from "react-router-dom";


const CTKhoaHocAdmin = () => (
  <main id='CTKhoaHocAdmin' className='w-full bg-background-secondary relative grid grid-cols-7 gap-4'>
    <div id='Sidebar'>
      <SidebarQL/>
    </div>
        
    <div id='ContentContainer' className='col-span-6 max-sm:col-span-7 bg-background-secondary px-16 max-sm:px-4 py-8 space-y-6'>
      <div id='Header'>
        <HeaderAdmin>Khóa học</HeaderAdmin> {/*lụm header responsiv */}
      </div>

      <div id='CourseInfo' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex-col p-6 box-border gap-4 space-y-6 justify-between">
        <div id='Header' className='flex items-center space-x-4'>
          <Link to="/khoahocAdmin">
            <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
          </Link>
            <div className='text-text-primary headline-small relative flex items-center mr-6 w-[90%]'>
              IT Business Analysis
            </div>
            <div className='space-x-4 flex max-sm:w-fit'>
              <Link to='/khoahocAdmin/ctkhoahoc/chinhsua'>
                <ActionPersonDetail variant="Edit" icon={<EditPencil01 width="1.5rem" height="1.5rem"/>}/>
              </Link>
                <ActionPersonDetail variant="Delete" icon={<TrashFull width="1.5rem" height="1.5rem"/>}
                  onClick 
                />
            </div>
        </div>
      </div>
  
      <div id='Content' className='flex max-sm:flex-col gap-6 col-span-6 max-sm:col-span-7'>        
        <div className='flex flex-col w-full h-fit relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-6 max-sm:w-full max-sm:flex-none max-sm:mb-6 max-sm:order-2'>
          <div className='headline-small text-text-primary'>
            Mô tả khóa học
          </div>
      
          <div className='body-large text-text-secondary mt-6 inline-block'>
            Khóa học Bachelor of Arts (BA) trong lĩnh vực Công nghệ Thông tin (IT) cung cấp kiến thức và kỹ năng cơ bản về lập trình, quản lý dự án IT, thiết kế phần mềm, và hệ thống thông tin. Học viên sẽ được hướng dẫn trong việc ứng dụng công nghệ để giải quyết các thách thức trong doanh nghiệp và xã hội. Khóa học này không chỉ tập trung vào khía cạnh kỹ thuật, mà còn khuyến khích phát triển kỹ năng phân tích, tư duy logic, và giao tiếp, tạo điều kiện cho học viên trở thành chuyên gia IT đa năng và có sự hiểu biết độ sâu về thế giới số đang phát triển
          </div>
        </div>

        <div className='max-sm:order-1'>
          <div>
            <img
              className="w-[424px] max-sm:w-auto h-auto rounded-lg object-cover object-center relative flex"
              src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
              alt="course image"
            />
          </div>

          <div className='w-[418px] max-sm:w-auto h-auto relative bg-background-primary mt-6 rounded-lg p-6'>
            <div className='headline-small text-brand-default'>
              6.400.000đ
            </div>
            <div className='w-full relative border-t-[0.5px] border-[#e6e6e6] h-[0.5px] my-7'>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <Star className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Đánh giá</p>
              </div>

              <div className='flex'>
                <p className='text-text-secondary pr-1'>5.0</p>
                <Star className='text-sematic-yellow fill-sematic-yellow w-[20px] h-[20px] relative'/>
              </div>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <UserCheck className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Lượt đánh giá</p>
              </div>

                <p className='text-text-secondary pr-1'>18 lượt</p> {/*truyền phần số sau */}
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <UserGroup className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Học viên tối đa</p>
              </div>

                <p className='text-text-secondary pr-1'>5.0</p>
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <CalendarCheck className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Ngày khai giảng</p>
              </div>

                <p className='text-text-secondary pr-1'>11/04/2024</p> {/*gọi ngày ra*/}
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <CalendarClose className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Ngày bế giảng</p>
              </div>

                <p className='text-text-secondary pr-1'>11/09/2024</p>{/*gọi ngày ra*/}
            </div>

            <div className='flex relative flex-row flex-start justify-between text-left mb-6'>
              <div className='flex'>
                <Clock className='w-[20px] h-[20px] mr-3 text-text-secondary'/>
                <p className='body-large text-text-secondary'>Thời gian</p>
              </div>

                <p className='text-text-secondary pr-1'>Thứ 2, 17h00 - 20h00</p> {/*gọi weekday, Timestart ra*/}
            </div>

            <div className='w-full relative flex flex-row items-start justify-end text-right'>
              <p className='text-text-secondary pr-1 inline-block'>Thứ 6, 17h00 - 20h00</p> {/*gọi weekday, Timeend ra*/}              
            </div>

          </div>

        </div>
        
      </div>
      
      

    </div>    
  </main>
)

export default CTKhoaHocAdmin