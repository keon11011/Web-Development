import React from 'react'
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg'
import Background from '../assets/logo/Background.svg'
import qrcode from '../assets/logo/qrcode.svg'
import Copy from '../../src/components/icons/Edit/Copy'
import ButtonFloat from '../components/ui/button/ButtonFloat'
import ArrowUndoUpLeft from '../components/icons/Arrow/ArrowUndoUpLeft';
import TextInput from '../components/ui/placeholder/TextInput'




const Thanh_toan = () => {
  return (
    
    <div className=''> 
      <div className='absolute z-0 '>
        <img src={Background} alt=""/>
      </div>
      
      <div className="relative z-10 flex flex-col ">
        <div className='py-[100px] w-full  items-center justify-center flex order-first'>
          <img src={SkillboostLogo} alt="" />
        </div>
        <div className=' bg-background-secondary py-[36px] px-[64px] rounded-lg self-center	 max-w-max items-center justify-center flex flex-col 	'>
          <div className='headline-medium text-center  '>
            Thanh toán
          </div>
          <div className='flex flex-row mt-6'>
            <div className='mr-14'>
              <div className='title-medium text-text-secondary '>
                Quét mã QR bên dưới để tiến hành thanh toán
              </div>
              <div>
                <img src={qrcode} alt="" />
              </div>
            </div>
            <div className='w-full pl-2'>
              <div>
                <TextInput></TextInput>
              </div>
              <form action="">
                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="fName" class="mb-3 block text-base title-medium text-text-secondary">
                        Mã đơn hàng
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="0"
                          className="w-full rounded-md border border-outline-placeholder bg-white py-[14px] px-[16px] text-base body-large text-text-secondary outline-none focus:border-brand-default focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="lName" class="mb-3 block text-base title-medium text-text-secondary">
                          Mã giảm giá (nếu có)
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="0"
                          class="w-full rounded-md border border-outline-placeholder bg-white py-[14px] px-[16px] text-base body-large text-text-secondary outline-none focus:border-brand-default focus:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="fName" class="mb-3 block text-base title-medium text-text-secondary">
                        Tên người thụ hưởng
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="0"
                          className="w-full rounded-md border border-outline-placeholder bg-white py-[14px] px-[16px] text-base body-large text-text-secondary outline-none focus:border-brand-default focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5 relative w-full">
                        <label for="lName" class="mb-3 block text-base title-medium text-text-secondary">
                          Số tài khoản
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="0"
                          class="w-full rounded-md border border-outline-placeholder bg-white py-[14px] px-[16px] text-base body-large text-text-secondary outline-none focus:border-brand-default focus:shadow-md"
                        />
                        <button type="button" className='text-text-secondary hover:text-gray-900  flex absolute inset-y-0 right-0 items-center pr-3 '>
                            <Copy width="20px" height="20px"/>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="-mx-3 flex flex-wrap">
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5">
                        <label for="fName" class="mb-3 block text-base title-medium text-text-secondary">
                        Chi nhánh
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="0"
                          className="w-full rounded-md border border-outline-placeholder bg-white py-[14px] px-[16px] text-base body-large text-text-secondary outline-none focus:border-brand-default focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div class="w-full px-3 sm:w-1/2">
                      <div class="mb-5 relative w-full">
                        <label for="lName" class="mb-3 block text-base title-medium text-text-secondary">
                          Nội dung chuyển khoản
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="0"
                          className="w-full rounded-md border border-outline-placeholder bg-white py-[14px] px-[16px] text-base body-large text-text-secondary outline-none focus:border-brand-default focus:shadow-md "
                        />
                        <button type="button" className='text-text-secondary hover:text-gray-900  flex absolute inset-y-0 right-0 items-center pr-3 '>
                            <Copy width="20px" height="20px"/>
                        </button>
                      </div>
                    </div>
                  </div>


                  

                  



      



      

      

      
              </form>
            </div>
          </div>

          <div className='body medium text-text-secondary'>
              Tổng tiền:
          </div>
        </div>


        <div>
          <ButtonFloat leftIcon={<ArrowUndoUpLeft width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}> Quay về khóa học</ButtonFloat>
        </div>
      </div>



    </div>
  )
}

export default Thanh_toan