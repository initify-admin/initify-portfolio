import Header from "@/components/header";
import Hero from "@/components/hero";
import Vision from "@/components/vision";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start w-full">
      <Header />
      <Hero />
      <Vision />

      {/* dummy height to test scroll */}
      <div className="h-[200vh] w-full"></div>
    </main>
  );
}
