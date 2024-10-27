'use client'

import { useState } from 'react'
import { staggerContainer } from '@/lib/motion'
import { motion } from 'framer-motion'
import { ProjectCard, TypingEffect } from '@/components'
import { projects } from '@/data'
import useSectionInView from '@/hooks/useSectionInView'

const Projects = () => {
  const { ref } = useSectionInView('Projects')

  const [active, setActive] = useState<string>('project-2')

  return (
    <section
      className="sm:p-16 xs:p-8 px-6 py-12 scroll-mt-14 min-h-screen flex items-center justify-center"
      id="projects"
      ref={ref}
    >
      <div className="gradient-about z-0" />
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col lg:w-[80%] w-full mx-auto"
      >
        <TypingEffect title="| Featured Projects" textStyles="text-center" />

        <div className="lg:max-w-5xl mx-auto">
          <div className="mt-12 md:mt-20 flex flex-col gap-10">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} index={index} {...project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
