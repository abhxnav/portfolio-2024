'use client'

import { fadeIn, staggerContainer } from '@/lib/motion'
import { motion } from 'framer-motion'
import { TypingEffect } from '@/components'
import Image from 'next/image'
import useSectionInView from '@/hooks/useSectionInView'
import { parseText } from '@/lib/utils'
import { aboutText } from '@/data'

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <section
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 text-dark-200 scroll-mt-14 min-h-screen flex items-center justify-center"
      id="about"
      ref={ref}
    >
      <div className="gradient-about z-0" />
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center items-center flex-col 2xl:max-w-[1280px] w-full mx-auto"
      >
        <TypingEffect title={`| About Me`} textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 1.5, 1)}
          className="mt-8 sm:text-2xl lg:text-3xl text-xl text-justify sm:text-center text-dark-300"
          dangerouslySetInnerHTML={{ __html: parseText(aboutText) }}
        />

        <motion.div variants={fadeIn('up', 'tween', 1.6, 1)}>
          <Image
            src="/assets/icons/arrow.svg"
            alt="down-arrow"
            width={35}
            height={35}
            className="mt-8"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
