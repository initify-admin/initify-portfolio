"use client";

import { motion } from "framer-motion";

interface ProcessItemProps {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
  onClick: () => void;
  view: "small" | "large";
}

export default function ProcessItem({
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
