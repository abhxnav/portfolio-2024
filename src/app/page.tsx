import {
  About,
  Hero,
  Navbar,
  Projects,
  Skills,
  WorkExperience,
  World,
} from '@/components'

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
        {/* TODO: Add skills section */}
        <Skills />
      </div>
      <World />
    </div>
  )
}

export default Home
