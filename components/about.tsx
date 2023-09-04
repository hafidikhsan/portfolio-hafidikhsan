"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div 
        className='mb-16 max-w-[45rem] text-center leading-8'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.175,
        }}
    >
        <h2 className='text-3xl font-bold capitalize mb-8 text-center'>
            About Me
        </h2>
        <p>
            After graduating from Telkom University Bandung majoring 
            in Bachelor of Computer Engineering, I'm a person who 
            is highly interested and very 
            passionate about front-end web development 
            using React, Next.JS, and Tailwind CSS, and also 
            mobile development using SwiftUI 
            and Flutter. I have loved slicing from UI Design to 
            a program for almost 3 years. In the last 1 year, I have 
            also learned about machine learning, especially 
            speech and text processing using TensorFlow and 
            Transformers for my final Capstone Project.
        </p>
        <p>
            Another activity that I love is UI Design, playing 
            musical instruments such as guitar or drum, watching 
            movies, watching sports like football or F1, and doing sports like 
            football or badminton. I also enjoy learning 
            new thinks. I'm an organized person and ready 
            to accept new challenges to be the best I can be.
        </p>
    </motion.div>
  )
}
