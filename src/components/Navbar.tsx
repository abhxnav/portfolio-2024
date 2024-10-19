'use client'

import { motion } from 'framer-motion'
import { navVariants } from '@/lib/motion'
import Image from 'next/image'

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="absolute w-1/2 inset-0 gradient-main" />
      <div className="flex justify-between gap-8 2xl:max-w-[1280px] w-full mx-auto">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
        />

        <h2 className="font-extrabold text-2xl font-baloo">PORTFOLIO</h2>

        <Image src="/assets/icons/menu.svg" alt="menu" width={24} height={24} />
      </div>
    </motion.nav>
  )
}

export default Navbar
