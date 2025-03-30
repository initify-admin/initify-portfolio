"use client";
import React from "react";

import {
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "./ui/section";
import Link from "next/link";
import { socialItems } from "@/data/social";
import { navItems } from "@/data/header";

export default function Footer() {
  return (
    <SectionWrapper className="bg-dark mt-40 pt-16 pb-5">
      <SectionContentWrapper>
        <SectionContent className="flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-16 justify-between xl:flex-row">
            <div className="flex flex-col gap-y-8 sm:gap-y-10 xl:w-[40%]">
              <h1 className="text-white uppercase font-medium font-onest text-[2.75rem] sm:text-[3.25rem] xl:text-[3.75rem] tracking-[0.193rem] sm:tracking-[-0.228rem] xl:tracking-[-0.263rem] leading-[3.025rem] sm:leading-[3.575rem] xl:leading-[4.125rem]">
                Initify
              </h1>

              <p className="font-onest font-medium text-white/80 text-base sm:text-lg xl:text-xl tracking-[-0.02rem] sm:tracking-[-0.023rem] xl:tracking-[-0.025rem] leading-[1.4rem] sm:leading-[1.575rem] xl:leading-7">
                We help businesses succeed in the digital space by creating
                thoughtful solutions that combine smart design, reliable
                technology, and a deep understanding of what your users really
                need.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <h1 className="font-onest font-medium text-white/80 text-base sm:text-lg xl:text-xl tracking-[-0.02rem] sm:tracking-[-0.023rem] xl:tracking-[-0.025rem] leading-[1.4rem] sm:leading-[1.575rem] xl:leading-7">
                You can also email us at:
              </h1>

              <Link
                href="mailto:ankitparallax@gmail.com"
                className="font-onest font-medium text-white text-2xl sm:text-3xl xl:text-4xl"
              >
                ankitparallax@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex justify-between items-center gap-y-4">
            <ul className="flex flex-col lg:flex-row gap-y-2 gap-x-8">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-white font-onest font-medium text-[0.938rem] sm:text-base xl:text-lg tracking-[-0.019rem] sm:tracking-[-0.02rem] xl:tracking-[-0.023rem] leading-[1.313rem] sm:leading-[1.4rem] xl:leading-[1.575rem]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col lg:flex-row gap-y-2 gap-x-8">
              {socialItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    className="text-white font-onest font-medium text-[0.938rem] sm:text-base xl:text-lg tracking-[-0.019rem] sm:tracking-[-0.02rem] xl:tracking-[-0.023rem] leading-[1.313rem] sm:leading-[1.4rem] xl:leading-[1.575rem]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between">
            <h1 className="font-onest font-medium text-white/80 text-sm sm:text-base">
              ©2025 Opus, All Rights Reserved
            </h1>
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
