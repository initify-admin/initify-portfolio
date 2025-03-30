"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import { faqs } from "@/data/faqs";
import {
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "./ui/section";
import { Accordion, AccordionTrigger, AccordionContent } from "./ui/accordion";

export default function FAQs() {
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
          className="flex flex-col xl:flex-row gap-y-8 sm:gap-y-12 gap-x-36"
        >
          <div className="flex flex-col gap-y-6 sm:gap-y-8">
            <h1 className="font-onest font-medium text-dark text-[2.25rem] lg:text-[2.5rem] xl:text-[2.625rem] tracking-[-0.158rem] lg:tracking-[-0.175rem] xl:tracking-[-0.184rem] leading-[2.475rem] lg:leading-[2.75rem] xl:leading-[2.888rem]">
              Common Qs
            </h1>

            <p className="w-[25rem] text-body font-onest font-medium text-[0.938rem] sm:text-base xl:text-lg tracking-[-0.019rem] sm:tracking-[-0.02rem] xl:tracking-[-0.023rem] leading-[1.313rem] sm:leading-[1.4rem] xl:leading-[1.575rem]">
              Get quick answers about working with us and our approach to
              digital solutions. Can{"'"}t find what you{"'"}re looking for?
              Reach out below!
            </p>
          </div>

          <div className="flex flex-col grow">
            {faqs.map((item, index) => (
              <Accordion key={index}>
                {({ isOpen, toggle }) => (
                  <>
                    <AccordionTrigger isOpen={isOpen} toggle={toggle}>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent isOpen={isOpen}>
                      {item.answer}
                    </AccordionContent>
                  </>
                )}
              </Accordion>
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
