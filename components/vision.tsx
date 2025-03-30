"use client";

import { useRef } from "react";
import {
  SectionWrapper,
  SectionContentWrapper,
  SectionContent,
  SectionHeading,
  SectionSubheading,
} from "./ui/section";
import { useInView } from "framer-motion";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import StatBlock from "./ui/stat-block";

export default function Vision() {
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
          className="flex flex-col xl:flex-row justify-between items-start gap-8"
        >
          <SectionHeading>/Our Vision/</SectionHeading>

          <div className="w-full xl:w-[60%] flex flex-col gap-y-12 sm:gap-y-16 xl:gap-y-24">
            <div className="flex flex-col gap-y-8">
              <SectionSubheading>
                Whether it{"'"}s a website, an app, or a complete brand identity
                - we create work that works.
              </SectionSubheading>

              <p className="text-[0.938rem] sm:text-base xl:text-lg text-body font-onest tracking-[-0.023rem] leading-6 sm:w-[63%] xl:w-[450px] font-medium">
                Good design isn{"'"}t just about looks. It{"'"}s about solving
                real problems and getting results. Here{"'"}s ours.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-y-8 gap-x-16 justify-start xl:justify-between md:items-center">
              <StatBlock title="47+" body="Projects delivered" />
              <StatBlock title="$2.2M+" body="Client revenue impacted" />
              <StatBlock title="95%" body="Client retention" />
            </div>
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
