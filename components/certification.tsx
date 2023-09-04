"use client";

import React, { useRef } from 'react'
import { certifData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";

type CertifProps = (typeof certifData)[number];

export default function Certification() {
  return (
    <div>
        <h2 className='text-3xl font-bold capitalize mb-8 text-center'>
            Certifications
        </h2>
        <div>
            {
                certifData.map((certif, index) => (
                    <React.Fragment key={index}>
                        <Project {...certif} />
                    </React.Fragment>
                ))
            }
        </div>
        <a 
            href='https://www.linkedin.com/in/hafidikhsana/#:~:text=Student%20Ketoprak%20Festival)-,Licenses%20%26%20certifications,-Licenses%20%26%20certifications'
            target='_blank'
        >
            <p className='text-md mb-16 text-center'>
                And 20 More on LinkedIn
            </p>
        </a>
    </div>
  )
}

function Project({title, description, tags, imageUrl, url}: CertifProps) {
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
                className='group mb-8'>
                <a
                    href={url}
                    target='_blank'
                >
                <div className='bg-blue-800 max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-blue-900 transition'>
                    <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        <p className='mt-2 leading-relaxed text-gray-400'>{description}</p>
                        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                            {
                                tags.map ((tag, index) => (
                                    <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'>{tag}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <Image 
                        src={imageUrl}
                        alt={title}
                        className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-xl shadow-2xl
                        transition 
                        group-hover:scale-[1.04]
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-2'
                    />
                </div>
        </a>  
            </motion.div>
    )
}