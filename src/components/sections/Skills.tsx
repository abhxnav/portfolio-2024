'use client'

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/motion'
import { SkillItems, TypingEffect } from '@/components'

const Skills = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col items-center"
      >
        <TypingEffect title="| My Toolbox" textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative overflow-hidden p-6 mt-16 flex flex-col w-full lg:w-[75%] border border-dark-500 rounded-3xl gap-6"
        >
          <SkillItems wrapperClass="animate-right-to-left [animation-duration:30s]" />
          <SkillItems wrapperClass="animate-left-to-right [animation-duration:10s]" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
