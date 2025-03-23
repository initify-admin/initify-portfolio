import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

interface SectionContentWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, ...props }, ref) => {
    return <section ref={ref} className={cn("w-full", className)} {...props} />;
  }
);
SectionWrapper.displayName = "SectionWrapper";

const SectionContentWrapper = forwardRef<
  HTMLDivElement,
  SectionContentWrapperProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full flex justify-center px-6 sm:px-8 xl:px-16 pt-16 md:pt-[6.75rem] 2xl:pt-[11.25rem]",
        className
      )}
      {...props}
    />
  );
});
SectionContentWrapper.displayName = "SectionContentWrapper";

const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full max-w-[1800px]", className)}
        {...props}
      />
    );
  }
);
SectionContent.displayName = "SectionContent";

export { SectionWrapper, SectionContentWrapper, SectionContent };
