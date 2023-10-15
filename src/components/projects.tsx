'use client';

import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {UseActiveSectionContext} from "../../context/active-section-context";
import {useSectionInView} from "@/lib/hooks";

export default function Projects() {

    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section id='projects'
                 ref={ref}
                 className='scroll-mt-28'>
            <SectionHeading> Projects </SectionHeading>
            <div>
                { projectsData.map((project, index) => (
                    <React.Fragment key={index} >
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
