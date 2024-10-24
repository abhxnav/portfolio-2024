'use client'

import { socials } from '@/data'
import { footerVariants } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:p-16 xs:p-8 px-6 py-8 relative"
    >
      <div className="gradient-footer" />

      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex flex-col">
            <h4 className="font-semibold md:text-4xl text-lg text-dark-300">
              Turning Ideas into reality, one line of code at a time
            </h4>
            <h4 className="font-bold md:text-6xl text-[40px] text-dark-200">
              Let&apos;s build your next big idea together
            </h4>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-2xl text-dark-200">Abhinav</h4>
            <p className="font-normal text-sm text-dark-200">
              Copyright © 2024. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Image
                  key={social.id}
                  src={social.iconUrl}
                  alt={social.id}
                  onClick={() => window.open(social.url, '_blank')}
                  width={24}
                  height={24}
                  className="object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
