'use client'

import { fadeIn } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  imgUrl: string
  title: string
  description: string
  index: number
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn(
        index % 2 === 0 ? 'left' : 'right',
        'spring',
        0.5 + index * 0.5,
        0.75
      )}
      className={`bg-dark-600 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-dark-500 after:pointer-events-none px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky`}
      style={{ top: `calc(100px + ${index * 40}px)` }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-16">
        <div className="lg:pb-16">
          <h3 className="text-2xl md:text-4xl">{title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <div className="text-sm md:text-base text-dark-300 mt-8">
            {description}
          </div>
          <div className="flex items-center gap-2 w-full mt-8">
            <div className="flex justify-center items-center w-full md:max-w-fit gap-2 px-4 py-2 font-semibold rounded-xl frost">
              <span className="text-dark-200">View Live</span>
              <Image
                src="/assets/icons/link.svg"
                alt="link"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-full md:max-w-fit gap-2 px-4 py-2 font-semibold rounded-xl frost">
              <span className="text-dark-200">View Code</span>
              <Image
                src="/assets/icons/github.svg"
                alt="github"
                width={18}
                height={18}
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="realtive">
          <Image
            src={imgUrl}
            alt={title}
            width={200}
            height={200}
            className="size-full mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
