import Contact from "@/components/contact";
import FAQs from "@/components/faq";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Process from "@/components/process";
import Projects from "@/components/projects";
import Uses from "@/components/uses";
import Trust from "@/components/trust";
import Vision from "@/components/vision";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start w-full">
      <Header />
      <Hero />
      <Vision />
      <Uses />
      <Process />
      <Projects />
      <Contact />
      <Trust />
      <FAQs />
      <Footer />
    </main>
  );
}
