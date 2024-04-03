//import {} from './components'
import './font.css'
// import TestComponents from './pages/TestComponents'
// import CommentCard from './components/ui/card/CommentCard';
// import SidebarNV from '../src/components/ui/sidebar/SidebarNV'
// import SidebarQL from '../src/components/ui/sidebar/SidebarQL'
// import LeadInfoTab from './components/ui/tabs/LeadInfoTab'
// import Pagnitation from './components/ui/pagination/Pagination';
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
import Thanh_toan from './pages/Thanh_toan'
// import LeadQuotationListFilter from './components/ui/SelectItems/LeadQuotationListFilter'


//---Import PHP vào
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import './App.css';
// import CreateUser from './components/CRUD/CreateUser';
// import EditUser from './components/CRUD/EditUser';
// import ListUser from './components/CRUD/ListUser';

const App = () => (
  <main className="relative">
    <Thanh_toan/>
      {/* <Tableview/>
      <Tablecourse/>
      <Header/>
      <Footer/>
      <Notificationnew/>
      <Notification/>
      <TestHeaderAdmin/>
      <Nhantuvan/>
      <Baogia/>
      <Thanhtoan/>
      <Hoanthanh/> */}
      
      {/* <CourseSelector/>
      <LeadListFilter/>
      <TestComponents/> */}
      {/* <LeadActivityListFilter />
      <CustomerListFilter />
      <DiscountListFilter/> */}
  </main>
//   <div className="App">
//   <h5>React CRUD operations using PHP API and MySQL</h5>

//   <BrowserRouter>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">List Users</Link>
//         </li>
//         <li>
//           <Link to="user/create">Create User</Link>
//         </li>
//       </ul>
//     </nav>
//     <Routes>
//       <Route index element={<ListUser />} />
//       <Route path="user/create" element={<CreateUser />} />
//       <Route path="user/:id/edit" element={<EditUser />} />
//     </Routes>
//   </BrowserRouter>
//  </div>
)

export default App;