import Hero from "@/components/sections/Hero/Hero";
import Experience from "@/components/sections/Experience/Experience";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Achievements />
      <About />
      <Education />
    </main>
  );
}
