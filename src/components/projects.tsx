import SectionHeading from "@/components/section-heading";
import {projectsData} from "@/lib/data";
import Project from "@/components/project";
import React from "react";

export default function Projects() {
    return (
        <section>
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
