import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="">
        <Hero />
        <About />
        <Services />

        {/* <Footer /> */}
      </main>
    </div>
  );
}
