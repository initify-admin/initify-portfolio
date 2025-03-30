"use client";

import { useRef } from "react";
import { PlusIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  SectionWrapper,
  SectionContentWrapper,
  SectionContent,
  SectionSubheading,
} from "./ui/section";
import { ourUses } from "@/data/our-uses";
import { transitionDuration, transitionEffect } from "@/lib/utils";

interface UseItemProps {
  index: number;
  title: string;
  description: string;
}

export default function OurUses() {
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
          <SectionSubheading className="max-w-[810px] xl:text-[2.625rem] xl:tracking-[-0.184rem] xl:leading-[2.888rem]">
            This is how we help ambitious companies succeed.
          </SectionSubheading>

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

function UseItem({ index, title, description }: UseItemProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="w-full py-6 rounded-lg bg-transparent flex justify-between items-center transition-colors duration-300"
      variants={{
        initial: { backgroundColor: "transparent" },
        hover: { backgroundColor: "var(--primary-blue)" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        variants={{
          initial: { x: 0 },
          hover: { x: 20 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-start gap-x-28"
      >
        {/* Explicitly animate color */}
        <motion.h1
          variants={{
            initial: { color: "var(--dark)" },
            hover: { color: "#ffffff" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="font-medium font-onest text-4xl tracking-[-0.158rem]"
        >
          0{index + 1}
        </motion.h1>

        <motion.h1
          variants={{
            initial: { color: "var(--dark)" },
            hover: { color: "#ffffff" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="font-medium font-onest text-[3.75rem] tracking-[-0.263rem] leading-[3.75rem] whitespace-nowrap"
        >
          {title}
        </motion.h1>
      </motion.div>

      <motion.div
        variants={{
          initial: { x: 0 },
          hover: { x: -20 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-start gap-x-8 relative"
      >
        <motion.p
          variants={{
            initial: { opacity: 0, color: "var(--dark)" },
            hover: { opacity: 1, color: "#ffffff" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-base sm:text-lg xl:text-xl font-onest tracking-[-0.023rem] leading-6 w-[610px] font-medium"
        >
          {description}
        </motion.p>

        <motion.div
          variants={{
            initial: { opacity: 1, color: "var(--dark)" },
            hover: { opacity: 0, color: "#ffffff" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <PlusIcon className="size-10" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
