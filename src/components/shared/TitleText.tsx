import { textVariant2 } from '@/lib/motion'
import { motion } from 'framer-motion'

interface TitleTextProps {
  title: string | JSX.Element
  textStyles?: string
}

const TitleText = ({ title, textStyles }: TitleTextProps) => {
  return (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-2 font-bold md:text-6xl text-4xl text-dark-200 ${textStyles}`}
    >
      {title}
    </motion.h2>
  )
}

export default TitleText
