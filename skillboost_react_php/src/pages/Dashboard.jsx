import React, { useState } from "react";
import { Link } from "react-router-dom"
import SidebarQL from "../components/ui/sidebar/SidebarQL";
import HeaderAdmin from "../components/ui/header_footer/admin/headerad/HeaderAdmin";
import DashboardOverviewCardUp from "../components/ui/card/DashboardOverviewCardUp";
import DashboardOverviewCardDown from "../components/ui/card/DashboardOverviewCardDown";
import DashboardOverviewCardNone from "../components/ui/card/DashboardOverviewCardNone";
import LineChart from "../components/ui/chart/LineChart";
import DoughnutChart from "../components/ui/chart/DoughnutChart";
import ColumnChart from "../components/ui/chart/ColumnChart";
import HamburgerMd from "../components/icons/Menu/HamburgerMd.jsx"
import CloseMd from "../components/icons/Menu/CloseMd.jsx"
import ChartLine from '../components/icons/Interface/ChartLine';
import Users from '../components/icons/User/Users';
import User03 from '../components/icons/User/User03';
import Tag from '../components/icons/Interface/Tag';
import Notebook from '../components/icons/File/Notebook';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main id="Dashboard" className='relative w-full bg-background-secondary flex'>
      <div id='SidebarQL' className="sticky left-0 max-sm:hidden">
        <SidebarQL />
      </div>

      <div id="ContentContainer" className="col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px] max-sm:px-0 max-sm:pl-5 max-sm:w-max">
        <div name="mobile" className="hidden max-sm:flex flex-row relative items-center">
          <nav className="absolute top-0 left-[3px] mt-2 max-sm:flex-col max-sm:gap-10 z-10 rounded-lg h-[300px] w-[350px] justify-between">
            <button className='hover:text-brand-default font-bold absolute z-10' onClick={() => setIsOpen((prev) => !prev)}>
              {!isOpen ? (
                <div ><HamburgerMd width="30px" height="30px" /></div>
              ) : (
                <div><CloseMd width="30px" height="30px" className="text-indigo-500" /></div>
              )}
            </button><div>
              {isOpen && (
                <nav className="absolute top-10 left-[-4px] mt-2 p-5 pt-0 max-sm:flex-col max-sm:gap-10 z-10 duration-150 rounded-lg h-max w-max justify-between bg-white border-2 border-indigo-500">
                  <div className=" pl-3 flex flex-col gap-5">
                    <ul className='py-2 px-2 pt-10'>
                      <li>
                        <Link to="/dashboard" className="hover:textbrand-default font-bold flex gap-3">
                          <ChartLine strokeWidth={1.5} />
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                    <ul className=' py-2 px-2 '>
                      <li>
                        <Link to="/lead/thongtin" className="hover:text-brand-default font-bold flex gap-3">
                          <Users strokeWidth={1.5} />
                          Lead
                        </Link>
                      </li>
                    </ul>
                    <ul className=' py-2 px-2 '>
                      <li>
                        <Link to="/khachhang" className="hover:text-brand-default font-bold flex gap-3">
                          <User03 strokeWidth={1.5} />
                          Khách hàng
                        </Link>
                      </li>
                    </ul>
                    <ul className=' py-2 px-2 '>
                      <li>
                        <Link to="/dsqdgg" className="hover:text-brand-default font-bold flex gap-3">
                          <Tag strokeWidth={1.5} />
                          Quy định giảm giá
                        </Link>
                      </li>
                    </ul>
                    <ul className=' py-2 px-2 '>
                      <li>
                        <Link to="/khoahocAdmin" className="hover:text-brand-default font-bold flex gap-3">
                          <Notebook strokeWidth={1.5} />
                          Khóa học
                        </Link>
                      </li>
                    </ul>
                  </div>

                </nav>
              )}
            </div>
          </nav>
          <div className="pl-[120px]">
            <HeaderAdmin>Số liệu</HeaderAdmin>
          </div>
        </div>


        <div className="max-sm:hidden">
          <HeaderAdmin>Số liệu</HeaderAdmin>
        </div>


        {/* Hàng đầu */}
        <div className="flex w-full justify-center space-x-[24px] relative max-sm:overflow-x-scroll max-sm:w-[350px]">
          <div className=" flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
            <DashboardOverviewCardUp
              namecard={"Số lượng Lead"}
              percentchange={"3.1%"}
              total={"9.901"}
            />
          </div>
          <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
            <DashboardOverviewCardDown
              namecard={"Số lượng Lead"}
              percentchange={"3.1%"}
              total={"9.901"}
            />
          </div>
          <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
            <DashboardOverviewCardNone
              namecard={"Số lượng Lead"}
              percentchange={"3.1%"}
              total={"5.861"}
            />
          </div>
        </div>

        {/* Hàng hai */}
        <div className="flex w-full justify-center space-x-[24px] max-sm:space-x-0 max-sm:grid max-sm:grid-cols-1 gap-5">
          <div className="flex w-2/3 h-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border max-sm:w-[400px]">
            <LineChart />
          </div>
          <div className="flex w-1/3 h-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border max-sm:w-[400px]">
            <DoughnutChart />
          </div>
        </div>

        {/* Hàng ba */}
        <div className="flex w-full justify-center space-x-[24px]">
          <div className="flex w-full h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border max-sm:w-[400px] max-sm:h-[450px]">
            <ColumnChart />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
