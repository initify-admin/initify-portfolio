"use client";

import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLMotionProps<"section"> {
  className?: string;
}

interface SectionContentWrapperProps extends HTMLMotionProps<"div"> {
  className?: string;
}

interface SectionContentProps extends HTMLMotionProps<"div"> {
  className?: string;
}

interface SectionHeadingProps extends HTMLMotionProps<"h1"> {
  className?: string;
  children: React.ReactNode;
}

interface SectionSubheadingProps extends HTMLMotionProps<"h1"> {
  className?: string;
  children: React.ReactNode;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        className={cn("w-full overflow-hidden", className)}
        {...props}
      />
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

const SectionContentWrapper = forwardRef<
  HTMLDivElement,
  SectionContentWrapperProps
>(({ className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "w-full flex justify-center px-6 sm:px-8 xl:px-16",
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
      <motion.div
        ref={ref}
        className={cn("w-full max-w-[1800px]", className)}
        {...props}
      />
    );
  }
);
SectionContent.displayName = "SectionContent";

const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
  ({ className, children, ...props }, ref) => (
    <motion.h1
      ref={ref}
      className={cn(
        "text-dark text-[0.938rem] sm:text-base text-lg uppercase tracking-[-.02rem] leading-[1.4rem] font-medium",
        className
      )}
      {...props}
    >
      {children}
    </motion.h1>
  )
);
SectionHeading.displayName = "SectionHeading";

const SectionSubheading = forwardRef<
  HTMLHeadingElement,
  SectionSubheadingProps
>(({ className, children, ...props }, ref) => (
  <motion.h1
    ref={ref}
    className={cn(
      "text-[2.75rem] sm:text-[3.25rem] xl:text-[3.75rem] font-onest font-medium text-dark tracking-[-0.193rem] sm:tracking-[-0.228rem] xl:tracking-[-0.263rem] leading-[3.025rem] sm:leading-[3.575rem] xl:leading-[4.125rem]",
      className
    )}
    {...props}
  >
    {children}
  </motion.h1>
));
SectionSubheading.displayName = "SectionSubheading";

export {
  SectionWrapper,
  SectionContentWrapper,
  SectionContent,
  SectionHeading,
  SectionSubheading,
};
