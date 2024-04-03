import React from 'react';
import ChartLine from '../../icons/Interface/ChartLine';
import Users from '../../icons/User/Users';
import User03 from '../../icons/User/User03';
import Notebook from '../../icons/File/Notebook';
import SkillboostLogo from '../../../assets/logo/SkillboostLogo.svg'


function Sidebar () {
  const activeMenu = true;
  return (
    <main>
      <div className='bg-background-secondary box-border w-[232px] h-screen border-solid border-r border-outline-table'>
          <div className="w-[full] py-5 px-2 flex flex-row gap-[12px]">
            <img className="relative h-[2.125rem]" alt="Logo" src={SkillboostLogo}/>
          </div>
        <ul role="list">
          <li>
        <div className="relative before:absolute before:left-0 before:top-0 before:w-1 before:h-0 hover:before:h-full before:bg-brand-default ">
          <div className="py-[18px] px-4 ">
            <div className="flex flex-row items-center justify-start">
            <a href='#' className=" transition flex gap-[16px] ">
              <div>
                  <ChartLine className='text-text-secondary ' strokeWidth={1.5}/>
              </div>
              <div className="text-text-secondary text-left hover:text-brand-default">Số liệu</div>
            </a>
            </div>
          </div>
        </div>
          </li>
        <li>
        <div className="relative before:absolute before:left-0 before:top-0 before:w-1 before:h-0 hover:before:h-full before:bg-brand-default ">
          <div className="py-[18px] px-4">
            <div className="flex flex-row items-center justify-start">
              <a href='#' className=" transition flex gap-[16px] ">
            <div> <Users id="usersIcon" className = 'text-text-secondary' strokeWidth={1.5} /> 
            </div>
            <div id="leadText" className="relative text-text-secondary text-left hover:text-brand-default">Lead</div>
              </a>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className="relative before:absolute before:left-0 before:top-0 before:w-1 before:h-0 hover:before:h-full before:bg-brand-default">
          <div className="py-[18px] px-4">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <a href="#" className=" transition flex gap-[16px] ">
            <div> <User03  className = 'text-text-secondary' strokeWidth={1.5}/> </div>
            <div className="relative text-text-secondary text-left hover:text-brand-default">Khách hàng</div>
            </a>
            </div>
          </div>
        </div>
        </li>
        <li>
        <div className="relative before:absolute before:left-0 before:top-0 before:w-1 before:h-0 hover:before:h-full before:bg-brand-default ">
          <div className="py-[18px] px-4">
            <div className="flex flex-row items-center justify-start gap-[16px]">
            <a href="#" className=" transition flex gap-[16px] ">
            <div> <Notebook className = 'text-text-secondary' strokeWidth={1.5}/> </div>
            <div className="relative text-text-secondary text-left hover:text-brand-default">Khóa học</div>
            </a>
            </div>
          </div>
        </div>
        </li>
        </ul>
      </div>
    </main>
  )
}

export default Sidebar