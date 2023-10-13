"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa';
import { LuSend } from 'react-icons/lu'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>

        <div className='flex items-center justify-center outline-none cursor-default'>

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

        <motion.p className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl
        outline-none cursor-default'
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

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 
        text-lg font-medium px-4' 
        initial={{ opacity: 0, y: 100  }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          
          <a href='/cv_ilias_pavlakos.pdf' download={true}
          className='group bg-gray-900 text-white px-7 py-3 rounded-full
          flex items-center gap-2
          shadow hover:shadow-md
          outline-none cursor-pointer focus:scale-[1.15] hover:scale-110 hover:bg-gray-950
          active:scale-105
          transition'>
            Download CV <HiDownload className="opacity-90 group-hover:text-green-400 group-active:text-green-400 transition"/>
          </a>

          <Link href='#contact' className='group bg-white px-7 py-3 rounded-full
          flex items-center gap-2 
          shadow hover:shadow-md
          outline-none cursor-pointer focus:scale-[1.15] hover:scale-110
          active:scale-105
          transition'>
            Contact me <LuSend className='opacity-90 group-hover:text-sky-400 group-active:text-sky-400  transition'/>
          </Link>

          <a href='https://www.linkedin.com/in/ilias-pavlakos-200913217/' target='_blank'
          className='group bg-white p-4 rounded-full
          outline-none cursor-pointer focus:scale-[1.15] hover:scale-110
          shadow hover:shadow-md
          active:scale-105
          transition'>
            <BsLinkedin className='group-hover:text-[#317daf] transition' />
          </a>
          
          <a href='https://github.com/IliasPavlakos' target='_blank' 
          className='group bg-white p-4 rounded-full
          outline-none cursor-pointer focus:scale-[1.15] hover:scale-110
          shadow hover:shadow-md
          active:scale-105
          transition'>
            <FaGithubSquare className='group-hover:text-[#a348ad] transition'/>
          </a>

        </motion.div>

    </section>
  )
}
