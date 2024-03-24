//import {} from './components'
import './font.css'
import TestComponents from './pages/TestComponents'
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