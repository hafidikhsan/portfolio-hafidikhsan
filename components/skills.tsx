"use client";

import { othersSkillsData, specialSkillsData } from '@/lib/data'
import React from 'react'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <div className="text-center mb-16 max-w-[30rem] sm:max-w-[50rem]">
        <h2 className='text-3xl font-bold capitalize mb-8 text-center'>
            Programming Skills
        </h2>
        <h3 className='text-xl font-medium capitalize mb-4 text-center text-gray-400'>
            Special Skills
        </h3>
        <ul className='flex flex-wrap justify-center gap-2 text-lg mb-8'>
          {
            specialSkillsData.map((skill, index) => (
              <motion.li 
                key={index} 
                className="bg-blue-800 borderBlack rounded-xl px-5 py-3"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))
          }
        </ul>
        <h3 className='text-xl font-medium capitalize mb-4 text-center text-gray-400'>
            Others Skills
        </h3>
        <ul className='flex flex-wrap justify-center gap-2 text-lg'>
          {
            othersSkillsData.map((skill, index) => (
              <motion.li 
                key={index} 
                className="bg-blue-800 borderBlack rounded-xl px-5 py-3"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))
          }
        </ul>
    </div>
  )
}
