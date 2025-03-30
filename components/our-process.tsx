"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ourProcesses } from "@/data/our-processes";
import {
  SectionContent,
  SectionContentWrapper,
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "./ui/section";
import { transitionDuration, transitionEffect } from "@/lib/utils";

interface ProcessItemProps {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  view: "small" | "large";
}

export default function OurProcess() {
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
    <SectionWrapper className="mt-24 py-24 bg-dark">
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

function ProcessItem({
  index,
  title,
  description,
  isActive,
  onHover,
  onClick,
  view,
}: ProcessItemProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onClick={onClick}
      animate={{
        width: view === "small" ? "100%" : isActive ? "60%" : "20%",
        height: view === "small" ? (isActive ? "420px" : "200px") : "31.25rem",
        opacity: isActive ? 1 : 0.3,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col p-8 justify-between border border-white/80 rounded-lg cursor-pointer"
    >
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="tracking-[0.023rem] font-onest font-medium text-white text-base xl:text-lg leading-6">
          0{index + 1}
        </h1>

        <h1 className="font-onest font-medium text-white text-4xl sm:text-[2.5rem] xl:text-[2.625rem] tracking-[-0.158rem] sm:tracking-[-0.175rem] xl:tracking-[-0.184rem] leading-[2.5rem] sm:leading-[2.75rem] xl:leading-[2.888rem]">
          {title}
        </h1>
      </div>

      <motion.p
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="tracking-[-0.045rem] sm:tracking-[-0.05rem] xl:tracking-[-0.055rem] font-onest font-medium text-white/80 text-xl xl:text-[1.375rem] leading-[1.875rem] xl:max-w-[28.125rem]"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
