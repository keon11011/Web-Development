import React from 'react'

const Nhantuvan = () => {
  return (
    <div>
        <div class="mb-2 flex ">
            <span class="mb-2 h-[6px] w-[231px]  rounded-xl bg-brand-default"></span>
            <span class="mb-2 h-[6px] w-[231px]  rounded-xl bg-text-third"></span>
            <span class="mb-2 h-[6px] w-[231px]  rounded-xl bg-text-third"></span>
        </div>
        <div className='flex body-small text-text-third '>
            <div className='text-brand-default'>
                Tiếp nhận yêu cầu
            </div>
            <div className='content-center text-center w-[231px]'>Tư vấn</div>
            <div className='content-center text-center w-[231px]'>Báo giá</div>
            <div className='content-center text-center w-[200px]'>Thanh toán</div>
        </div> 
    </div>
  )
}

export default Nhantuvan