"use client";

import { experiencesData } from '@/lib/data';
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Educations() {
  return (
    <div className="mb-16">
        <h2 className='text-3xl font-bold mb-8 text-center'>
            Educations and Experiences
        </h2>
        <VerticalTimeline lineColor={ "#9ca3af" }>
          {
            experiencesData.map((experience, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#1e40af",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight:"0.4rem solid #1e40af",
                  }}
                  date={experience.date}
                  icon={experience.icon}
                  iconStyle={{
                    background: "#1e40af",
                    fontSize: "1.5rem",
                    border: "1px solid #9ca3af",
                  }}
    
                >
                  <h3>{experience.title}</h3>
                  <p>{experience.location}</p>
                  <p>{experience.description}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))
          }
        </VerticalTimeline>
    </div>
  )
}
