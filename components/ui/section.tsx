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

export { SectionWrapper, SectionContentWrapper, SectionContent };
