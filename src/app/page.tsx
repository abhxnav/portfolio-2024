import { About, Hero, Navbar, Projects } from '@/components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-explore z-0" />
        <Projects />
      </div>
    </div>
  )
}

export default Home
