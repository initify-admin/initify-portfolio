import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurProcess from "@/components/our-process";
import OurProjects from "@/components/our-projects";
import OurUses from "@/components/our-uses";
import Trust from "@/components/trust";
import Vision from "@/components/vision";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start w-full">
      {/* <Header />
      <Hero />
      <Vision />
      <OurUses />
      <OurProcess />
      <OurProjects />
      <Contact /> */}

      <Trust />
    </main>
  );
}
