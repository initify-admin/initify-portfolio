"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ourProcesses } from "@/data/processes";
import {
  SectionContent,
  SectionContentWrapper,
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "./ui/section";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import ProcessItem from "./ui/process-item";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <SectionWrapper id="process" className="mt-24 py-24 bg-dark">
      <SectionContentWrapper>
        <SectionContent
          ref={contentRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: transitionDuration,
            ease: transitionEffect,
          }}
          className="flex flex-col gap-y-20 xl:gap-y-[10rem]"
        >
          <div className="flex flex-col gap-y-8 xl:flex-row justify-between items-start">
            <SectionHeading className="text-white">
              /Our Process/
            </SectionHeading>

            <SectionSubheading className="xl:w-[60%] text-white">
              Our mission is to help businesses grow through strategic design,
              creating work that performs as good as it looks.
            </SectionSubheading>
          </div>

          {/* Process Items Container */}
          <div className="w-full flex flex-col gap-y-4 xl:flex-row gap-x-4">
            {ourProcesses.map((process, index) => (
              <ProcessItem
                key={index}
                index={index}
                title={process.title}
                description={process.description}
                isActive={index === activeIndex}
                onClick={() => isMobile && setActiveIndex(index)}
                onHover={() => !isMobile && setActiveIndex(index)}
                view={isMobile ? "small" : "large"}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
