import { useState, ReactNode } from "react";
import { PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({
  children,
}: {
  children: (props: { isOpen: boolean; toggle: () => void }) => ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {children({ isOpen, toggle: () => setIsOpen(!isOpen) })}
    </div>
  );
}

function AccordionTrigger({
  children,
  isOpen,
  toggle,
}: {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <button
      className="cursor-pointer py-4 w-full gap-x-4 flex justify-between items-center text-left font-medium text-dark font-onest text-base sm:text-lg xl:text-xl"
      onClick={toggle}
    >
      {children}

      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <PlusIcon
            className={`h-5 w-5 transition-colors duration-500 ${
              !isOpen ? "text-dark" : "text-primary-blue"
            }`}
          />
        </motion.div>
      </motion.div>
    </button>
  );
}

function AccordionContent({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
}) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden text-body font-onest font-medium text-[0.938rem] sm:text-base xl:text-lg tracking-[-0.019rem] sm:tracking-[-0.02rem] xl:tracking-[-0.023rem] leading-[1.313rem] sm:leading-[1.4rem] xl:leading-[1.575rem]"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionTrigger, AccordionContent };
