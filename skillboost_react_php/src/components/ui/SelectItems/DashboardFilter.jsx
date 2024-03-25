import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../button/Button';

const DashboardFilter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
  return (
    <div class="w-full relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
        <div class=" w-1/3 relative flex flex-col min-w-0 break-words border border-solid border-[#5200FF] rounded-2xl ">   
        <div class="p-2 pl-8 w-full">
                <div class="pl- pt-5 pb-2 title-medium text-text-secondary">Trục X</div> 
                    <div class="grid grid-cols-3 gap-4">
                        <div className="pb-2 flex items-center">
                            <input
                                type="radio"
                                name="activityState1"
                                value="24 giờ qua"
                                id="24gioqua" 
                                className="h-4 w-4 border-gray-300"/>
                            <label htmlFor="24gioqua" className="pl-2 rounded-full cursor-pointer">24 giờ qua</label>
                        </div>
                        <div className="pb-2 flex items-center">
                            <input
                                type="radio"
                                name="activityState1"
                                value="7 ngày qua"
                                id="7ngayqua" 
                                className="h-4 w-4 border-gray-300"/>
                            <label htmlFor="7ngayqua" className="pl-2 rounded-full cursor-pointer">7 ngày qua</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState1"
                                value="4 tuần qua"
                                id="4tuanqua" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="4tuanqua" className="pl-2 rounded-full cursor-pointer">4 tuần qua</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState1"
                                value="3 tháng qua"
                                id="3thangqua" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="3thangqua" className="pl-2 rounded-full cursor-pointer">3 tháng qua</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState1"
                                value="6 tháng qua"
                                id="6thangqua" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="6thangqua" className="pl-2 rounded-full cursor-pointer">6 tháng qua</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState1"
                                value="9 tháng qua"
                                id="9thangqua" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="9thangqua" className="pl-2 rounded-full cursor-pointer">9 tháng qua</label>
                        </div>
                    </div>
            </div>

            <div class="p-2 w-11/12 mx-auto border-t border-1 border-gray"></div>


            <div class="p-2 pt-0 pl-8 pb-4 w-full">
                <div class="pb-2 title-medium text-text-secondary">Trục Y</div> 
                    <div class="grid grid-cols-3 gap-4">
                        <div className="pb-2 flex items-center">
                            <input
                                type="radio"
                                name="activityState"
                                value="Số lượng Lead"
                                id="soluonglead" 
                                className="h-4 w-4 border-gray-300"/>
                            <label htmlFor="soluonglead" className="pl-2 rounded-full cursor-pointer">Số lượng Lead</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState"
                                value="Số lượng Khách hàng"
                                id="soluongkhachhang" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="soluongkhachhang" className="pl-2 rounded-full cursor-pointer">Số lượng Khách hàng</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState"
                                value="Số lượng báo giá"
                                id="soluongbaogia" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="soluongbaogia" className="pl-2 rounded-full cursor-pointer">Số lượng báo giá</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                name="activityState"
                                value="Số lượng yêu cần tư vấn"
                                id="soluongyeucautuvan" 
                                className="h-4 w-4 border-gray-300 :after"/>
                            <label htmlFor="soluongyeucautuvan" className="pl-2 rounded-full cursor-pointer">Số lượng yêu cần tư vấn</label>
                        </div>
                    </div>
            </div>

            <div class="p-2 w-11/12 mx-auto border-t border-1 border-gray"></div>

            <div class="p-2 pt-0 pl-8 w-fit">
              <div class="pb-2 title-medium text-text-secondary">Khoảng thời gian</div>
              <div class="flex flex-row">
                <div>
                    <div class="pt-2 pb-1 body-medium text-text-primary">Ngày bắt đầu</div>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showIcon/>
                </div>
                <div class="mr-6 flex items-center pt-2 pb-1 body-medium text-text-primary">
                    đến
                </div>
                <div>
                    <div class="pt-2 pb-1 body-medium text-text-primary">Ngày kết thúc</div>
                    <DatePicker selected={startDate1} onChange={(date1) => setStartDate1(date1)} showIcon/>
                </div>
              </div>
            </div>

            <div class="p-2 w-11/12 mx-auto border-t border-1 border-gray"></div>

            <div className="p-3 pt-0 display:flex text-right  w-full place-items-right overflow-x-scroll rounded-lg lg:overflow-visible">
              <div className=' relative bg-background-primary space-x-4 p-2 float-left'  >
                <Button size="Small" variant="Secondary">Đặt lại</Button>
              </div>
              <div className=' relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Small" variant="Primary">Xác nhận</Button>
              </div>
              <div className='relative bg-background-primary space-x-4 p-2 float-right'  >
                <Button size="Small" variant="Plain">Hủy</Button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardFilter