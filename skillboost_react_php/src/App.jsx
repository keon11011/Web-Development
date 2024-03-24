//import {} from './components'
import CourseSelector from './components/ui/SelectItems/CourseSelector';
import './font.css'
import TestComponents from './pages/TestComponents'
import SidebarNV from '../src/components/ui/sidebar/SidebarNV'
import SidebarQL from '../src/components/ui/sidebar/SidebarQL'
import LeadInfoTab from './components/ui/tabs/LeadInfoTab'
import Pagnitation from './components/ui/pagnitation/pagnitation';
// import TestComponents from './pages/TestComponents'
import TestCard from './pages/TestCard'

const App = () => (
  <main className="relative">
  {/* <TestComponents/> */}
      <TestCard />
  </main>
)

export default App;