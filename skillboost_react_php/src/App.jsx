//import {} from './components'
import './font.css'
import TestComponents from './pages/TestComponents'
import SidebarNV from '../src/components/ui/sidebar/SidebarNV'
import SidebarQL from '../src/components/ui/sidebar/SidebarQL'
import LeadInfoTab from './components/ui/tabs/LeadInfoTab'
import Pagnitation from './components/ui/pagnitation/pagnitation';
// import TestComponents from './pages/TestComponents'
import TestCard from './pages/TestCard'
import CourseSelector from './components/ui/SelectItems/CourseSelector';
import LeadListFilter from './components/ui/SelectItems/LeadListFilter';

const App = () => (
  <main className="relative">
      <CourseSelector/>
      <LeadListFilter/>
      <TestComponents/>
  </main>
)

export default App;