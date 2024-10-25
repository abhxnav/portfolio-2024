'use client'

import { motion } from 'framer-motion'
import { fadeIn, textContainer, textVariant2 } from '@/lib/motion'
import Image from 'next/image'
import { useState } from 'react'

interface TypingEffectProps {
  title: string
  textStyles?: string
  type?: string
  onClick?: () => void
}

const TypingEffect = ({
  title,
  textStyles,
  type,
  onClick,
}: TypingEffectProps) => {
  const [isRotated, setIsRotated] = useState(false)

  return (
    <div className="flex gap-4 items-center">
      <motion.p
        variants={textContainer}
        className={`font-normal text-3xl text-dark-300 ${textStyles}`}
      >
        {Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter}
          </motion.span>
        ))}
      </motion.p>

      {type === 'skills' && (
        <motion.div
          variants={fadeIn('left', 'tween', 2, 1)}
          onClick={() => {
            if (onClick) {
              onClick()
            }
            setIsRotated((prev) => !prev)
          }}
          animate={{ rotate: isRotated ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="cursor-pointer"
        >
          <Image
            src="/assets/icons/switch.svg"
            alt="arrow"
            width={25}
            height={25}
          />
        </motion.div>
      )}
    </div>
  )
}

export default TypingEffect
