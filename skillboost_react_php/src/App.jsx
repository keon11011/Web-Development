//import {} from './components'
import './font.css'
import TestComponents from './pages/TestComponents'

import SidebarNV from '../src/components/ui/sidebar/SidebarNV'
import SidebarQL from '../src/components/ui/sidebar/SidebarQL'
import LeadInfoTab from './components/ui/tabs/LeadInfoTab'
import Pagination from './components/ui/pagination/Pagination';
// import TestComponents from './pages/TestComponents'
import TestCard from './pages/TestCard'
import CourseSelector from './components/ui/SelectItems/CourseSelector';
import LeadListFilter from './components/ui/SelectItems/LeadListFilter';
import LeadQuotationListFilter from './components/ui/SelectItems/LeadQuotationListFilter'

//---Import PHP vào
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import './App.css';
// import CreateUser from './components/CRUD/CreateUser';
// import EditUser from './components/CRUD/EditUser';
// import ListUser from './components/CRUD/ListUser';

const App = () => (
  <main className="relative">
      <LeadQuotationListFilter/>
      <TestComponents/>
      <Pagination />
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