'use client';

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from "@/components/section-heading";

export default function About() {
    return (
        <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
        >
            <SectionHeading> About Me </SectionHeading>
            <p className='mb-3'>
                I have been passionate about programming since I was a kid.
                I&apos;m skilled in .NET and databases, and now, I&apos;m learning React and Blazor to keep up with the latest trends.
                Coffee is my go-to drink for staying energized during late-night coding sessions.
            </p>
        </motion.section>


    )
}
