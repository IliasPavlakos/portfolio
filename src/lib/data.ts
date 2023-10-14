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
    title: "",
    location: "",
    description:
      "",
    icon: "",
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "This portfolio website",
    description: "My latest project that helped me jumpstart my web skills using Next.js, React, Typescript, Tailwind and Framer-Motion",
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

export const skillsData = [] as const;
