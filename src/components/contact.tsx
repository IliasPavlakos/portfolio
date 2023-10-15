'use client';

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import {useSectionInView} from "@/lib/hooks";
import {sendEmail} from "../../actions/sendEmail";
import SubmitButton from "@/components/submit-button";


export default function Contact(){

    const { ref } = useSectionInView("Contact");

    return (
      <motion.section id='contact'
                      ref={ref}
                      className='mb-20 sm:mb-28 w-[min(100%,38rem)]'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}>

          <SectionHeading>Contact Me</SectionHeading>

          <p className='text-gray-700 text-center -mt-4'>
              Please contact me directly at&nbsp;
              <a className='underline hover:text-sky-600 transition' href='mailto:pavlakosilias@outlook.com'>pavlakosilias@outlook.com</a>
              &nbsp;or through this form
          </p>

          <form className='mt-10 flex flex-col items-center'
                action={async (formData) => {
                    await sendEmail(formData);
                }}
          >
              <input name='senderEmail'
                     type='email'
                     placeholder='Your email'
                     required
                     maxLength={200}
                     className='w-full h-14 rounded-lg borderBlack px-4'/>
              <textarea name='message'
                        placeholder='Your message'
                        required
                        maxLength={1000}
                        className='w-full h-52 my-3 rounded-lg borderBlack p-4'/>
              <SubmitButton />
          </form>

      </motion.section>
    );

}
