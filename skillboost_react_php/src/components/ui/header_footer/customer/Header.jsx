import SkillboostLogo from '../../../../assets/logo/SkillboostLogo.svg'
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import ButtonFloat from "../../button/ButtonFloat.jsx"
import HamburgerMd from "../../../icons/Menu/HamburgerMd.jsx"
import CloseMd from "../../../icons/Menu/CloseMd.jsx"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <div className='max-sm:px-5 max-sm:flex-row sm:px-40 py-4 text-text-secondary sm:space-x-auto flex w-full justify-between items-center '>
        <div className='cursor-pointer block'>
          <Link to="/trangchu">
            <img
              src={SkillboostLogo}
              alt="Logo"
            />
          </Link>
        </div>
        <div name="mobile_devices" className="hidden max-sm:flex relative cursor-pointer  max-sm:justify-self-end	">
          <button className='hover:text-brand-default font-bold' onClick={() => setIsOpen((prev) => !prev)}>
            {!isOpen ? (
              <div><HamburgerMd /></div>
            ) : (
              <div><CloseMd></CloseMd></div>
            )}
          </button><div>
            {isOpen && (
              <nav className="absolute top-4 right-0 w-max mt-2 p-2 max-sm:flex-col max-sm:gap-5 z-10 duration-150 rounded-lg bg-white">
                <ul className='py-2 px-2'>
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
                    <Link to="/dangnhap" className="hover:text-brand-default font-bold">Đăng nhập</Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>

        <nav className="title-medium text-text-secondary ">
          <nav name="desktop" className='max-sm:hidden sm:flex flex-row items-center gap-12'>
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