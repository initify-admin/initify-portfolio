"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  SectionWrapper,
  SectionContentWrapper,
  SectionContent,
} from "./ui/section";
import { ourUses } from "@/data/uses";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import UseItem from "./ui/use-item";

export default function Uses() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="uses" className="mt-24">
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
          <h1 className="xl:w-[810px] font-onest font-medium text-dark text-[2.25rem] lg:text-[2.5rem] xl:text-[2.625rem] tracking-[-0.158rem] lg:tracking-[-0.175rem] xl:tracking-[-0.184rem] leading-[2.475rem] lg:leading-[2.75rem] xl:leading-[2.888rem]">
            This is how we help ambitious companies succeed.
          </h1>

          <div className="flex flex-col divide-y divide-[rgba(151,151,151,0.2)]">
            {ourUses.map((use, index) => (
              <UseItem
                key={index}
                index={index}
                title={use.title}
                description={use.description}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
