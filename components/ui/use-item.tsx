"use client";

import { PlusIcon } from "lucide-react";
import { motion } from "framer-motion";

interface UseItemProps {
  index: number;
  title: string;
  description: string;
}

export default function UseItem({ index, title, description }: UseItemProps) {
  return (
    <>
      <motion.div
        whileHover="hover"
        initial="initial"
        className="hidden w-full py-6 rounded-lg bg-transparent mac:flex justify-between items-center transition-colors duration-300"
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
            className="text-xl font-onest tracking-[-0.023rem] leading-6 w-[610px] font-medium"
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

      <div className="flex mac:hidden flex-col gap-y-4 py-6">
        <div className="flex items-center gap-x-6 sm:gap-x-16 md:gap-x-24">
          <h1 className="font-medium font-onest text-2xl tracking-[-0.11rem] text-primary-blue">
            0{index + 1}
          </h1>

          <h1 className="font-medium font-onest text-[2.5rem] sm:text-[2.75rem] tracking-[-0.2rem] leading[2.75rem] sm:leading[3.025rem] whitespace-nowrap">
            {title}
          </h1>
        </div>

        <p className="text-base sm:text-lg text-body font-onest tracking-[-0.023rem] leading-6 font-medium">
          {description}
        </p>
      </div>
    </>
  );
}
