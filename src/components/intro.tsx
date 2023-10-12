"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>

            <div className='relative'>

                <motion.div 
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{ type: "tween", duration: 0.2 }}
                >

                    <Image src='/profile-circle.png' alt='Ilias image'
                      width={723} height={723} quality={95} priority={true} 
                      className='w-24 h-24 border-solid border-[0.35rem] border-white rounded-full object-cover shadow-xl'
                    />

                </motion.div>

                <motion.span 
                  className='absolute bottom-0 right-0 text-4xl'
                  initial={{opacity: 0, scale: 0}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{ type: "spring", stiffness: 150, delay: 0.1, duration: 0.7 }}
                >
                    👋
                </motion.span>

            </div>

        </div>

        <motion.p className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl'
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
        >
                <span className='font-bold'>Hello, I'm Ilias Pavlakos</span>.
                I'm a <span className='font-bold'>software engineer</span> passionate about crafting intricate enterprise-level solutions. 
                My expertise lies in  
                <span className='font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-500 to-pink-500 hover:text-purple-500 transition duration-500'> 
                  &nbsp;.NET&nbsp;
                </span> 
                and <span className='font-bold text-transparent bg-clip-text 
                  bg-gradient-to-t from-[#fde047] to-[#eab308] hover:text-[#eab308] transition duration-500'>
                    &nbsp;databases
                </span>, 
                and I'm currently exploring 
                <span className='font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-sky-600 to-sky-300 hover:text-sky-600 transition duration-500'> 
                  &nbsp;React
                </span>.

        </motion.p>

    </section>
  )
}
