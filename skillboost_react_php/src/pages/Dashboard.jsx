
import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';

const Dashboard = () => {

    return (
    <main id = "Dashboard" className='relative w-full bg-background-secondary flex'>
        <div id='SidebarQL' className='sticky top-0 h-screen'>
            <SidebarQL/>
        </div>

        <div id ="ContentContainer" className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
          <div>
              <HeaderAdmin>Số liệu</HeaderAdmin>
          </div>
          <div className="relative w-full h-auto gap-[1rem] space-y-[36px]">
            <div className='flex flex-col justify-between h-full space-y-[24px]'>

              {/* Hàng đầu */}
              <div className="flex w-full justify-center space-x-[24px]">
                <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Số lượng Lead
                </div>
                <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Số lượng khách hàng
                </div>
                <div className="flex w-full justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Số lượng khóa học bán ra
                </div>
              </div>

              {/* Hàng hai */}
              <div className="flex w-full justify-center space-x-[24px]">
                <div className="flex w-2/4 h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Line Chart
                </div>
                <div className="flex w-1/4 h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Pie Chart
                </div>
                <div className="flex w-1/4 h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Bar Chart
                </div>
              </div>

               {/* Hàng ba */}
               <div className="flex w-full justify-center space-x-[24px]">
                <div className="flex w-3/4 h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  Column Chart
                </div>
                <div className="flex w-1/4 h-[390px] justify-center items-center rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border">
                  List Items
                </div>
              </div>

              </div>
            </div>
          </div>
    </main>
  )
}
export default Dashboard