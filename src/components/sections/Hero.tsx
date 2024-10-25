'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion'
import { Button } from '@/components'
import Send from '@/../public/assets/icons/send.svg'
import Download from '@/../public/assets/icons/download.svg'
import useSectionInView from '@/hooks/useSectionInView'
import Link from 'next/link'
import { socials } from '@/data'
import Lottie from 'lottie-react'
import DesktopAnimation from '@/../public/assets/animations/desktop.json'

const Hero = () => {
  const { ref } = useSectionInView('Home')

  return (
    <section
      className="py-12 sm:py-16 xs:py-8 pl-6 sm:pl-16 text-dark-200 min-h-screen flex items-center justify-center"
      id="home"
      ref={ref}
    >
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto 2xl:max-w-[1280px] w-full"
      >
        <div className="flex flex-col text-center lg:text-left relative z-10">
          <motion.h3
            variants={textVariant(0.8)}
            className="font-bold lg:text-4xl md:text-xl sm:text-base text-xs leading-none text-dark-200"
          >
            Hey! I'm
          </motion.h3>
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-8xl md:text-6xl sm:text-4xl text-3xl uppercase text-dark-200"
          >
            Abhinav,
          </motion.h1>
          <motion.h3
            variants={textVariant(1.4)}
            className="font-bold lg:text-4xl md:text-xl sm:text-base text-xs leading-none text-dark-200"
          >
            A Software Developer
          </motion.h3>

          <motion.div
            variants={textVariant(1.4)}
            className="lg:mt-4 md:mt-3 sm:mt-3 mt-1 flex gap-2 items-center"
          >
            <motion.div variants={fadeIn('right', 'spring', 1.5, 1)}>
              <Link href="#contact">
                <Button text="Get in touch" iconSrc={Send} />
              </Link>
            </motion.div>
            {socials.map((social, idx) => (
              <motion.div
                variants={fadeIn('right', 'spring', 1.5 + 0.2 * idx, 1)}
                className="flex gap-2"
              >
                <Button
                  key={social.id}
                  iconSrc={social.iconUrl}
                  noGradient
                  className="lg:px-[12px] md:px-[8px] sm:px-[4px] px-[4px] border-2 border-dark-500"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn('right', 'spring', 2, 1)}
            className="lg:mt-4 md:mt-3 sm:mt-3 mt-1"
          >
            <Button
              text="Download CV"
              iconSrc={Download}
              className="bg-transparent border-2 border-dark-500 w-full"
              noGradient
            />
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-3/4">
          <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
            <Lottie animationData={DesktopAnimation} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
