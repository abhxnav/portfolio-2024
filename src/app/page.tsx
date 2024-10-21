import { About, Hero, Navbar } from '@/components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-explore z-0" />
      </div>
    </div>
  )
}

export default Home
