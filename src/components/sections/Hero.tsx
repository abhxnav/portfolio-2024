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
import Image from 'next/image'

const Hero = () => {
  const { ref } = useSectionInView('Home')

  return (
    <section
      className="sm:p-16 xs:p-8 pt-0 px-6 py-12 relative z-10 scroll-mt-14 min-h-screen flex items-center justify-center"
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
            className="font-bold sm:text-4xl text-xl leading-none text-dark-200 text-left"
          >
            Hey! I'm
          </motion.h3>
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold sm:text-8xl text-6xl uppercase text-dark-200"
          >
            Abhinav,
          </motion.h1>
          <motion.h3
            variants={textVariant(1.4)}
            className="font-bold sm:text-4xl text-xl leading-none text-dark-200 lg:text-left text-right"
          >
            A Software Developer
          </motion.h3>

          <motion.div
            variants={textVariant(1.4)}
            className="mt-3 flex sm:gap-2 gap-1 items-center lg:justify-start justify-center"
          >
            <motion.div variants={fadeIn('right', 'spring', 1.5, 1)}>
              <Link href="#contact">
                <Button text="Get in touch" iconSrc={Send} />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn('right', 'spring', 1.7, 1)}
              className="block lg:hidden"
            >
              <Button
                text="Download CV"
                iconSrc={Download}
                className="bg-transparent border-2 border-dark-500 w-full"
                noGradient
              />
            </motion.div>
            {socials.map((social, idx) => (
              <motion.div
                variants={fadeIn('right', 'spring', 1.9 + 0.2 * idx, 1)}
                className="flex gap-2"
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:size-14 sm:size-[52px] size-8 rounded-full border-2 border-dark-500 sm:p-2 p-1"
                >
                  <Image
                    src={social.iconUrl}
                    alt={social.id}
                    width={1}
                    height={1}
                    className="size-full"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn('right', 'spring', 2, 1)}
            className="hidden lg:block mt-4"
          >
            <Button
              text="Download CV"
              iconSrc={Download}
              className="bg-transparent outline-2 outline-dark-500 w-full"
              noGradient
            />
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-[90%]">
          <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
            <Lottie animationData={DesktopAnimation} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
