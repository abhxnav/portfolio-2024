import { About, Hero, Navbar, Projects, WorkExperience } from '@/components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-projects z-0" />
        <Projects />
      </div>
      <div className="relative">
        <WorkExperience />
        <div className="gradient-exp z-0" />
      </div>
    </div>
  )
}

export default Home
