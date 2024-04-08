import React from "react";
import SidebarNV from "../components/ui/sidebar/SidebarNV";
import HeaderAdmin from "../components/ui/header_footer/admin/headerad/HeaderAdmin";
import DashboardOverviewCardUp from "../components/ui/card/DashboardOverviewCardUp";
import DashboardOverviewCardDown from "../components/ui/card/DashboardOverviewCardDown";
import LineChart from "../components/ui/chart/LineChart";

const DSLead = () => {
  return (
    <main id="Dashboard">
      <div className="w-full bg-background-secondary relative grid grid-cols-7 gap-4">
        <div className="">
          <SidebarNV />
        </div>
        <div
          id="ContentContainer"
          className="col-span-6 bg-background-secondary px-[64px] py-[32px] space-y-[24px]"
        >
          <div>
            <HeaderAdmin>Số liệu</HeaderAdmin>
          </div>
          <div className="w-max flex-col items-start justify-between p-6 relative rounded-lg ">
            <div className="flex gap-10 ">
              <div className="relative flex items-center">
                <DashboardOverviewCardUp
                  namecard={"Số lượng Lead"}
                  percentchange={"3.1%"}
                  total={"9.901"}
                />
              </div>
              <div className="relative flex items-center">
                <DashboardOverviewCardDown
                  namecard={"Số lượng Khách hàng"}
                  percentchange={"3.1%"}
                  total={"9.901"}
                />
              </div>
            </div>
          </div>
          <div className="w-max flex-col items-start justify-between p-6 relative rounded-lg ">
            <LineChart/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default DSLead;
