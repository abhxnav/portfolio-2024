import { Fragment } from 'react'
import Image from 'next/image'
import { skills } from '@/data'
import { motion } from 'framer-motion'

const SkillItems = ({
  wrapperClass,
  type,
}: {
  wrapperClass?: string
  type: 'stripe' | 'grid'
}) => {
  return (
    <>
      {type === 'stripe' ? (
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className={`${wrapperClass} flex flex-none gap-6 py-0.5`}>
            {/* Duplicating the skills array to create infinte loop effect */}
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {skills?.map((skill) => (
                  <div
                    key={skill.skill}
                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-dark-500 rounded-lg"
                  >
                    <Image
                      src={skill.iconUrl}
                      alt={skill.skill}
                      width={40}
                      height={40}
                    />
                    <span className="font-semibold text-lg text-dark-200">
                      {skill.skill}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 lg:grid-cols-6 lg:gap-8 gap-4">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <div
              key={skill.skill}
              className="group relative flex cursor-pointer"
            >
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-full border border-dark-500 object-cover p-4 filter group-hover:grayscale transition duration-300 ease-in-out"
              >
                <Image
                  src={skill.iconUrl}
                  alt={skill.skill}
                  width={50}
                  height={50}
                />
              </motion.div>
              <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-black size-[84px] rounded-full border border-dark-500">
                <div className="flex items-center justify-center h-full">
                  <p className="text-2xl font-semibold text-dark-200 opacity-100">
                    {skill.skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <div
              key={skill.skill}
              className="group relative flex cursor-pointer"
            >
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="rounded-full border border-dark-500 object-cover p-4 filter group-hover:grayscale transition duration-300 ease-in-out"
              >
                <Image
                  src={skill.iconUrl}
                  alt={skill.skill}
                  width={50}
                  height={50}
                />
              </motion.div>
              <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-black size-[84px] rounded-full border border-dark-500">
                <div className="flex items-center justify-center h-full">
                  <p className="text-2xl font-semibold text-dark-200 opacity-100">
                    {skill.skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SkillItems
