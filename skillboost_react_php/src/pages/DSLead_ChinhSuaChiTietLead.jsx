import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL'
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin'
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan'
import ActionIcon from '../components/ui/button/ActionIcon'
import DropDown from '../components/ui/placeholder/DropDown'
import Button from '../components/ui/button/Button'
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import CustomDatePicker from '../components/ui/placeholder/CustomDatePicker'
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus'; 
import CourseSelector from '../components/ui/SelectItems/CourseSelector'

import ChevronLeft from '../components/icons/Arrow/ChevronLeft'
import AddPlus from '../components/icons/Edit/AddPlus'


const DSLead_ChinhSuaChiTietLead = () => {

  const [showCourseSelector, setShowCourseSelector] = useState(false);

  const [selectedGioiTinh, setselectedGioiTinh] = useState(null);
  const [selectedNgheNghiep, setselectedNgheNghiep] = useState(null);
  const [selectedNguon, setselectedNguon] = useState(null);

  const handleCourseSelectorClick = () => {
      setShowCourseSelector(!showCourseSelector);
    };

  //Hiển thị data dưới BE lên
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();
 
  useEffect(() => {
    getLead();
  }, []);

  function getLead() {
    axios.get(`http://localhost:80/SkillBoost-API/api/Lead/read_single.php?MaLead=${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }

  console.log(inputs)

  //Tất cả Text Inputs  
  const handleTextChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setInputs(values => ({...values, [id]: value}));
  }

  //Nghề nghiệp Dropdown
  const [NgheNghieps, setNgheNghieps] = useState([]);
  const [selectNgheNghiepOption, setselectNgheNghiepOption] = useState(null);

  useEffect(() => {
    getNgheNghieps();
  }, []);

  const handleNgheNghiepChange = (event) => {
    const id = 'MaNgheNghiep';
    //const label = 'TenNgheNghiep';
    setInputs(values => ({...values, [id]: event.value}));
  }
  
  function getNgheNghieps() {
    axios.get('http://localhost:80/SkillBoost-API/api/NgheNghiep/read_all.php')
      .then(function(response) {
          setNgheNghieps(response.data);
      })
      .catch(function(error) {
          console.error('Error fetching courses:', error);
      });
  }

  //Nguồn Dropdown
  const handleNguonChange = (event) => {
    const id = 'NguonLead';
    setInputs(values => ({...values, [id]: event.value}));
  }

  //Giới tính Dropdown
  const handleGioiTinhChange = (event) => {
    const id = 'GioiTinhLead';
    setInputs(values => ({...values, [id]: event.value}));
  }

  //DatePicker
  const [selectedNgaySinh, setselectedNgaySinh] = useState(null);
  const formattedDate = selectedNgaySinh ? selectedNgaySinh.toLocaleDateString('en-CA') : undefined;

  useEffect(() => {
    const id = 'NgaySinhLead';
    setInputs(values => ({...values, [id]: formattedDate}))
  }, [formattedDate])

  //Xử lý ấn nút button Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put('http://localhost:80/SkillBoost-API/api/Lead/update.php', inputs).then(function(response){
        console.log(response.data);
        navigate('/');
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
                <div className='flex space-x-4 items-center'>
                  <div className='cursor-pointer block'>
                    <Link to={`/lead/thongtin/xemchitietlead/${inputs.MaLead}`}>
                      <ActionIcon size='Medium' icon={<ChevronLeft width="1.5rem" height="1.5rem"/>}/>
                    </Link>
                  </div>
                  <div className='text-text-primary title-large'>Thông tin Lead</div>
                </div>
            </div>
          
          <div id='Content' className='flex flex-col space-y-[24px] w-full h-full'>
            <form onSubmit={handleSubmit}>
            <div id='TextInputs' className='space-y-[24px]'>
                <div className='flex space-x-[24px]'>
                    <TextInput
                      id='MaLead'
                      title='Lead ID'
                      previewText={inputs.MaLead}
                      variant='ReadOnly'
                      showRedAsterisk
                      onChange={handleTextChange}
                      >

                      </TextInput>
                    <TextInput
                      id='HoTenLead'
                      title='Họ tên'
                      showRedAsterisk
                      previewText={inputs.HoTenLead}
                      onChange={handleTextChange}
                      >

                      </TextInput>
                    <DropDown
                        id='GioiTinhLead'
                        title="Giới tính"
                        showRedAsterisk
                        previewText={inputs.GioiTinhLead}
                        options={["Nam", "Nữ"].map(i => ({
                          value: i,label:i
                        }))}
                        onHandleChange={handleGioiTinhChange}
                    >
                    </DropDown>
                </div>
                <div className='flex space-x-[24px]'>
                    <CustomDatePicker 
                      id='NgaySinhLead'
                      title='Ngày sinh'
                      previewText={inputs.NgaySinhLead}
                      showRedAsterisk={true}
                      selectedDate={selectedNgaySinh}
                      setSelectedDate={setselectedNgaySinh}
                    >
                    </CustomDatePicker>
                    <TextInput
                      id='SoDienThoaiLead'
                      title='Số điện thoại'
                      previewText={inputs.SoDienThoaiLead}showRedAsterisk
                      onChange={handleTextChange}
                    >

                    </TextInput>
                    <TextInput
                      id='EmailLead'
                      title='Email'
                      previewText={inputs.EmailLead}
                      showRedAsterisk
                      onChange={handleTextChange}
                      >
                      </TextInput> 
                </div>
                <div className='flex space-x-[24px]'>
                    <DropDown
                        id="NgheNghiepLead"
                        title="Nghề nghiệp"
                        previewText={inputs.TenNgheNghiep}
                        showRedAsterisk
                        options={NgheNghieps.map((NgheNghiep) => ({
                          label: NgheNghiep.TenNgheNghiep,
                          value: NgheNghiep.MaNgheNghiep,
                        }))}
                        onHandleChange={handleNgheNghiepChange}
                    >
                    </DropDown>
                    <DropDown
                        id='NguonLead'
                        title="Nguồn Lead"
                        previewText={inputs.NguonLead}
                        showRedAsterisk
                        options={["Website", "Người thân", "Facebook", "Instagram", "Khác"].map(i => ({
                          value: i,label:i
                        }))}
                        onHandleChange={handleNguonChange}
                    >
                    </DropDown>
                    <TextInput
                      id='HoTenNV'
                      title='PIC (Người tiếp nhận)' previewText={inputs.HoTenNV}showRedAsterisk
                      onChange={handleTextChange}
                    ></TextInput>  
                </div>
                <div className='space-x-[24px]'>
                    <TextArea
                      id='GhiChuLead'
                      title='Ghi chú'
                      previewText={inputs.GhiChuLead}
                      onChange={handleTextChange}
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
                      <td colspan="3" className='px-[16px] py-[16px]'>
                        <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5}/>} onClick={handleCourseSelectorClick}>Thêm khóa học</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='flex w-full space-x-[12px] items-center justify-end'>
                <div className='cursor-pointer block'>
                  <Link to="/lead/thongtin/xemchitietlead">
                    <Button variant='Destructive-plain' size='Medium'>Hủy thay đổi</Button>
                  </Link>
                </div>   
                <Button type='submit' variant='Primary' size='Medium'>Lưu thay đổi</Button>
            </div>
            </form>
            </div>
        </div>
        </div>
        {showCourseSelector && 
          <div className="absolute top-[480px] left-[500px] z-50">
              <CourseSelector/>
          </div>
        }
    </main>
  );
};

export default DSLead_ChinhSuaChiTietLead;
