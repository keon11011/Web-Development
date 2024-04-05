import SkillboostLogo from '../../../../assets/logo/SkillboostLogo.svg'

import { Routes, Route, Link } from 'react-router-dom'
import TrangChu from '../../../../pages/TrangChu.jsx'



function Header() {
  return (
    <div className='xl:px-40 px-2/5 py-4 text-text-secondary space-x-auto flex w-full justify-between '>
      <div className='w-[238px] h-[46px] max-w-max min-w-max cursor-pointer'>
        <Link to="/trangchu">
          <img
            src={SkillboostLogo}
            alt="Logo"
            width={300}
            height={100}
          />
        </Link>
      </div>
      <nav className="flex flex-row title-medium text-text-secondary gap-12">
        <ul className=' py-2 px-2 '>
          <li>
            <Link to="/trangchu" className="hover:text-brand-default font-bold">Trang chủ</Link>
          </li>
        </ul>
        <ul className=' py-2 px-2 '>
          <li>
            <Link to="/khoahoc" className="hover:text-brand-default font-bold">Khóa học</Link>
          </li>
        </ul>
        <ul className=' py-2 px-2 '>
          <li>
            <Link to="/lienhe" className="hover:text-brand-default font-bold">Liên hệ</Link>
          </li>
        </ul>
      </nav>



    </div>

  )
}
export default Header