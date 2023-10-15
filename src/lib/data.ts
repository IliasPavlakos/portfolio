import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioWebsiteProjectImage from "/public/portfolio-website-screenshot.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
        title: "Software Developer",
        location: "Athens, Attiki, Greece",
        description: "Energy/Natural Gas Billing Systems\nIntegration with CRM/ERP Systems",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - Present",
    },
    {
        title: "Bachelor's Degree, Computer Science",
        location: "Athens University of Economics and Business",
        description: "Modules: Information Systems and Information Security, Operations Research and Economics of Information Technology",
        icon: React.createElement(LuGraduationCap),
        date: "2016 - 2021",
    },
] as const;

export const projectsData = [
  {
    title: "This portfolio website",
    description: "My latest project that helped me jumpstart my web skills.tsx using Next.js, React, Typescript, Tailwind and Framer-Motion",
    tags: ["Next.js", "React", "Typescript"],
    imageUrl: portfolioWebsiteProjectImage,
  },
  {
    title: "Music Streaming Android App",
    description: "App created based on Spotify’s architecture written in Java and android studio for the client app",
    tags: ["Java", "Android Studio"],
    imageUrl: portfolioWebsiteProjectImage,
  },
] as const;

export const skillsData = [
    ".Net",
    ".Net Framework",
    "C#",
    "Entity Framework",
    "ASP.NET MVC",
    "T-SQL",
    "Microsoft SQL Server",
    "DevExpress",
    "Winforms",
    "Git",
    "GitLab CI/CD",
    "Perforce Helix Core",
] as const;
