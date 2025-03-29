"use client";

import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionContentWrapper,
  SectionContent,
  SectionHeading,
  SectionSubheading,
} from "./ui/section";
import { ourUses } from "@/data/our-uses";

interface UseItemProps {
  index: number;
  text: string;
  description: string;
}

export default function OurUses() {
  return (
    <SectionWrapper className="mt-24">
      <SectionContentWrapper>
        <SectionContent className="flex flex-col gap-y-20">
          <div className="w-full flex justify-between items-start">
            <SectionSubheading className="max-w-[810px]">
              This is how we help ambitious companies succeed.
            </SectionSubheading>

            <SectionHeading>/Our Uses/</SectionHeading>
          </div>

          <div className="flex flex-col divide-y divide-[rgba(151,151,151,0.2)]">
            {ourUses.map((use, index) => (
              <UseItem
                key={index}
                index={index}
                text={use.text}
                description={use.description}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

function UseItem({ index, text, description }: UseItemProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="w-full py-6 rounded-lg bg-transparent flex justify-between items-center transition-colors duration-300"
      variants={{
        initial: { backgroundColor: "transparent" },
        hover: { backgroundColor: "var(--primary-blue)" },
      }}
    >
      <motion.div
        variants={{
          initial: { x: 0, color: "#0c120c" },
          hover: { x: 20, color: "#ffffff" }, // Move right & turn white
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center justify-start gap-x-28"
      >
        <h1 className="font-medium font-onest text-4xl tracking-[-0.158rem]">
          0{index + 1}
        </h1>

        <h1 className="font-medium font-onest text-[4.5rem] tracking-[-0.315rem] leading-[4.95rem]">
          {text}
        </h1>
      </motion.div>

      <motion.div className="flex items-center justify-start gap-x-8 relative">
        <motion.p
          variants={{
            initial: { opacity: 0, x: 0, color: "#0c120c" },
            hover: { opacity: 1, x: -20, color: "#ffffff" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-base sm:text-lg xl:text-xl font-onest tracking-[-0.023rem] leading-6 xl:w-[610px] font-medium"
        >
          {description}
        </motion.p>

        <motion.div
          variants={{
            initial: { opacity: 1, x: 0, color: "#0c120c" },
            hover: { opacity: 0, x: -20, color: "#ffffff" },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <PlusIcon className="size-10" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
