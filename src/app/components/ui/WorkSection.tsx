"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
// import new_project from "@";

const projects = [
  {
    id: 1,
    title: "Newsletter Subscription App",
    category: "Front End Development",
    description:
      "A minimalist dark-themed newsletter subscription app that allows users to subscribe to my newsletter and receive updates on new articles and blog posts from me.",
    image:
      "https://res.cloudinary.com/dx3vqbb9r/image/upload/v1741050329/180shots_so_rdtbnq.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Elite Estate - Real Estate App",
    category: "Full Stack Development",
    description:
      "A comprehensive real estate application to streamline property listings and facilitate user interactions. The app is built using the MERN stack.",
    image:
      "https://res.cloudinary.com/dx3vqbb9r/image/upload/v1741094013/344801663-d23ab444-8830-47aa-8270-02af361aaf37_lq2qu4.png",
    link: "#",
  },
  {
    id: 3,
    title: "Zylo AI",
    category: "Front End Development",
    description:
      "A landing page for Zylo AI, a fictional AI company that provides AI-powered solutions for businesses. The design is inspired by the futuristic theme.",
    image:
      "https://res.cloudinary.com/dx3vqbb9r/image/upload/v1741050317/596shots_so_pytbhz.jpg",
    link: "#",
  },
];

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="work"
      className="py-16 px-6 md:py-24 md:px-20 lg:py-32 lg:px-44 bg-[#03040B] text-[#FAF9F6]"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-amber-600 to-purple-600 text-primary rounded-full mb-6">
            My work
          </span>
          <h2 className="text-4xl font-medium mb-6">Recent projects</h2>
          <p className="section-subheading mx-auto">
            A collection of my recent work across various industries and
            technologies. Each project represents a unique challenge and
            creative solution.
          </p>
        </div>

        {/* Mobile view (card-based layout) */}
        <div className="lg:hidden space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "bg-[#03040B] border-2 dark:bg-secondary/5 rounded-lg overflow-hidden shadow-sm",
                isInView &&
                  `animate-fade-up opacity-100 delay-[${index * 200}ms]`
              )}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-medium px-2 py-1 bg-[#03040B] text-[#FAF9F6] rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="flex items-center text-sm font-medium bg-[#03040B] text-[#FAF9F6]"
                  >
                    <span>View project</span>
                    <ArrowRight
                      size={14}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                  <Link
                    href={project.link}
                    className="rounded-full p-2 text-black bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view (interactive layout) */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={cn(
                    "cursor-pointer group transition-all border-l-2 pl-6 py-2 hover:border-purple-300",
                    activeProject.id === project.id
                      ? "border-purple-400"
                      : "border-black"
                  )}
                  onClick={() => setActiveProject(project)}
                >
                  <div
                    className={cn(
                      "transition-opacity duration-500 opacity-0 transform translate-y-4",
                      isInView &&
                        `animate-fade-up opacity-100 delay-[${index * 200}ms]`
                    )}
                  >
                    <span className="text-sm font-medium text-muted-foreground mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-[#FAF9F6] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <Link href={project.link}>
                      <div className="flex items-center text-sm font-medium text-[#FAF9F6]">
                        <span>View project</span>
                        <ArrowRight
                          size={14}
                          className="ml-1 transition-transform group-hover:translate-x-1"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-white/10 p-2 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              <Image
              src="/new_project.webp"

                // src={activeProject.image}
                alt={activeProject.title}
                width={600}
                height={450}
                className="w-full h-full object-cover rounded-lg aspect-[4/3]"
              />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-xs font-medium px-2 py-1 bg-white text-primary rounded-full mb-2 inline-block">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-medium text-[#FAF9F6]">
                      {activeProject.title}
                    </h3>
                  </div>

                  <Link
                    href={activeProject.link}
                    className="rounded-full p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={18} className="text-[#FAF9F6]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
