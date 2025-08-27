"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
// import GitHubGraph from "@/app/components/ui/GithubGraph";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";

const skills = {
  design: [
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Canva",
    "Figma",
  ],
  development: [
    "React.js & Next.js",
    "TypeScript & JavaScript",
    "HTML & CSS",
    "Node.js",
    "Tailwind CSS",
    "Responsive Design",
  ],
  tools: ["VS Code", "Git & GitHub", "Vercel", "Netlify"],
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current; // Store the ref's current value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Cleanup uses the stored reference
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-16 px-6 md:py-24 md:px-20 lg:py-32 lg:px-44 bg-[#03040B] text-[#FAF9F6]"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium  bg-gradient-to-r from-amber-600 to-purple-600  text-primary rounded-full mb-6">
            Expertise
          </span>
          <h2 className="text-4xl font-medium mb-6">
            My <span className="text-gradient">skills</span> & tools
          </h2>
          <p className="section-subheading mx-auto">
            A comprehensive collection of my technical skills, design expertise,
            and the tools I use to bring creative ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <SkillCategory
            title="Design"
            skills={skills.design}
            animationDelay={0}
            isInView={isInView}
          />
          <SkillCategory
            title="Development"
            skills={skills.development}
            animationDelay={200}
            isInView={isInView}
          />
          <SkillCategory
            title="Tools"
            skills={skills.tools}
            animationDelay={400}
            isInView={isInView}
          />
        </div>
        <div className="overflow-hidden  flex justify-around rounded-lg border border-gray-700 p-4 bg-[#0f0f1a] mt-20 ">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-serif font-medium mb-8 pb-4 border-b">
              GitHub Contributions
            </h3>
            <Image src="/heart.png" alt="github" width={100} height={100} />
          </div>
          <GitHubCalendar username="omrindhe105" />
        </div>
      </div>
    </section>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  animationDelay: number;
  isInView: boolean;
}

function SkillCategory({
  title,
  skills,
  animationDelay,
  isInView,
}: SkillCategoryProps) {
  return (
    <div
      className={cn(
        "opacity-0 transform translate-y-10 transition-all duration-700",
        isInView && "opacity-100 translate-y-0"
      )}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div className=" shadow-sm shadow-purple-300 rounded-lg p-8 bg-[#03040B] hover:shadow-md transition-all h-full">
        <h3 className="text-2xl font-serif font-medium mb-8 pb-4 border-b">
          {title}
        </h3>
        <ul className="space-y-4">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-3" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
