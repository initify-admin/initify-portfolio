"use client";

import { PlusIcon } from "lucide-react";
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
    <div className="w-full py-6 rounded-lg bg-transparent flex justify-between items-center">
      <div className="flex items-center justify-start gap-x-16">
        <h1 className="text-dark font-medium font-onest text-4xl tracking-[-0.158rem]">
          0{index + 1}
        </h1>

        <h1 className="text-dark font-medium font-onest text-[4.5rem] tracking-[-0.315rem]">
          {text}
        </h1>
      </div>

      <div className="flex items-center justify-start gap-x-8">
        <p className="text-base sm:text-lg xl:text-xl text-body font-onest tracking-[-0.023rem] leading-6  xl:w-[610px] font-medium">
          {description}
        </p>

        <PlusIcon className="size-10" />
      </div>
    </div>
  );
}
