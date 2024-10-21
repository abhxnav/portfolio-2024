'use client'

import { fadeIn } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { describe } from 'node:test'

interface ProjectCardProps {
  id: string
  imgUrl: string
  title: string
  description: string
  index: number
  active: string
  setActive: (id: string) => void
}

const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  setActive,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative flex items-center justify-center min-w-44 h-[700px] transition-[flex] duration-75 ease-out cursor-pointer ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      }`}
      onClick={() => setActive(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        width={200}
        height={200}
        className="absolute w-full h-full object-cover rounded-3xl"
      />

      {active !== id ? (
        <h3 className="font-semibold sm:text-2xl text-base text-dark-200 absolute z-0 lg:bottom-20 lg:-rotate-90 lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-black bg-opacity-50 rounded-b-3xl">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center max-w-fit p-3 rounded-2xl frost">
              <Image
                src="/assets/icons/link.svg"
                alt="globe"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center max-w-fit p-3 rounded-2xl frost">
              <Image
                src="/assets/icons/github.svg"
                alt="globe"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="mt-3 font-semibold sm:text-3xl text-2xl text-dark-200">
            {title}
          </h2>
          <p className="mt-2 sm:text-base text-sm text-dark-200">
            {description}
          </p>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard
