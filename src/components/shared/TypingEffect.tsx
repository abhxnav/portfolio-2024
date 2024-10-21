import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '@/lib/motion'

interface TypingEffectProps {
  title: string
  textStyles?: string
}

const TypingEffect = ({ title, textStyles }: TypingEffectProps) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-lg text-dark-300 ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  )
}

export default TypingEffect
