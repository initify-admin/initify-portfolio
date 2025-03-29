"use client";

import { ProjectItem as ProjectItemProps } from "@/types/our-projects";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  name,
  liveLink,
  image,
  works,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="w-full flex justify-center items-center rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-y-4">
        <h1 className="text-[1.875rem] leading-[2.25rem] tracking-[-0.075rem] text-dark font-onest font-medium">
          {name}
        </h1>

        <div className="flex gap-x-2 items-center flex-wrap">
          {works.map((work, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-3 py-1.5 text-body rounded-xl border font-medium border-[rgba(12,18,12,.6)]"
            >
              {work}
            </div>
          ))}

          <Link
            href={liveLink}
            target="_blank"
            className="group p-2 rounded-xl"
          >
            <MoveUpRight className="text-primary-blue size-5 lg:size-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );
}
