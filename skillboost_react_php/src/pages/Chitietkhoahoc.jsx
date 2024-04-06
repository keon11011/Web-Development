import React from 'react'
import Header from '../components/ui/header_footer/customer/Header'
import Background from '../assets/logo/Background.svg'

const Chitietkhoahoc = () => {
  return (
    <main>
        <div className='absolute z-0 '>
            <img src={Background} alt="" />
        </div>
        <div className='relative'>
            <Header />
        </div>
        
        <div className='relative flex flex-col'>
            Content 
            <div>
                Chứa card + nội dung khóa học
            </div>
            <div className='flex flex-row'>
                Chứa mấy bảng màu trắng
                <div className='flex flex-col'>
                    
                    <div>
                        left-top
                    </div>
                    
                    <div>
                        left-bottom
                    </div>
                </div>

                <div className='flex flex-col'>
                    
                    <div>
                        Right-top
                    </div>

                    <div>
                        right-bottom
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Chitietkhoahoc