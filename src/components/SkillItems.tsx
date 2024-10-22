import Image from 'next/image'
import { skills } from '@/data'
import { Fragment } from 'react'

const SkillItems = ({ wrapperClass }: { wrapperClass?: string }) => {
  return (
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
  )
}

export default SkillItems
