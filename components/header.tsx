"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { transitionDuration, transitionEffect } from "@/lib/utils";
import { navItems } from "@/data/header";
import { socialItems } from "@/data/social";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: transitionDuration,
        ease: transitionEffect,
      }}
      className="w-full px-6 py-6 md:px-8 md:py-8 xl:px-16 2xl:py-9 2xl:px-16"
    >
      <div className="w-full justify-between items-center flex max-w-[1800px] mx-auto">
        <Link
          href="https://initify.com/"
          className="text-dark font-bold text-2xl uppercase tracking-wide"
        >
          Initify
        </Link>

        <div
          onClick={() => setIsSidebarOpen(true)}
          className="flex flex-col gap-y-1.5 size-12 items-end justify-center cursor-pointer"
        >
          <div className="w-[40px] h-[3px] bg-dark"></div>
          <div className="w-[28px] h-[3px] bg-dark"></div>
          <div className="w-[34px] h-[3px] bg-dark"></div>
        </div>

        <AnimatePresence>
          {isSidebarOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="z-50 fixed inset-0 bg-black/30 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: transitionDuration,
                  ease: transitionEffect,
                }}
                onClick={() => setIsSidebarOpen(false)}
              />

              {/* Sidebar */}
              <motion.div
                className="z-50 fixed top-0 right-0 h-screen bg-primary-blue flex flex-col gap-y-16 p-6 max-sm:pb-30 sm:p-8 xl:p-9"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: transitionDuration,
                  ease: transitionEffect,
                }}
                style={{
                  width: "100%",
                  maxWidth: "800px",
                }}
              >
                {/* Close Button */}
                <button
                  className="p-1c cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="size-11 text-white" />
                </button>

                <nav>
                  <ul className="flex flex-col justify-start items-start">
                    {navItems.map((item) => (
                      <Link key={item.title} href={item.link}>
                        <motion.li
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] text-white font-medium leading-14 xl:leading-[4.15rem] 2xl:leading-[4.813rem] font-onest"
                        >
                          {item.title}
                        </motion.li>
                      </Link>
                    ))}
                  </ul>
                </nav>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-auto">
                  {socialItems.map((item) => (
                    <Link key={item.title} href={item.link}>
                      <motion.li
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="text-xl leading-[1.6rem] xl:text-[1.375rem] xl:leading-7 2xl:text-2xl 2xl:leading-[1.563rem] text-white font-medium font-onest"
                      >
                        {item.title}
                      </motion.li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
