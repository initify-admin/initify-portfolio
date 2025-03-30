import { Section } from "@/types/header";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//for consistent transition effect
export const transitionEffect: number[] = [0.7, 0, 0.3, 1];

export const transitionDuration: number = 0.85;

export const scrollToSection = ({
  sectionToScroll,
  offset = 20,
}: {
  sectionToScroll: Section;
  offset?: number;
}) => {
  const section = document.getElementById(sectionToScroll);

  if (section) {
    const offsetTop = section.offsetTop;
    const scrollToPosition = offsetTop - offset;
    window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
  }
};
