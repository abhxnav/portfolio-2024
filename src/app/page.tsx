import {
  About,
  Contact,
  Footer,
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
        <Skills />
      </div>
      <World />
      <div className="relative">
        <Contact />
        <div className="gradient-contact z-0" />
        {/* <Testimonial /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
