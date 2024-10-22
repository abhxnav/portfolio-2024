import { parseText } from '@/lib/utils'

interface ExperiencePointProps {
  role: string
  company: string
  duration: string
  description: string[]
}

const ExperiencePoint = ({
  role,
  company,
  duration,
  description,
}: ExperiencePointProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      {/* Bullet */}
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-4 h-4 rounded-full relative border border-dark-200">
          <span className="absolute inset-0 z-0 button-gradient rounded-full" />
        </div>
        <div className="w-px h-full bg-dark-200" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 ml-8">
        <p className="font-semibold text-2xl text-dark-200">{role}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg text-dark-200 italic">{company}</p>
          <p className="font-normal text-dark-200 italic">{duration}</p>
        </div>
        <div>
          {description.map((desc, idx) => (
            <div className="flex gap-4" key={idx}>
              <span className="mt-0.5">&gt;</span>
              <p
                className="font-normal text-lg text-dark-300"
                dangerouslySetInnerHTML={{ __html: parseText(desc) }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperiencePoint
