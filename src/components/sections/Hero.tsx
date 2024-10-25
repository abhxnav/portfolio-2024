'use client'

import { motion } from 'framer-motion'
import { staggerContainer, textVariant } from '@/lib/motion'
import Link from 'next/link'
import { Button } from '@/components'
import Explore from '@/../public/assets/icons/mouse.svg'
import useSectionInView from '@/hooks/useSectionInView'

const Hero = () => {
  const { ref } = useSectionInView('Home')

  return (
    <section
      className="py-12 sm:py-16 xs:py-8 pl-6 sm:pl-16 text-dark-200 scroll-mt-[100vh] min-h-screen flex items-center justify-center"
      id="home"
      ref={ref}
    >
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex items-center justify-between mx-auto 2xl:max-w-[1280px] w-full"
      >
        <div className="flex flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-9xl md:text-7xl sm:text-5xl text-4xl uppercase text-dark-200"
          >
            Abhinav
          </motion.h1>
          <motion.h1
            variants={textVariant(1.4)}
            className="font-bold lg:text-4xl md:text-xl sm:text-base text-xs leading-none text-dark-200"
          >
            Software Developer
          </motion.h1>

          <motion.div
            variants={textVariant(1.6)}
            className="mt-8 hidden lg:flex"
          >
            <Link href="#explore">
              <Button text="Explore more about me" iconSrc={Explore} />
            </Link>
          </motion.div>
        </div>

        {/* TODO: Add a 3d model here */}
        {/* <div>
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="relative w-full md:-mt-5 -mt-3"
          >
            <div>ANIMATION</div>
          </motion.div>
        </div> */}
      </motion.div>
    </section>
  )
}

export default Hero
