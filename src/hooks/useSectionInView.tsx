import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { SectionName } from '@/types'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const useSectionInView = (section: SectionName, threshold = 0.75) => {
  const { ref, inView } = useInView({ threshold: threshold })
  const { setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView) {
      setActiveSection(section)
    }
  }, [inView, setActiveSection])

  return { ref }
}

export default useSectionInView
