import { ourProcesses } from "@/data/our-process";
import {
  SectionContent,
  SectionContentWrapper,
  SectionHeading,
  SectionSubheading,
  SectionWrapper,
} from "./ui/section";

interface ProcessItemProps {
  index: number;
  title: string;
  description: string;
  isActive: boolean;
}

export default function OurProcess() {
  return (
    <SectionWrapper className="py-24 bg-dark">
      <SectionContentWrapper>
        <SectionContent className="flex flex-col gap-y-[10rem]">
          <div className="flex justify-between items-start">
            <SectionHeading className="text-white">
              /Our Process/
            </SectionHeading>

            <SectionSubheading className="w-[60%] text-white">
              Our mission is to help businesses grow through strategic design,
              creating work that performs as good as it looks.
            </SectionSubheading>
          </div>

          <div className="w-full flex gap-x-2">
            {ourProcesses.map((process, index) => (
              <ProcessItem
                key={index}
                index={index}
                title={process.title}
                description={process.description}
                isActive={index === 0}
              />
            ))}
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

function ProcessItem({
  index,
  title,
  description,
  isActive,
}: ProcessItemProps) {
  return (
    <div className="flex flex-col p-8 justify-between border border-white/80 rounded-lg h-[31.25rem]">
      <div className="w-full flex flex-col gap-y-2">
        <h1 className="tracking-[0.023rem] font-onest font-medium text-white text-lg leading-6">
          0{index + 1}
        </h1>

        <h1 className="font-onest font-medium text-white text-[2.625rem] tracking-[-0.184rem] leading-[2.888rem]">
          {title}
        </h1>
      </div>

      <p className="tracking[-0.055rem] font-onest font-medium text-white text-[1.375rem] leading-[1.875rem]">
        {description}
      </p>
    </div>
  );
}
