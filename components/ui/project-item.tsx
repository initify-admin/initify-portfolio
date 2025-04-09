"use client";

import { useEffect, useState } from "react";
import { ProjectItem as ProjectItemProps } from "@/types/projects";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectItem({
  name,
  liveLink,
  image,
  works,
}: ProjectItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="flex flex-col gap-y-3 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={liveLink}
        className="w-full flex justify-center items-center rounded-xl overflow-hidden"
      >
        <motion.div
          className="w-full h-auto rounded-xl"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt={name}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </Link>

      <h1 className="text-[1.75rem] xl:text-[1.875rem] tracking-[-0.065rem] sm:tracking-[-0.07rem] xl:tracking-[-0.075rem] leading-[1.95rem] sm:leading-[2.1rem] xl:leading-[2.25rem] text-dark font-onest font-medium">
        {name}
      </h1>

      <motion.div
        className="flex gap-x-2 items-center flex-wrap"
        initial={{ y: isLargeScreen ? 20 : 0, opacity: isLargeScreen ? 0 : 1 }}
        animate={{
          y: isLargeScreen ? (isHovered ? 0 : 20) : 0,
          opacity: isLargeScreen ? (isHovered ? 1 : 0) : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {works.map((work, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-3 py-1.5 text-body rounded-xl border font-medium border-[rgba(12,18,12,.6)] text-sm sm:text-base"
          >
            {work}
          </div>
        ))}

        <Link href={liveLink} target="_blank" className="group p-2 rounded-xl">
          <MoveUpRight className="text-primary-blue size-5 lg:size-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </Link>
      </motion.div>
    </div>
  );
}
