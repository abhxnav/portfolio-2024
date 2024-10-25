'use client'

import { motion } from 'framer-motion'
import { navLinkVariants, navVariants } from '@/lib/motion'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { navLinks } from '@/constants'

const Navbar = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext()

  return (
    <header className="z-50 relative">
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex fixed top-0 left-1/2 h-16 w-full rounded-none border border-dark-500 bg-dark-600 bg-opacity-80 shadow-lg shadow-dark-600 backdrop-blur-[8px] sm:top-6 sm:h-14 sm:w-[576px] sm:rounded-full"
      ></motion.div>
      <nav className="fixed top-1 left-1/2 h-12 -translate-x-1/2 py-2 sm:top-9 sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-sm sm:text-base font-medium text-dark-200 sm:flex-nowrap sm:gap-5 min-w-max">
          {navLinks.map((link, idx) => (
            <motion.li
              variants={navLinkVariants(idx)}
              initial="hidden"
              whileInView="show"
              className="h-3/4 flex items-center justify-center relative"
              key={link.name}
            >
              <Link
                href={link.path}
                onClick={() => setActiveSection(link.name)}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-1 hover:text-white hover:-translate-y-1 transition',
                  activeSection === link.name && 'text-white'
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-dark-500 absolute inset-0 -z-10 rounded-full"
                    layoutId="active"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
