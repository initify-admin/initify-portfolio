"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  SectionContent,
  SectionContentWrapper,
  SectionHeading,
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
          className="flex flex-col gap-y-[10rem]"
        >
          <div className="flex justify-between items-start">
            <SectionHeading className="text-dark">
              /Our Recent Projects/
            </SectionHeading>

            <SectionSubheading className="w-[60%] text-dark">
              Dive into our diverse collection of innovative projects, where
              creativity meets cutting-edge technology to solve real-world
              challenges.
            </SectionSubheading>
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
