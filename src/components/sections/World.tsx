'use client'

import { motion } from 'framer-motion'
import { fadeIn, renderVariants, staggerContainer } from '@/lib/motion'
import TypingEffect from '../shared/TypingEffect'
import Image from 'next/image'

const World = () => {
  return (
    <section
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 scroll-mt-14 min-h-screen flex items-center justify-center"
      id="world"
    >
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingEffect
          title="| Worked for clients from around the world"
          textStyles="text-center text-[30px]"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-16 flex w-full"
        >
          {/* Responsive image */}
          <div className="relative w-full h-0 pb-[50%]">
            <Image
              src="/assets/pictures/map.png"
              alt="map"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>

          {/* Avatars */}
          <>
            <motion.div
              variants={renderVariants('right')}
              className="absolute bottom-[20%] right-[3%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-1 rounded-full border-2 border-dark-300"
            >
              <span className="absolute inset-0 z-0 button-gradient rounded-full" />
              <Image
                src="/assets/avatars/avatar-1.svg"
                alt="avatar"
                width={100}
                height={100}
                className="w-full h-full object-contain z-10 relative"
              />
            </motion.div>

            <motion.div
              variants={renderVariants('left')}
              className="absolute top-[12%] left-[12%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-1 rounded-full border-2 border-dark-300"
            >
              <span className="absolute inset-0 z-0 button-gradient rounded-full" />
              <Image
                src="/assets/avatars/avatar-2.svg"
                alt="avatar"
                width={100}
                height={100}
                className="w-full h-full object-contain z-10 relative"
              />
            </motion.div>

            <motion.div
              variants={renderVariants('left')}
              className="absolute top-[25%] left-[5%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-1 rounded-full border-2 border-dark-300"
            >
              <span className="absolute inset-0 z-0 button-gradient rounded-full" />
              <Image
                src="/assets/avatars/avatar-3.svg"
                alt="avatar"
                width={100}
                height={100}
                className="w-full h-full object-contain z-10 relative"
              />
            </motion.div>

            <motion.div
              variants={renderVariants('right')}
              className="absolute top-[15%] left-[40%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-1 rounded-full border-2 border-dark-300"
            >
              <span className="absolute inset-0 z-0 button-gradient rounded-full" />
              <Image
                src="/assets/avatars/avatar-4.svg"
                alt="avatar"
                width={100}
                height={100}
                className="w-full h-full object-contain z-10 relative"
              />
            </motion.div>

            <motion.div
              variants={renderVariants('right')}
              className="absolute top-[32%] right-[35%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-1 rounded-full border-2 border-dark-300"
            >
              <span className="absolute inset-0 z-0 button-gradient rounded-full" />
              <Image
                src="/assets/avatars/avatar-5.svg"
                alt="avatar"
                width={100}
                height={100}
                className="w-full h-full object-contain z-10 relative"
              />
            </motion.div>

            <motion.div
              variants={renderVariants('right')}
              className="absolute top-[38%] right-[32%] w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 p-1 rounded-full border-2 border-dark-300"
            >
              <span className="absolute inset-0 z-0 button-gradient rounded-full" />
              <Image
                src="/assets/avatars/avatar-6.svg"
                alt="avatar"
                width={100}
                height={100}
                className="w-full h-full object-contain z-10 relative"
              />
            </motion.div>
          </>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World
