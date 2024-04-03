import SkillboostLogo from '../../../../assets/logo/SkillboostLogo.svg'


const Header = () => {
  return (
    <div className=' bg-background-third px-[200px] py-[56px] text text-text-secondary flex flex-row space-x-auto w-full justify-between'>
      <div className='w-[238px] h-[46px]'>
        <img src={SkillboostLogo} alt="Logo" />
      </div>
      <div className="flex flex-row title-large text-text-secondary gap-12">
        <a href="#" className="hover:text-brand-default  py-2 px-2 ">Trang chủ</a>
        <a href="#" className="hover:text-brand-default  py-2 px-2 ">Khóa học</a>
        <a href="#" className="hover:text-brand-default  py-2 px-2 ">Liên hệ</a>
      </div>
    </div>
  )
}


export default Header