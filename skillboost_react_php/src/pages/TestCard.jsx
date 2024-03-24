import CourseCardBig from '../components/ui/card/CourseCardBig';
import CourseCardSmall from '../components/ui/card/CourseCardSmall';
import BrandCard from '../components/ui/card/BrandCard';
import CommentCard from '../components/ui/card/CommentCard';
import FeedbackCard from '../components/ui/card/FeedbackCard';
import DashboardOverviewCardUp from '../components/ui/card/DashboardOverviewCardUp';
import DashboardOverviewCardDown from '../components/ui/card/DashboardOverviewCardDown';


const TestCard = () => (
  <main className="p-3" >
    Course Card
    <div className='flex gap-2'>
      <CourseCardBig />
      <CourseCardSmall />
    </div> <br />

    BrandCard
    <div>
      <BrandCard/>
    </div> <br />

    Comment Card & Feedback Card
    <div className='space-y-4'>
      <CommentCard/>
      <FeedbackCard/>
    </div> <br />

    DashboardOverviewCard Up & Down
    <div className='flex gap-2 '>
      <DashboardOverviewCardUp/>
      <DashboardOverviewCardDown/>
    </div>
  </main>
)
export default TestCard 