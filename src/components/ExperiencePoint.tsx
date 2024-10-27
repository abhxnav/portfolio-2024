import { motion } from 'framer-motion'
import { parseText } from '@/lib/utils'
import { fadeIn } from '@/lib/motion'

interface ExperiencePointProps {
  role: string
  company: string
  duration: string
  description: string[]
  index: number
}

const ExperiencePoint = ({
  role,
  company,
  duration,
  description,
  index,
}: ExperiencePointProps) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={fadeIn(isEven ? 'left' : 'right', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`relative flex w-full lg:flex-row items-center ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Experience content */}
      <div
        className={`relative flex items-center w-full lg:max-w-[45%] p-4 border border-dark-500 rounded-2xl ml-6 lg:ml-0 ${
          isEven ? 'justify-end text-left' : 'justify-start text-left'
        }`}
      >
        <div className="w-full flex flex-col gap-2 p-4 shadow-lg rounded-md">
          <p className="font-semibold sm:text-2xl text-xl text-dark-200">
            {role}
          </p>
          <div className="flex sm:flex-row flex-col sm:items-center justify-between">
            <p className="font-medium sm:text-lg text-base text-dark-200 italic">
              {company}
            </p>
            <p className="font-normal sm:text-lg text-sm text-dark-200 italic">
              {duration}
            </p>
          </div>
          <div className="mt-4">
            {description.map((desc, idx) => (
              <div className="flex gap-4" key={idx}>
                <span className="mt-0.5">&gt;</span>
                <p
                  className="font-normal sm:text-lg text-base text-dark-300"
                  dangerouslySetInnerHTML={{ __html: parseText(desc) }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Arrow pointing to the bullet */}
        <div
          className={`absolute top-3 transform -translate-y-1/2 ${
            isEven
              ? 'right-[-15px] lg:right-[-25px]'
              : 'left-[-15px] lg:left-[-25px]'
          }`}
        >
          <span className="text-3xl text-dark-400 hidden lg:block">
            {isEven ? '>' : '<'}
          </span>
        </div>
      </div>

      {/* Bullet */}
      <div className="absolute top-0 left-[1.5px] lg:left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="size-4 lg:size-6 rounded-full border bg-dark-500 border-dark-300 relative z-10">
          <span className="absolute inset-0 z-0 button-gradient rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}

export default ExperiencePoint
