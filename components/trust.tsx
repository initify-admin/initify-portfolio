"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "./ui/section";
import { trustReasons } from "@/data/trust";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import TrustItem from "./ui/trust-item";

export default function Trust() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="trust" className="mt-32">
      <SectionContentWrapper>
        <SectionContent
          ref={contentRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: transitionDuration,
            ease: transitionEffect,
          }}
          className="flex flex-col gap-y-12 lg:gap-y-16 xl:gap-y-20"
        >
          <h1 className="font-onest font-medium text-dark text-[2.25rem] lg:text-[2.5rem] xl:text-[2.625rem] tracking-[-0.158rem] lg:tracking-[-0.175rem] xl:tracking-[-0.184rem] leading-[2.475rem] lg:leading-[2.75rem] xl:leading-[2.888rem]">
            Why you can trust us
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustReasons.map((item, index) => (
              <TrustItem
                key={index}
                reason={item.reason}
                description={item.description}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
