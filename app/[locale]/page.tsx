export const dynamic = 'force-dynamic'

// Import all components
import Header from '@/components/common/header/Header'
import Banner from '@/components/homepage/banner/Banner'
import Introduction1 from '@/components/homepage/introduction/Introduction1'
import Services from '@/components/homepage/services/Services'
import Introduction2 from '@/components/homepage/introduction/Introduction2'
import Solutions from '@/components/homepage/solutions/Solutions'
import Partner from '@/components/homepage/partner/Partner'
import Project from '@/components/homepage/project/Project'
import Feedback from '@/components/homepage/feedback/Feedback'
import News from '@/components/homepage/news/News'
import Footer from '@/components/common/footer/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Banner />
      <Introduction1 />
      <Project />
      <Introduction2 />
      <Solutions />
      <Partner />
      <Services />
      <Feedback />
      <News />
      <Footer />
    </div>
  )
}
