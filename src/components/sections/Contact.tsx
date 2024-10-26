'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion'
import TypingEffect from '../shared/TypingEffect'
import { Resolver, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import useSectionInView from '@/hooks/useSectionInView'
import Lottie from 'lottie-react'
import EmailAnimation from '@/../public/assets/animations/email.json'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

const resolver: Resolver<ContactFormValues> = async (values) => {
  const errors: Record<string, any> = {}

  if (!values.name) {
    errors.name = { type: 'required', message: 'Please enter your name' }
  }

  if (!values.email) {
    errors.email = { type: 'required', message: 'Please enter your email' }
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: 'pattern',
      message: 'Please enter a valid email address',
    }
  }

  if (!values.message) {
    errors.message = { type: 'required', message: 'Please enter a message' }
  } else if (values.message.length < 10) {
    errors.message = {
      type: 'minLength',
      message: 'Please enter at least 10 characters',
    }
  } else if (values.message.length > 1000) {
    errors.message = {
      type: 'maxLength',
      message: 'The message length must be less than 1000 characters',
    }
  }

  return {
    values,
    errors,
  }
}

const Contact = () => {
  const { ref } = useSectionInView('Contact')

  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver })

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          to_name: 'Abhinav',
          from_email: data.email,
          to_email: 'k.abhinav1000@gmail.com',
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (res) {
        alert(
          `Thank you for reaching out. I'll get back to you as soon as possible.`
        )
        reset()
      }
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  })

  return (
    <section
      className="sm:p-16 xs:p-8 px-6 py-12 relative z-10 scroll-mt-14 min-h-screen flex items-center justify-center"
      id="contact"
      ref={ref}
    >
      <motion.div
        variants={staggerContainer(0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col items-center"
      >
        <TypingEffect title="| Get In Touch" textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="relative mt-16 flex w-full flex-col lg:flex-row items-center justify-center"
        >
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="w-3/4 lg:w-1/2 lg:p-16"
          >
            <Lottie animationData={EmailAnimation} />
          </motion.div>
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="w-full lg:w-1/2 border border-dark-500 rounded-3xl p-8"
          >
            <form onSubmit={onSubmit} className="flex flex-col gap-8 w-full">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="flex flex-col">
                  <span className="text-dark-200 font-medium mb-4">Name</span>

                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    placeholder="John Doe"
                    className={`bg-dark-500 py-4 px-6 placeholder:text-dark-300 text-dark-200 rounded-lg outline-none border-none font-medium ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                </label>
                {errors?.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="flex flex-col">
                  <span className="text-dark-200 font-medium mb-4">Email</span>

                  <input
                    id="email"
                    type="text"
                    {...register('email')}
                    placeholder="john@example.com"
                    className={`bg-dark-500 py-4 px-6 placeholder:text-dark-300 text-dark-200 rounded-lg outline-none border-none font-medium ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                </label>
                {errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="flex flex-col">
                  <span className="text-dark-200 font-medium mb-4">
                    Message
                  </span>

                  <textarea
                    id="message"
                    {...register('message')}
                    placeholder="Enter your message here..."
                    className={`bg-dark-500 py-4 px-6 placeholder:text-dark-300 text-dark-200 rounded-lg outline-none border-none font-medium ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    rows={4}
                  />
                </label>
                {errors?.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative overflow-hidden border-none px-8 py-3 rounded-full font-semibold text-white shadow-md transition-transform duration-300 ease-in-out transform hover:opacity-95 hover:translate-y-[-5px] active:translate-y-0"
              >
                <span className="absolute inset-0 z-0 button-gradient rounded-lg" />
                <span className="relative z-10">
                  {loading ? 'Sending...' : 'Send'}
                </span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
