"use client";

import {
  SectionWrapper,
  SectionContentWrapper,
  SectionContent,
} from "./ui/section";

export default function Vision() {
  return (
    <SectionWrapper className="mt-20">
      <SectionContentWrapper>
        <SectionContent className="flex flex-col xl:flex-row justify-between items-start gap-8">
          <h1 className="text-dark text-[0.938rem] sm:text-base text-lg uppercase tracking-[-.02rem] leading-[1.4rem] font-medium">
            /Our Vision/
          </h1>

          <div className="w-full xl:w-[800px] flex flex-col gap-y-12 sm:gap-y-16 xl:gap-y-24">
            <div className="flex flex-col gap-y-8">
              <h1 className="text-[2.75rem] sm:text-[3.25rem] xl:text-[3.75rem] font-onest font-medium text-dark tracking-[-0.193rem] sm:tracking-[-0.228rem] xl:tracking-[0.263rem] leading-[3.025rem] sm:leading-[3.575rem] xl:leading-[4.125rem]">
                Whether it{"'"}s a website, an app, or a complete brand identity
                - we create work that works.
              </h1>

              <p className="text-[0.938rem] sm:text-base text-lg text-body font-onest tracking-[-0.023rem] leading-6 sm:w-[63%] xl:w-[450px] font-medium">
                Good design isn{"'"}t just about looks. It{"'"}s about solving
                real problems and getting results. Here{"'"}s ours.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-y-8 gap-x-16 justify-start xl:justify-between md:items-center">
              <StatBlock title="47+" body="Projects delivered" />
              <StatBlock title="$2.2M+" body="Client revenue impacted" />
              <StatBlock title="95%" body="Client retention" />
            </div>
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}

function StatBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-y-3">
      <h1 className="text-primary-blue text-[3.5rem] sm:text-[4rem] xl:text-[5rem] leading-[3.5rem] sm:leading-[4rem] xl:leading-[5rem] tracking-[0.07rem] sm:tracking-[-0.08rem] xl:tracking-[-0.1rem] font-medium">
        {title}
      </h1>
      <p className="text-[0.938rem] sm:text-base text-lg text-body font-onest tracking-[-0.023rem] leading-6 max-w-[450px] font-medium">
        {body}
      </p>
    </div>
  );
}
