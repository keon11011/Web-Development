import React from 'react'

const LeadInfoTab = () => {
  return (
    <div className="w-full relative rounded-lg 
    bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] flex
    flex-row items-start justify-start gap-[8px] text-left text-base text
    -text-third">       
            <a href="#" className=" transition flex gap-[16px]">
        <div className="relative after:absolute after:bottom-0 after:left-0  after:bg-brand-default after:h-0.5 after:w-0 hover:after:w-full py-0 px-6">
            <div className="flex flex-row items-center justify-center py-4 px-0">
                <div className="relative text-text-third hover:text-brand-default">Thông tin chung</div>
            </div>
        </div> 
            </a>
            <a href="#" className=" transition flex gap-[16px]">
        <div className="relative after:absolute after:bottom-0 after:left-0  after:bg-brand-default after:h-0.5 after:w-0 hover:after:w-full py-0 px-6">
            <div className="flex flex-row items-center justify-center py-4 px-0">
                <div className="relative text-text-third hover:text-brand-default">Báo giá</div>
            </div>
        </div> 
            </a>
            <a href="#" className=" transition flex gap-[16px]">
        <div className="relative after:absolute after:bottom-0 after:left-0  after:bg-brand-default after:h-0.5 after:w-0 hover:after:w-full py-0 px-6">
            <div className="flex flex-row items-center justify-center py-4 px-0">
                <div className="relative text-text-third hover:text-brand-default">Hoạt động</div>
            </div>
        </div> 
            </a>
            <a href="#" className=" transition flex gap-[16px]">
        <div className="relative after:absolute after:bottom-0 after:left-0  after:bg-brand-default after:h-0.5 after:w-0 hover:after:w-full py-0 px-6">
            <div className="flex flex-row items-center justify-center py-4 px-0">
                <div className="relative text-text-third hover:text-brand-default">Mã giảm giá</div>
            </div>
        </div> 
            </a>          
    </div>
  )
}

export default LeadInfoTab