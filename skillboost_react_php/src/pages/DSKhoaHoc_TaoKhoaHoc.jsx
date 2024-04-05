import SidebarNV from '../components/ui/sidebar/SidebarNV'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import Image_01 from '../components/icons/Media/Image01'
import React, { useState } from "react"
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from '../components/ui/placeholder/DatePicker'


const DSBaoGia_TaoBaoGia = () => (
    <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
        <div id='Sidebar' className='sticky top-0 h-screen'>
          <SidebarNV/>
        </div>
        <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
          <div id='Header' >
            <HeaderAdmin>Khóa học</HeaderAdmin>
          </div>

          <div id='ContentInside' className="w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-6 box-border gap-4 space-y-6">
            <div id='Header' className='flex items-center space-x-4'>
              <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              <div className='text-text-primary title-large'>Tạo khóa học</div>
            </div>

            <div id='Content' className='flex flex-col space-y-9 w-full h-full'>
                <div className='flex justify-between space-x-6'>
                    <div className='space-y-6 flex-auto '>
                        <div>
                            <TextInput  title='Tên khóa học' previewText='Nhập tên khóa học'></TextInput>
                        </div>
                        
                        <div>
                            <TextInput  title='Giá tiền hiển thị' previewText='Nhập giá tiền hiển thị'></TextInput>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-[40%]">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-[#BEBEBE]">
                                <Image_01
                                    alt="upload image"
                                    height={36}
                                    width={36}
                                    onClick={() => console.log("Choose image")}
                                />
                                <p class="mb-2 pt-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Chọn từ máy</span> hoặc kéo thả ảnh</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG hoặc GIF</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                </div>

                


            <div className='justify-between flex space-x-6'>
              <div>
                <DatePicker  title='Ngày khai giảng' previewText='Chọn ngày khai giảng'></DatePicker>
              </div>

              <div>
                <TextInput  title='Ngày bế giảng' previewText='Chọn ngày bế giảng'></TextInput>
              </div>

              <div>
                <TextInput  title='Số buổi học' previewText='Nhập số buổi'></TextInput>
              </div>

             

            </div>

            <div className='justify-between flex space-x-6'>
              <div>
                <TextInput  title='Thời gian bắt đầu' previewText='Chọn giờ' ></TextInput>
              </div>


              <div>
                <TextInput  title='Thời gian kết thúc' previewText='Chọn giờ'></TextInput>
              </div>
              
              <div>
                <TextInput  title='Số lượng học viên tối đa' previewText='Nhập số lượng'></TextInput>
              </div>
            </div>     

              <div>
                <TextArea title='Mô tả khóa học' previewText='Nhập mô tả' className="block" variant="Editable">
                  </TextArea>
              </div>

              <div className='flex w-full space-x-[12px] items-center justify-end'>
                <Button variant='Destructive-plain' size='Medium'>Hủy tạo</Button>
                <Button variant='Primary' size='Medium'>Xác nhận tạo</Button>
              </div>
            </div>
          </div>
        </div>
    </main>
)

export default DSBaoGia_TaoBaoGia