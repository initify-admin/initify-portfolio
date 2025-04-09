"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "./ui/section";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import ProjectItem from "./ui/project-item";
import { ourProjects } from "@/data/projects";

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="projects" className="mt-24">
      <SectionContentWrapper>
        <SectionContent
          ref={contentRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: transitionDuration,
            ease: transitionEffect,
          }}
          className="flex flex-col gap-y-8 lg:gap-y-10 xl:gap-y-12"
        >
          <div className="flex flex-col gap-y-4">
            <h1 className="font-onest font-medium text-dark text-[2.25rem] lg:text-[2.5rem] xl:text-[2.625rem] tracking-[-0.158rem] lg:tracking-[-0.175rem] xl:tracking-[-0.184rem] leading-[2.475rem] lg:leading-[2.75rem] xl:leading-[2.888rem]">
              Our Recent Projects
            </h1>

            <p className="text-body font-onest font-medium text-base sm:text-lg tracking-[-0.019rem] sm:tracking-[-0.023rem] leading-[1.313rem] sm:leading-[1.575rem] xl:w-[37.5rem]">
              Dive into our diverse collection of innovative projects, where
              creativity meets cutting-edge technology to solve real-world
              challenges.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-y-6">
            {/* Process Items Container */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
              {ourProjects
                .slice(0, showAllProjects ? ourProjects.length : 6)
                .map((project, index) => (
                  <ProjectItem
                    key={index}
                    name={project.name}
                    liveLink={project.liveLink}
                    image={project.image}
                    works={project.works}
                  />
                ))}
            </div>

            {ourProjects.length > 6 && (
              <button
                onClick={() => setShowAllProjects((prev) => !prev)}
                className="tracking-[-0.7px] font-onest cursor-pointer text-lg lg:text-xl text-dark font-medium border-b-2 border-dark p-1"
              >
                {showAllProjects ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
