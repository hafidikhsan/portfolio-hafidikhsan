import React from "react";
import uiuxImg from "@/public/uiux.png";
import baturImg from "@/public/batur.png";
import ieltsImg from "@/public/ielts.png";
import mpbeImg from "@/public/mpbe.png";
import flutterImg from "@/public/Dicoding Flutter Expert.jpg";
import iosImg from "@/public/Dicoding Belajar Fundamental IOS.png";
import mlImg from "@/public/Dicoding Belajar Pengembangan Machine Learning.png";
import { FaGraduationCap, FaBook, FaGuitar, FaMicroscope } from "react-icons/fa";
import { FaCamera, FaCode, FaPython } from "react-icons/fa6";

export const experiencesData = [
  {
    title: "Graduated Senior High School 1 Karanganom",
    location: "Klaten, Central Java",
    description:
      "I graduated from Senior High School 1 Karanganom Physical Sciences studies after 3 years of studying with the average score national examination is 85.75.",
    icon: React.createElement(FaGraduationCap),
    date: "2019",
  },
  {
    title: "Join Telkom University Computer Engineering Bachelor Degree",
    location: "Bandung, West Java",
    description:
      "Join Computer Engineering Bachelor Degree in Telkom University College.",
    icon: React.createElement(FaBook),
    date: "2019",
  },
  {
    title: "Join Djawa Tjap Parabola Community",
    location: "Bandung, West Java",
    description:
      "Join Djawa Tjap Parabola Community in Information Communication Technology Division. In this community I join Keroncong team and play in various traditional event, Designing posters and Instagram feed, In charge of making introduction video and In charge of making Instagram feed concept.",
    icon: React.createElement(FaGuitar),
    date: "2019 - 2022",
  },
  {
    title: "Physics Laboratory Assistant",
    location: "Online",
    description:
      "Elementary Physics Practicum Assistant 2020/2021 and 2021/2022. Join Information Communication Technology Division and Responsible for making Running Module Physics Laboratory Practicum 2020/2021 videos, Recruitment Laboratory Assistant videos, and Introduction of Information Systems Management Division videos. In second year, I promoted to Leadership Evaluation and Discipline Committee in MSI Division and responsible in Leadership Evaluation and Discipline for member in Information Systems Management Division and making and managing data recapitulation for Elementary Physics Practicum 2021/2022.",
    icon: React.createElement(FaMicroscope),
    date: "2020 - 2022",
  },
  {
    title: "Joint Himpunan Mahasiswa Teknik Komputer",
    location: "Online",
    description:
      "Join Himpunan Mahasiswa Teknik Komputer organization in Information Communication Technology Division. In this organization I designing infographics posters and Instagram feed, In charge of making Perintis Cabinet introduction video and making copywriting for Instagram post.",
    icon: React.createElement(FaCamera),
    date: "2021 - 2022",
  },
  {
    title: "Joint Certified Independent Study (SIB) Independent Campus Program batch 2",
    location: "Online",
    description:
      "Learning Multi-Platform and Back End Developer at Dicoding Indonesia as part of Certified Independent Study (SIB) Independent Campus Program batch 2 and Create mobile app “Bandung Tourism” for Capstone Project as a Front-End Flutter Developer.",
    icon: React.createElement(FaCode),
    date: "2022",
  },
  {
    title: "Develop IELTS Speaking Simulation",
    location: "Bandung, West Java",
    description:
      "Developing an IELTS Speaking Simulation App for College Capstone Project as a Machine Learning Developer.",
    icon: React.createElement(FaPython),
    date: "2022 - 2023",
  },
  {
    title: "Graduated from Telkom University Computer Engineering Bachelor Degree",
    location: "Bandung, West Java",
    description:
      "Graduated from Telkom University Computer Engineering Bachelor Degree with the cumulative GPA 3.92/4.0",
    icon: React.createElement(FaGraduationCap),
    date: "2023",
  },
] as const;
  
export const projectsData = [
    {
      title: "Labs App",
      description:
        "Designing UI/UX of Labs App that is an App for Laboratory in Computer Engineering and win for the 3rd place UI/UX Design Competition",
      tags: ["UI", "UX", "Figma"],
      imageUrl: uiuxImg,
    },
    {
      title: "Bandung Tourism",
      description:
        "I worked as UI/UX Designer and Front-End Mobile Developer using Flutter for Capstone Project Certified Independent Study",
      tags: ["Flutter", "Dart", "UI", "UX", "Figma",],
      imageUrl: baturImg,
    },
    {
      title: "IELTS Speaking Simulation",
      description:
        "I worked as Machine Learning Developer to develop 4 Machine Learning model for Final Capstone Project",
      tags: ["Python", "TensorFlow", "Transformers"],
      imageUrl: ieltsImg,
    },
] as const;

export const awardsData = [
    {
      title: "3rd Place UI/UX Competition Centurion 2023",
      description:
        "Designing UI/UX of Labs App that is an App for Laboratory in Computer Engineering and win for the 3rd place UI/UX Design Competition",
      imageUrl: uiuxImg,
    },
    {
      title: "Top 10 The Best Graduate",
      description:
        "Top 10 The Best Graduate Certified Independent Study (SIB) Independent Campus Program batch 2 Learning Path Multi-Platform and Back End Developer at Dicoding Indonesia",
      imageUrl: mpbeImg,
    },
] as const;
  
export const specialSkillsData = [
    "Flutter",
    "Dart",
    "Next.js",
    "Tailwind",
    "Python",
] as const;

export const othersSkillsData = [
    "Swift",
    "SwiftUI",
    "React Native",
    "HTML",
    "JavaScript",
    "TypeScript",
    "React",
    "TensorFlow",
    "Transformers",
    "Flask",
    "Figma",
    "VS Code",
    "Github",
    "Git",
] as const;

export const certifData = [
  {
    title: "Flutter Developer Expert",
    description:
      "Dicoding Indonesia (Apr 2022 - Apr 2025)",
    tags: ["Flutter", "Dart", "Programming", "OOP"],
    imageUrl: flutterImg,
    url: "https://www.dicoding.com/certificates/GRX5LN6QVP0M",
  },
  {
    title: "iOS Application Fundamentals",
    description:
      "Dicoding Indonesia (Sep 2022 - Sep 2025)",
    tags: ["SwiftUI", "Swift", "Programming", "OOP"],
    imageUrl: iosImg,
    url: "https://www.dicoding.com/certificates/6RPNDE0G5Z2M",
  },
  {
    title: "Machine Learning Development",
    description:
      "Dicoding Indonesia (Jan 2023 - Jan 2026)",
    tags: ["Machine Learning", "Deep Learning", "Python", "Programming", "TensorFlow"],
    imageUrl: mlImg,
    url: "https://www.dicoding.com/certificates/L4PQ62VVQPO1",
  },
] as const;