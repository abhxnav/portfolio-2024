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
        <TypingEffect title="| Projects" textStyles="text-center" />

        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects?.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
