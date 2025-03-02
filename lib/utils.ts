import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//for consistent transition effect
export const transitionEffect: number[] = [0.7, 0, 0.3, 1];

export const transitionDuration: number = 0.85;
