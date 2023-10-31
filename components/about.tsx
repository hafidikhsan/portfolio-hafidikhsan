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
            After graduating from Telkom University in Bandung with a Bachelor's degree in Computer Engineering, I am deeply passionate about mobile development using SwiftUI and Flutter and also web development using React, Next.js, TypeScript, and Tailwind CSS. During my academic journey, I participated in a Certified Independent Study program sponsored by the Indonesian government through Dicoding Indonesia as a multi-platform and back-end developer. Over the past three years, I have been transforming UI designs into functional programs. In the last year, I also ventured into machine learning, specifically focusing on speech and text processing using TensorFlow and Transformers for my final Capstone Project.
        </p>
        <p>
            In addition to my primary interests, I also have a keen passion for tech, design, finance, and science. I am an enthusiast of music, movies, and sports, particularly football and Formula 1. I am confident in my capacity to swiftly learn and adapt to new technologies and environments. I eagerly embrace new challenges and consistently aim to be the best version of myself.
        </p>
    </motion.div>
  )
}
