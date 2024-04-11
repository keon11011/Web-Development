import { Link } from 'react-router-dom'

import SidebarQL from '../components/ui/sidebar/SidebarQL';
import HeaderAdmin from '../components/ui/header_footer/admin/headerad/HeaderAdmin';
import LeadInfoTab from '../components/ui/tabs/LeadInfoTab';
import ActionIcon from '../components/ui/button/ActionIcon';
import Nhantuvan from '../components/ui/header_footer/admin/progressbar/Nhantuvan';
import Pagination from '../components/ui/pagination/Pagination';
import LeadProgressStatus from '../components/ui/chips/LeadProgressStatus';
import Button from '../components/ui/button/Button'
import AddPlus from '../components/icons/Edit/AddPlus'

import ChevronRight from '../components/icons/Arrow/ChevronRight';

const DSBaoGia_BangBaoGia = () => {

    return (
        <main id='DSBaoGia' className='w-full bg-background-secondary relative flex'>
            <div id='Sidebar'>
                <SidebarQL />
            </div>
            <div id='ContentContainer' className='w-full h-auto px-16 py-8 space-y-6 max-sm:px-4'>
                <div id='Header' className='max-sm:ml-16'>
                    <HeaderAdmin progressBar={<Nhantuvan />}>Phan Văn Trị</HeaderAdmin>
                </div>

                <div id='LeadInfoNavigation' className='flex space-x-6 max-sm:flex-col max-sm:gap-5'>
                    <div className='grow'>
                        <LeadInfoTab />
                    </div>
                    <div className='max-sm:flex'>
                        <LeadProgressStatus variant="DangTuVan" />
                    </div>
                </div>

                <div id='ContentInside' className="w-full h-auto relative rounded-lg bg-background-primary shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] p-6 box-border gap-4 space-y-6">
                    <div id='Header' className='flex justify-between items-center'>
                        <div className='text-text-primary title-large'>Danh sách báo giá</div>
                        <div className='cursor-pointer block'>
                            <Link to="/lead/dsbaogia/taobaogia">
                                <Button variant='Neutral' size='Medium' leftIcon={<AddPlus width="1.25rem" height="1.25rem" strokeWidth={1.5} />}>Tạo báo giá mới</Button>
                            </Link>
                        </div>
                    </div>
                    <div id='Content' className='flex flex-col space-y-[32px] w-full h-auto'>
                        <div id='Table' className="flex w-full rounded-lg border border-outline-table overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className='title-small text-text-secondary text-left'>
                                    <tr>
                                        <th className="px-[16px] py-[24px]">ID</th>
                                        <th className="w-[278px] px-[16px] py-[24px]">Tên báo giá</th>
                                        <th className="px-[16px] py-[24px] text-center">Trạng thái</th>
                                        <th className="px-[16px] py-[24px] text-center">Thời gian chỉnh sửa lần cuối</th>
                                        <th className="px-[16px] py-[24px] text-center">Tổng tiền</th>
                                        <th className="px-[16px] py-[24px] text-center">Người tạo</th>
                                    </tr>
                                </thead>
                                <tbody className='body-medium text-text-primary'>
                                    <tr className="border-t">
                                        <td className="px-[16px] py-[24px]">QUO712</td>
                                        <td className="px-[16px] py-[24px]">Báo giá khóa học IT Business Analyst</td>
                                        <td className="px-[16px] py-[24px] text-center">Nháp</td>
                                        <td className="px-[16px] py-[24px] text-center">13:10 - 11/12/2023</td>
                                        <td className="px-[16px] py-[24px] text-center">4.000.000đ</td>
                                        <td className="px-[16px] py-[24px] text-center">PIC</td>
                                        <td className="px-[16px] py-[24px]">
                                            <div className='cursor-pointer block'>
                                                <Link to="/lead/dsbaogia/xemchitietbaogia">
                                                    <ActionIcon size='Small' icon={<ChevronRight width="1rem" height="1rem" />} />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id='Pagination' className='flex w-full justify-end'>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default DSBaoGia_BangBaoGia;
