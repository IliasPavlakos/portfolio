'use client';

import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {UseActiveSectionContext} from "../../context/active-section-context";

export default function Projects() {

    const {ref, inView} = useInView({
        threshold: 0.5,
    });
    const {setActiveSection, timeOfLastClick} = UseActiveSectionContext();

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection("Projects");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

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
