import SkillboostLogo from '../../../../assets/logo/SkillboostLogo.svg'

import { Routes, Route, Link } from 'react-router-dom'
import ButtonFloat from "../../button/ButtonFloat.jsx"
import HamburgerMd from "../../../icons/Menu/HamburgerMd.jsx"
import DropDown from "../../placeholder/DropDown.jsx"

function Header() {
  return (
    <main>
      <div className='max-sm:px-5 sm:px-40 px-2/5 py-4 text-text-secondary space-x-auto flex w-full justify-between items-center'>
        <div className=' flex max-w-max min-w-max cursor-pointer'>
          <Link to="/trangchu">
            <img
              src={SkillboostLogo}
              alt="Logo"
            />
          </Link>
        </div>


        <nav className="title-medium text-text-secondary ">
          <div name="mobile_devices" className='hidden max-sm:flex cursor-pointer hover:text-brand-default pr-6'>
            <HamburgerMd>
            </HamburgerMd>
          </div>
          <nav name="desktop" className='max-sm:hidden sm:flex flex-row items-center  gap-12'>
            <ul className='py-2 px-2 '>
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
                <Link to="/dangnhap" className="hover:text-brand-default font-bold"><ButtonFloat>Đăng nhập</ButtonFloat></Link>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    </main>


  )
}
export default Header