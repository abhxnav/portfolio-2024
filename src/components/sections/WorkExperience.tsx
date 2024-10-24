'use client'

import { fadeIn, staggerContainer } from '@/lib/motion'
import { motion } from 'framer-motion'
import TypingEffect from '../shared/TypingEffect'
import { workExperience } from '@/data'
import ExperiencePoint from '../ExperiencePoint'

const WorkExperience = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col items-center"
      >
        <TypingEffect title="| Work Experience" textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-16 flex w-full"
        >
          <div className="flex flex-col gap-6 mt-8 w-full relative">
            {/* Timeline */}
            <div className="absolute inset-0 flex items-center lg:justify-center">
              <div className="w-0.5 h-full bg-dark-400" />
            </div>

            {/* Experience Points */}
            {workExperience?.map((exp, idx) => (
              <ExperiencePoint key={exp.id} {...exp} index={idx} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WorkExperience
