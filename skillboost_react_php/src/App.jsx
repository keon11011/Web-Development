//import {} from './components'
import './font.css'
import TestComponents from './pages/TestComponents'
import CommentCard from './components/ui/card/CommentCard';
import SidebarNV from '../src/components/ui/sidebar/SidebarNV'
import SidebarQL from '../src/components/ui/sidebar/SidebarQL'
import LeadInfoTab from './components/ui/tabs/LeadInfoTab'
import Pagnitation from './components/ui/pagnitation/pagnitation';
import CourseSelector from './components/ui/SelectItems/CourseSelector';
import LeadListFilter from './components/ui/SelectItems/LeadListFilter';
import LeadActivityListFilter from './components/ui/SelectItems/LeadActivityListFilter';
import CustomerListFilter from './components/ui/SelectItems/CustomerListFilter';
import DiscountListFilter from './components/ui/SelectItems/DiscountListFilter';



const App = () => (
  <main className="relative">
    <LeadActivityListFilter />
    <CustomerListFilter />
    <DiscountListFilter/>
  </main>
)

export default App;