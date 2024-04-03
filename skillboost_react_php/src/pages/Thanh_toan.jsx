import React from 'react'
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg'
import Background from '../assets/logo/Background.svg'

const Thanh_toan = () => {
  return (
    <div>
      <div className='absolute z-0'>
        <img src={Background} alt=""/>
      </div>

      <div className="relative z-10">
        <div className='py-[100px]'>
          <img src={SkillboostLogo} alt="" />
        </div>
      </div>



    </div>
  )
}

export default Thanh_toan