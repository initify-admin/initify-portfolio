"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  SectionContent,
  SectionContentWrapper,
  SectionSubheading,
  SectionWrapper,
} from "./ui/section";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import ProjectItem from "./ui/project-item";
import { ourPorjects } from "@/data/our-projects";

export default function OurProjects() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper className="mt-24">
      <SectionContentWrapper>
        <SectionContent
          ref={contentRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: transitionDuration,
            ease: transitionEffect,
          }}
          className="flex flex-col gap-y-20"
        >
          <div className="flex flex-col gap-y-8">
            <SectionSubheading className="xl:text-[3.75rem] xl:tracking-[-0.263rem] xl:leading-[4.125rem]">
              Our Recent Projects
            </SectionSubheading>

            <p className="text-lg leading-6 text-body font-onest font-medium tracking-[-0.023rem] xl:w-[37.5rem]">
              Dive into our diverse collection of innovative projects, where
              creativity meets cutting-edge technology to solve real-world
              challenges.
            </p>
          </div>

          {/* Process Items Container */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {ourPorjects.map((project, index) => (
              <ProjectItem
                key={index}
                name={project.name}
                liveLink={project.liveLink}
                image={project.image}
                works={project.works}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
