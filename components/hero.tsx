"use client";

import { MoveUpRight } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import HeroImg from "@/public/images/hero.webp";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import {
  SectionContentWrapper,
  SectionContent,
  SectionWrapper,
} from "./ui/section";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 20, mass: 0.7 });

  return (
    <SectionWrapper
      id="hero"
      className="flex flex-col justify-start items-start gap-y-16"
    >
      <SectionContentWrapper className="pt-16 md:pt-[6.75rem] 2xl:pt-[11.25rem]">
        <SectionContent className="flex justify-start flex-col lg:flex-row lg:justify-between gap-x-28 gap-y-8">
          <motion.div
            className="w-full max-w-[610px] 2xl:max-w-[780px] flex items-start justify-start"
            initial={{ x: "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: transitionDuration,
              ease: transitionEffect,
            }}
          >
            <h1 className="text-dark font-onest font-medium text-[3.5rem] leading-14 tracking-[-4px] md:text-[4rem] md:leading-16 2xl:text-[5rem] 2xl:leading-[6rem] 2xl:tracking-[-6px]">
              We design solutions that drive{" "}
              <span className="inline-block text-white bg-primary-blue px-1.5">
                business.
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="w-full sm:max-w-[395px] flex flex-col items-start justify-start gap-y-4 md:gap-y-6 xl:gap-y-16"
            initial={{ x: "50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: transitionDuration,
              ease: transitionEffect,
            }}
          >
            <p className="font-onest font-medium text-body text-lg tracking-[-0.8px] md:text-xl 2xl:text-[1.375rem]">
              At Initify, we help companies build stronger brands, better
              products, and websites that actually perform.
            </p>

            <button className="tracking-[-0.7px] font-onest group cursor-pointer text-lg lg:text-xl text-dark flex items-center gap-x-2 font-medium border-b-2 border-dark p-1">
              Browse our Services
              <MoveUpRight className="text-primary-blue size-5 lg:size-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </button>
          </motion.div>
        </SectionContent>
      </SectionContentWrapper>

      <div ref={sectionRef} className="w-full max-w-screen overflow-hidden">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: transitionDuration,
            ease: transitionEffect,
          }}
          style={{ scale }}
          className="w-full h-full will-change-transform origin-center"
        >
          <Image
            src={HeroImg}
            alt="Hero Image"
            placeholder="blur"
            layout="responsive"
            width={2000}
            height={1312}
            quality={100}
            className="size-full object-cover object-center max-h-[50rem]"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
