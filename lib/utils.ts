import { NextResponse } from "next/server";
import { Section } from "@/types/nav";
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

export function handleApiError(error: unknown): NextResponse {
  const errorMessage =
    error instanceof Error ? error.message : "An unknown error occurred";
  return NextResponse.json(
    {
      status: "error",
      data: {
        type: "api_error",
        message: errorMessage,
      },
    },
    { status: 500 }
  );
}

// Handle missing parameters error
export function handleMissingParamsError(message: string): NextResponse {
  return NextResponse.json(
    {
      status: "error",
      data: {
        type: "missing_params",
        message,
      },
    },
    { status: 400 }
  );
}

// Handle resource not found error
export function handleResourceNotFoundError(message: string): NextResponse {
  return NextResponse.json(
    {
      status: "error",
      data: {
        type: "resource_not_found",
        message,
      },
    },
    { status: 404 }
  );
}

// Handle internal server error
export function handleInternalServerError(message: string): NextResponse {
  return NextResponse.json(
    {
      status: "error",
      data: {
        type: "internal_server_error",
        message,
      },
    },
    { status: 500 }
  );
}

export const buildDiscordMessage = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    `📩 **-----New Contact Form Submission-----**\n\n` +
    `👤 **Name:** ${name}\n` +
    `📧 **Email:** ${email}\n\n` +
    `📝 **Message:**\n${message}`
  );
};
