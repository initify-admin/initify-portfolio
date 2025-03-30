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

export default function Trust() {
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
          className="flex flex-col gap-y-12 xl:gap-y-20"
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

function TrustItem({
  reason,
  description,
}: {
  reason: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex items-center gap-x-4">
        <div className="w-1 h-full bg-primary-blue rounded-sm" />
        <h1 className="font-onest font-medium text-dark text-[1.875rem] tracking-[-0.075rem] leading-[2.25rem]">
          {reason}
        </h1>
      </div>

      <p className="font-medium font-onest text-body text-xl tracking-[-0.025rem] leading-7">
        {description}
      </p>
    </div>
  );
}
