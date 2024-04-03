import SidebarNV from '../components/ui/sidebar/SidebarNV'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab'
import ActionIcon from '../components/ui/button/ActionIcon'
import Button from '../components/ui/button/Button'
import AddPlus from '../components/icons/Edit/AddPlus'
import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import TextInput from '../components/ui/placeholder/TextInput'
import Baogia from '../components/ui/header_footer/admin/progressbar/Baogia'
import Hoanthanh from '../components/ui/header_footer/admin/progressbar/Hoanthanh'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'
import Thanhtoan from '../components/ui/header_footer/admin/progressbar/Thanhtoan'

const DSBaoGia_TaoBaoGia = () => (
    <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
        <div id='Sidebar' className=''>
          <SidebarNV/>
        </div>
        <div id='ContentContainer' className='w-full px-[64px] py-[32px] space-y-[24px]'>
          <div id='Header'>
            <HeaderAdmin>Phan Văn Trị</HeaderAdmin>
          </div>
          <div id='LeadInfoNavigation'>
            <LeadInfoTab/>
          </div>
          <div id='ContentInside' className="w-full h-full relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
            <div id='Header' className='flex items-center space-x-[16px]'>
              <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
              <div className='text-text-primary title-large'>Tạo báo giá</div>
            </div>
            <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
              <div>
                <TextInput  title='Tên báo giá' previewText='Nhập tên báo giá'></TextInput>
              </div>
              <div>
              <div className='title-medium text-text-primary'>Khóa học</div>
              </div>
              <div className='space-y-[16px]'>
                <div className='title-medium text-text-primary'>Khuyến mãi</div>
                <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Thêm khuyến mãi</Button>
              </div>
              <div className='space-y-[16px]'>
                <div className='title-medium text-text-primary'>Email báo giá</div>
                <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Tạo email</Button>
              </div>
            </div>
          </div>
        </div>
    </main>
)

export default DSBaoGia_TaoBaoGia