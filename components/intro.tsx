"use client";

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaInstagram, FaLinkedin, FaGooglePlusSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="mb-16 max-w-[50rem] text-center scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.4,
                }}
            >
                <Image 
                    src="/Profile.png"
                    alt="Hafid Ikhsan Arifin Image"   
                    width={200}
                    height={200}
                    quality={95}
                />
            </motion.div>
        </div>
        <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
            className='mb-10 mt-4 px-4 pt-4 text-xl font-medium !leading-[1.5] sm:text-2xl'>
            <span>Hi, my name is </span>
            <span className='font-bold'>Hafid Ikhsan Arifin, </span>
            <span>I'm a </span>
            <span className='font-bold'>Front-End Mobile </span>
            <span>and </span>
            <span className='font-bold'>Website Developer </span>
            <span>with </span>
            <span className='font-bold italic'>Flutter </span>
            <span>and </span>
            <span className='font-bold italic'>Next.JS </span>
            <span>and </span>
            <span className='font-bold'>Machine Learning Developer </span>
            <span>with </span>
            <span className='font-bold italic'>TensorFlow </span>
            <span>and </span>
            <span className='font-bold italic'>Transformers.</span>
        </motion.h1>

        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-3 px-2 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}>
            <a 
                className='bg-white text-blue-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer'
                href='/CV Hafid Ikhsan Arifin.pdf'
                download={true}
            >
                Download CV <HiDownload />
            </a>
            <div className='flex flex-row gap-3 py-4'>
                <a 
                    className='bg-blue-800 text-gray-400 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 active:text-white transition cursor-pointer borderBlack'
                    href='mailto:hafidikhsanarifin@gmail.com'
                    target='_blank'
                >
                    <FaGooglePlusSquare />
                </a>
                <a 
                    className='bg-blue-800 text-gray-400 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 active:text-white transition cursor-pointer borderBlack'
                    href='https://linkedin.com/in/hafidikhsana'
                    target='_blank'
                >
                    <FaLinkedin />
                </a>
                <a 
                    className='bg-blue-800 text-gray-400 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 active:text-white transition cursor-pointer borderBlack'
                    href='https://github.com/hafidikhsan'
                    target='_blank'
                >
                    <FaGithubSquare />
                </a>
                <a 
                    className='bg-blue-800 text-gray-400 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-white active:scale-105 active:text-white transition cursor-pointer borderBlack'
                    href='https://www.instagram.com/hafidikhsana/'
                    target='_blank'
                >
                    <FaInstagram />
                </a>
            </div>
        </motion.div>
    </div>
  )
}
