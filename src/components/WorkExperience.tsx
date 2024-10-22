'use client'

import { fadeIn, renderVariants, staggerContainer } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import TypingEffect from './shared/TypingEffect'
import TitleText from './shared/TitleText'
import { workExperience } from '@/data'
import ExperiencePoint from './ExperiencePoint'

const WorkExperience = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-40"
      >
        <motion.div
          variants={renderVariants('left')}
          className="flex items-center justify-center flex-[0.5]"
        >
          <Image
            src="/assets/icons/globe.svg"
            alt="globe"
            width={1}
            height={1}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex justify-center flex-col flex-1"
        >
          <TypingEffect title="| My Past Work Experience" />
          <div className="flex flex-col gap-6 mt-8">
            {workExperience?.map((exp, idx) => (
              <ExperiencePoint key={exp.id} {...exp} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WorkExperience
