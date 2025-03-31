"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  SectionContent,
  SectionContentWrapper,
  SectionWrapper,
} from "./ui/section";
import {
  buildDiscordMessage,
  transitionDuration,
  transitionEffect,
} from "@/lib/utils";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { SendMessageRequest, SendMessageResponse } from "@/types/message";

export default function Contact() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const contactInfoHeadingClassName =
    "font-onest text-dark font-medium text-xl leading-7";
  const contactInfoValueClassName =
    "font-medium font-onest text-[1.375rem] text-body hover:text-primary-blue transition-colors leading-7";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("EmailJS environment variables are missing.");
      }

      setIsLoading(true);

      const msgReqPayload: SendMessageRequest = {
        message: buildDiscordMessage({
          name,
          email,
          message,
        }),
      };

      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msgReqPayload),
      });

      const resData: SendMessageResponse = await res.json();
      if (!res.ok || resData.status !== "success") {
        throw new Error(resData.data.message || "Failed to send message");
      }

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          { name, email, message },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      } catch (emailError) {
        console.error("EmailJS failed:", emailError);
        throw new Error("Failed to send email via EmailJS");
      }

      setName("");
      setEmail("");
      setMessage("");

      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      if (error instanceof Error) {
        toast.error(
          error.message || "Failed to send message. Please try again."
        );
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      toast.dismiss(toastId);
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="mt-24">
      <SectionContentWrapper>
        <SectionContent
          ref={contentRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: transitionDuration,
            ease: transitionEffect,
          }}
          className="flex flex-col gap-y-8 lg:gap-y-10 xl:gap-y-12"
        >
          <h1 className="font-onest font-medium text-dark text-[2.25rem] lg:text-[2.5rem] xl:text-[2.625rem] tracking-[-0.158rem] lg:tracking-[-0.175rem] xl:tracking-[-0.184rem] leading-[2.475rem] lg:leading-[2.75rem] xl:leading-[2.888rem]">
            Get in Touch
          </h1>

          <div className="flex flex-col-reverse xl:flex-row justify-between gap-y-16 sm:gap-y-20">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-1">
                <h1 className={contactInfoHeadingClassName}>E-mail</h1>
                <Link
                  target="_blank"
                  href="mailto:ankitparallax@gmail.com"
                  className={contactInfoValueClassName}
                >
                  ankitparallax@gmail.com
                </Link>
              </div>

              <div className="flex flex-col gap-y-1">
                <h1 className={contactInfoHeadingClassName}>Phone</h1>
                <Link
                  target="_blank"
                  href="tel:+918371064658"
                  className={contactInfoValueClassName}
                >
                  +91 8371 064 658
                </Link>
              </div>

              <div className="flex flex-col gap-y-1">
                <h1 className={contactInfoHeadingClassName}>Address</h1>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Kolkata,+West+Bengal,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactInfoValueClassName}
                >
                  Kolkata, West Bengal, India
                </Link>
              </div>
            </div>

            <div className="xl:w-[60%] flex flex-col gap-y-12 sm:gap-y-16 xl:gap-y-24">
              <h1 className="font-onest font-medium text-dark text-[1.625rem] sm:text-[1.75rem] xl:text-[1.875rem] tracking-[-0.065rem] sm:tracking-[-0.07rem] xl:tracking-[-0.075rem] leading-[1.95rem] sm:leading-[2.1rem] xl:leading-[2.25rem]">
                Got a project in mind? We{"'"}d love to hear about it. Big or
                small, we{"'"}re here to help bring your ideas to life.
              </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-8 sm:gap-y-12 xl:gap-y-16"
              >
                <div className="flex flex-col sm:flex-row gap-x-8 gap-y-8">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pb-2 border-b border-border text-body text-lg outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pb-2 border-b border-border text-body text-lg outline-none"
                  />
                </div>

                <textarea
                  placeholder="Message*"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full pb-2 border-b border-border text-body text-lg outline-none min-h-40"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mr-auto tracking-[-0.7px] font-onest group cursor-pointer text-lg lg:text-xl text-dark flex items-center gap-x-2 font-medium border-b-2 border-dark p-1"
                >
                  Send Message
                  <MoveUpRight className="text-primary-blue size-5 lg:size-6 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                </button>
              </form>
            </div>
          </div>
        </SectionContent>
      </SectionContentWrapper>
    </SectionWrapper>
  );
}
