//import {} from './components'
import './font.css'
// import TestComponents from './pages/TestComponents'
// import CommentCard from './components/ui/card/CommentCard';
// import SidebarNV from '../src/components/ui/sidebar/SidebarNV'
// import SidebarQL from '../src/components/ui/sidebar/SidebarQL'
// import LeadInfoTab from './components/ui/tabs/LeadInfoTab'
// import Pagnitation from './components/ui/pagnitation/pagnitation';
// import CourseSelector from './components/ui/SelectItems/CourseSelector';
// import LeadListFilter from './components/ui/SelectItems/LeadListFilter';
// import Tableview from './components/ui/table/Tableview'
// import Tablecourse from './components/ui/table/Tablecourse'
// import Header from './components/ui/header_footer/customer/Header'
// import Footer from './components/ui/header_footer/customer/Footer'
// import Notificationnew from './components/ui/header_footer/admin/notification/Notificationnew'
// import Notification from './components/ui/header_footer/admin/notification/Notification'
// import TestHeaderAdmin from './pages/TestHeaderAdmin'
// import Thanhtoan from './components/ui/header_footer/admin/progressbar/Thanhtoan'
// import Baogia from './components/ui/header_footer/admin/progressbar/Baogia'
// import Nhantuvan from './components/ui/header_footer/admin/progressbar/Nhantuvan'
// import Hoanthanh from './components/ui/header_footer/admin/progressbar/Hoanthanh'
// import LeadQuotationListFilter from './components/ui/SelectItems/LeadQuotationListFilter'
import DSLead from './pages/DSLead';
import SidebarNV from './components/ui/sidebar/SidebarNV';
import HeaderAdmin from './components/ui/header_footer/admin/headerad/HeaderAdmin';
import DSBaoGia_TaoBaoGia from './pages/DSBaoGia_TaoBaoGia'

const App = () => (
  <main className="relative">
      <DSLead/>
      {/* <HeaderAdmin/> */}
      {/* <SidebarNV/> */}
      {/* <CourseSelector/>
      <LeadListFilter/>
      <TestComponents/> */}
    <DSBaoGia_TaoBaoGia/>
  </main>
)

export default App;