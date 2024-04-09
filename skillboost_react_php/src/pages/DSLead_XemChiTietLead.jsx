import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import ActionIcon from '../components/ui/button/ActionIcon'
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail'
import DropDown from '../components/ui/placeholder/DropDown'
import Button from '../components/ui/button/Button'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'; 
import AlertDanger from '../components/ui/inform/AlertDanger';
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'


import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import CloseMd from '../components/icons/Menu/CloseMd'

const DSLead_XemChiTietLead = () => {
  
  //Xác nhận hủy theo dõi Lead
  const [showUnfollowConfirmation, setShowUnfollowConfirmation] = useState(false);
  
  const handleUnfollow = () => {
    setShowUnfollowConfirmation(true);
  };

  const handleCancelUnfollow = () => {
    setShowUnfollowConfirmation(false);
  };

  //Xác nhận xóa Lead
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  
    const handleDelete = () => {
      setShowDeleteConfirmation(true);
    };
  
    const handleCancelDelete = () => {
      setShowDeleteConfirmation(false);
    };

    const [inputs, setInputs] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      getLead();
    }, []);

    function getLead() {
      axios.get(`http://localhost:80/SkillBoost-API/api/Lead/read_single.php?MaLead=${id}`).then(function(response) {
          console.log(response.data);
          setInputs(response.data);
      });
    }

  return (
    <main id='TaoKH' className='w-full bg-background-secondary flex'>
      <div id='Sidebar' className='sticky top-0 h-screen max-sm:relative'>
        <SidebarQL/>
      </div>
      <div id='ContentContainer' className='w-full h-full px-[64px] py-[32px] space-y-[24px]'>
        <div id='Header'>
          <HeaderAdmin progressBar={<Nhantuvan/>}>Phan Văn Trị</HeaderAdmin>
        </div>
          <div id="LeadInfoNavigation" className="flex space-x-[24px]">
            <div className="grow">
              <LeadInfoTab />
            </div>
            <LeadProgressStatus variant="DangTuVan" />
          </div>
        <div id='ContentInside' className="w-full h-full rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-[1.5rem] box-border gap-[1rem] space-y-[24px]">
            <div id='Header' className='flex justify-between items-center'>
                <div className='flex space-x-[16px] items-center'>
                  <div className='cursor-pointer block'>
                      <Link to="/lead/thongtin">
                        <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                      </Link>
                  </div>
                    <div className='text-text-primary title-large'>Thông tin Lead</div>
                </div>
                <div className="flex space-x-[12px]">
                    <div className='cursor-pointer block'>
                      <Link to="/lead/thongtin/chinhsuachitietlead">
                        <ActionPersonDetail variant="Edit" />
                      </Link>
                    </div>
                    <ActionPersonDetail variant="Unfollow" onClick={handleUnfollow}/>
                    <ActionPersonDetail variant="Delete" onClick={handleDelete} />
                </div>
            </div>
          
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput variant='ReadOnly' title='Lead ID' showRedAsterisk value={inputs.MaLead} type="text"/>
                    <TextInput variant='ReadOnly' title='Họ tên' showRedAsterisk value={inputs.HoTenLead} type="text"/>
                    <DropDown
                        variant='ReadOnly'
                        title="Giới tính"
                        showRedAsterisk
                        //value={inputs.GioiTinhLead}
                    >
                      {inputs.GioiTinhLead}
                    </DropDown>
                </div>
                <div className='flex space-x-[24px]'>
                    <CustomDatePicker 
                      variant='ReadOnly'
                      title='Ngày sinh'
                      showRedAsterisk={true}
                    >
                        07/12/2003
                    </CustomDatePicker>
                    <TextInput
                      variant='ReadOnly'
                      title='Số điện thoại'
                      showRedAsterisk
                      value={inputs.SoDienThoaiLead}
                      type="text"
                    />
                    <TextInput
                      variant='ReadOnly'
                      title='Email'
                      showRedAsterisk
                      value={inputs.EmailLead}
                      type="text"
                    /> 
                </div>
                <div className='flex space-x-[24px]'>
                    <DropDown
                        variant='ReadOnly'
                        title="Nghề nghiệp"
                        showRedAsterisk
                    >
                        Học sinh - Sinh viên
                    </DropDown>
                    <DropDown
                        variant='ReadOnly'
                        title="Nguồn Lead"
                        showRedAsterisk
                    >
                        Website
                    </DropDown>
                    <TextInput
                      variant='ReadOnly'
                      title='PIC (Người tiếp nhận)'
                      showRedAsterisk
                    >
                      Lê Minh Quân
                    </TextInput>  
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                        title='Ghi chú'
                        variant='ReadOnly'
                        value={inputs.GhiChuLead}
                        type="text"
                    />
                </div>
            </div>
            <div className='space-y-[16px]'>
              <div className='title-medium text-text-primary'>Khóa học đã mua</div>
              <div id='Table' className="overflow-x-auto rounded-lg border border-outline-table">
                <table className="table-auto w-full">
                  <thead className='title-small text-text-secondary text-left'>
                    <tr className='border-b'>
                      <th className="w-[649px] px-[16px] py-[24px]">Tên khóa học</th>
                      <th className="w-[649px] px-[16px] py-[24px]">Giảng viên</th>
                      <th className="w-[214px] px-[16px] py-[24px]">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody className='body-medium text-text-primary'>
                    <tr>
                      <td className="w-[649px] px-[16px] py-[24px]">IT Business Analyst</td>
                      <td className="w-[649px] px-[16px] py-[24px]">Ryan Nguyễn</td>
                      <td className="w-[214px] px-[16px] py-[24px]">4.000.000đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
        </div>
        {showDeleteConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div>
              <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận xóa Lead</div>
              <div className='absolute top-[36px] right-[36px]'>
              <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelDelete}/>} />
              </div>
              </div>
              <div className='flex flex-col space-y-[16px] w-[463px]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do xóa' previewText='Điền lý do'/>
                </div>
                <AlertDanger>Xóa Lead sẽ không thể được khôi phục</AlertDanger>
              </div>
              <Button variant="Destructive" size='Big' onClick={handleDelete}>Xác nhận xóa</Button>
            </div>
          </div>
        )}
        {showUnfollowConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-50">
            <div className="relative flex flex-col space-y-[24px] bg-white rounded-lg shadow-lg p-8">
              <div>
              <div className='flex w-full justify-center title-large text-text-primary'>Xác nhận hủy theo dõi</div>
              <div className='absolute top-[36px] right-[36px]'>
              <ActionIcon size="Medium" icon={<CloseMd width="1.5rem" height="1.5rem" onClick={handleCancelUnfollow}/>} />
              </div>
              </div>
              <div className='flex flex-col space-y-[16px] w-[auto]'>
                <div className='h-[316px]'>
                  <TextArea title='Lý do hủy theo dõi' previewText='Điền lý do'/>
                </div>
                <AlertDanger>Hủy theo dõi Lead sẽ không thể được khôi phục</AlertDanger>
              </div>
              <div className='cursor-pointer block'>
                  <Link to="/lead/thongtin/huytheodoilead">
                    <Button variant="Destructive" size='Big' stretch='full' onClick={handleUnfollow}>Xác nhận hủy theo dõi</Button>
                  </Link>
                </div> 
            </div>
          </div>
        )}
        </div>
    </main>
  );
};

export default DSLead_XemChiTietLead;
