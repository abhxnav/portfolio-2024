'use client'

import { fadeIn, staggerContainer } from '@/lib/motion'
import { motion } from 'framer-motion'
import { TypingEffect } from '@/components'
import Image from 'next/image'
import useSectionInView from '@/hooks/useSectionInView'

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
          className="mt-4 sm:text-2xl lg:text-3xl text-xl text-justify sm:text-center text-dark-300"
        >
          I'm a Software Developer with 2+ years of experience, specializing in{' '}
          <span className="font-extrabold text-white">
            JavaScript, TypeScript, ReactJS, and NextJS
          </span>
          . I bring a diverse skill set, including hands-on experience in{' '}
          <span className="font-extrabold text-white">VueJS</span>,{' '}
          <span className="font-extrabold text-white">Svelte</span>, and
          integrating{' '}
          <span className="font-extrabold text-white">GraphQL APIs</span> for
          responsive and dynamic{' '}
          <span className="font-extrabold text-white">web applications</span>.
          Familiar with full-stack development with{' '}
          <span className="font-extrabold text-white">NextJS</span> and the{' '}
          <span className="font-extrabold text-white">MERN</span> stack, I am
          dedicated to creating intuitive and high-performance user interfaces,
          pushing the boundaries of modern front-end development, and delivering
          innovative digital experiences.
        </motion.p>

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
