'use client';

import React from 'react'
import SectionHeading from "@/components/section-heading";
import {useSectionInView} from "@/lib/hooks";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experiencesData} from "@/lib/data";
import ExperienceElement from "@/components/experience-element";

export default function Experience() {

    const { ref } = useSectionInView("Experience");

    return (
        <section id='experience'
                 ref={ref}
                 className="scroll-mt-28 mb-28 sm:mb-40">

            <SectionHeading>My Experience</SectionHeading>

            <VerticalTimeline lineColor=''>
                {
                    experiencesData.map((item, index) => (
                            <ExperienceElement key={index} item={item} />
                    ))
                }
            </VerticalTimeline>
        </section>
    );

}
