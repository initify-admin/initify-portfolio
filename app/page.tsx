import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="w-screen flex flex-col">
      <Header />
      <Hero />

      {/* dummy height to test scroll */}
      <div className="h-[200vh] w-full"></div>
    </main>
  );
}
