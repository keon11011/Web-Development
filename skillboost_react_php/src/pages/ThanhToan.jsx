import React from 'react'
import { Link } from 'react-router-dom'
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg'
import Copy from '../components/icons/Edit/Copy'
import Button from '../components/ui/button/Button'
import TextInput from '../components/ui/placeholder/TextInput'
import pay from '../assets/logo/pay.svg'




const ThanhToan = () => {
  return (
    <main className="bg-no-repeat bg-cover bg-[url('./assets/logo/Background.svg')]">
      <div className="relative flex flex-col ">
        <div className='py-[100px] w-full items-center justify-center flex '>
          <img src={SkillboostLogo} alt="" />
        </div>
        <div className=' bg-white py-[36px] px-[64px] max-sm:px-8 h-full rounded-lg self-center items-center justify-center flex flex-col 	'>
          <div className='headline-medium text-center  '>
            Thanh toán
          </div>
          <div className='flex flex-row mt-6 max-sm:flex-col max-sm:items-center max-sm:justify-center'>
            <div className='mr-14 max-sm:mr-0'>
              <div>
                <img src={pay} alt="" />
              </div>
            </div>
            <div className='pl-2 w-full   items-center'>
              <div className='grid grid-cols-2  max-sm:grid-cols-1 gap-8'>
                <div className='gap-y-5 flex flex-col'>
                  <div>
                    <TextInput title='Mã đơn hàng' variant='ReadOnly'> ID01468790</TextInput>
                  </div>
                  <div>
                    <TextInput title='Tên người thụ hưởng' variant='ReadOnly'> Phạm Nhật Phi</TextInput>
                  </div>
                  <div>
                    <TextInput title='Mã giảm giá (nếu có) ' variant='ReadOnly'> LEA00813218_HHSV_01</TextInput>
                  </div>
                </div>
                <div className='gap-y-5 flex flex-col'>
                  <div>
                    <TextInput title='Số tài khoản ' variant='ReadOnly' rightIcon={<Copy width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E' />}> 9353538222</TextInput>
                  </div>
                  <div>
                    <TextInput title='Chi nhánh' variant='ReadOnly'> Vietcombank Hà Nội</TextInput>
                  </div>
                  <div>
                    <TextInput title='Nội dung chuyển khoản ' variant='ReadOnly ' rightIcon={<Copy width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E' />}> ID01468790</TextInput>
                  </div>
                </div>
              </div>
              <div className='body-large text-text-secondary flex flex-col pt-5'>
                Tổng tiền:
                <label for="" class="block mb-2 font-bold text-indigo-500 text-2xl  ">7.990.000đ</label>
              </div>
            </div>

          </div>

        </div>
        <div className='flex justify-center space-x-[24px] mt-10 mb-10'>
          <ul>
            <li>
              <Link to='/trangchu'>
                <Button variant='Outlined'> Trở về trang chủ</Button>
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to='/paid'>
                <Button> Đã thanh toán</Button>
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </main>
  )
}

export default ThanhToan