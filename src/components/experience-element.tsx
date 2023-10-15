import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import React from "react";

type ExperienceElementProps = {
    item: {
        date: string
        icon: React.ReactNode
        title: string
        location: string
        description: string
    }
}

export default function ExperienceElement({item} : ExperienceElementProps) {

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div ref={ref} className="vertical-timeline-element">
            <VerticalTimelineElement visible={inView}
                                     contentStyle={{
                                         background: '#f3f4f6',
                                         boxShadow: 'none',
                                         border: '1px solid rgba(0,0,0,0.05)',
                                         textAlign: 'left',
                                         padding: '1.3rem 2rem'
                                     }}
                                     contentArrowStyle={{
                                         borderRight: '0.4rem solid #9ca3af'
                                     }}
                                     date={item.date}
                                     icon={item.icon}
                                     iconStyle={{
                                         background: 'white',
                                         fontSize: '1.5rem'
                                     }}
            >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal !mt-0 text-gray-500'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
            </VerticalTimelineElement>
        </div>
    );
}
