import React from "react";
import SidebarQL from "../components/ui/sidebar/SidebarQL";
import HeaderAdmin from "../components/ui/header_footer/admin/headerad/HeaderAdmin";
import DashboardOverviewCardUp from "../components/ui/card/DashboardOverviewCardUp";
import DashboardOverviewCardDown from "../components/ui/card/DashboardOverviewCardDown";
import DashboardOverviewCardNone from "../components/ui/card/DashboardOverviewCardNone";
import LineChart from "../components/ui/chart/LineChart";
import DoughnutChart from "../components/ui/chart/DoughnutChart";
import ColumnChart from"../components/ui/chart/ColumnChart";
import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';

const Dashboard = () => {

    return (
    <main id = "Dashboard" className='relative w-full bg-background-secondary flex'>
        <div id='SidebarQL'>
            <SidebarQL/>
        </div>
        <div
          id="ContentContainer"
          className="col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px]"
        >
          <div>
            <HeaderAdmin>Số liệu</HeaderAdmin>
          </div>
          {/* Hàng đầu */}
          <div className="flex w-full justify-center space-x-[24px]">
            <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
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
          <div className="flex w-full justify-center space-x-[24px]">
            <div className="flex w-2/3 h-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
              <LineChart />
            </div>
            <div className="flex w-1/3 h-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
              <DoughnutChart />
            </div>
          </div>

          {/* Hàng ba */}
          <div className="flex w-full justify-center space-x-[24px]">
            <div className="flex w-full h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
              <ColumnChart/>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
};
export default DSLead;
