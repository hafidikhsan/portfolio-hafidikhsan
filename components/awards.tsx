"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import { awardsData } from '@/lib/data'
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof awardsData)[number];

export default function Awards() {
  return (
    <div className='relative'>
        <h2 className='text-3xl font-bold capitalize mb-8 text-center'>
            Awards
        </h2>
        <div className='mb-16 max-w-[50rem] flex gap-4 flex-col sm:flex-row'>
          {
            awardsData.map((award, index) => (
                <React.Fragment key={index}>
                    <Award {...award} />
                </React.Fragment>
            ))
          }
        </div>
    </div>
  )
}


function Award({title, description, imageUrl}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  return (  
      <motion.div 
          ref={ref}
          style={{
              scale: scaleProgess,
              opacity: opacityProgess,
          }}
          className='group mb-4'>
          <div className="max-w-sm sm:h-[28rem] bg-blue-800 rounded-lg shadow flex flex-col">
              <Image 
                  src={imageUrl}
                  alt={title}
                  className="rounded-t-lg"
                  width={1000}
                  height={1000}
                  quality={95}
              />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
              </div>
          </div>
      </motion.div>  
  )
}