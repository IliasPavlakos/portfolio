'use client';

import React, {useContext, useState} from 'react'
import {links} from "@/lib/data";
import type {SectionName} from '@/lib/types';

type ActiveSectionContextProviderProps = { children: React.ReactNode; };
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext
    = React.createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {

    const [activeSection, setActiveSection] = useState<SectionName>('Home');

    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider value={{
                activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );

}

export function UseActiveSectionContext(){

    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error("UseActiveSectionContext must be used within an ActiveSectionContextProvider");
    }

    return context;

}
