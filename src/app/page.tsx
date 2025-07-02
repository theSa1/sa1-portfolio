"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ParallaxBg } from "@/components/parallax-bg";
import { AboutSection } from "@/components/sections/about";
import { EducationSection } from "@/components/sections/education";
import { HeroSection } from "@/components/sections/hero";
import { ToolsAndTechnologiesSection } from "@/components/sections/tools";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(useGSAP, SplitText, ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
      content: "main",
    });

    const tl = gsap.timeline();

    const line1Split = SplitText.create("#hero-line-1", {
      type: "chars",
      charsClass: "line1-chars",
    });
    const line2Split = SplitText.create("#hero-line-2", {
      type: "chars",
      charsClass: "line2-chars",
    });
    const paraSplit = SplitText.create("#hero-para", {
      type: "lines, words",
      linesClass: "para-lines",
    });

    tl.from("header", {
      duration: 0.5,
      opacity: 0,
      y: -200,
      ease: "circ",
    });

    tl.from(line1Split.chars, {
      duration: 0.5,
      opacity: 0,
      y: -50,
      stagger: {
        amount: 0.04,
        from: "start",
      },
      ease: "circ",
    });

    tl.from(line2Split.chars, {
      delay: 0.1,
      duration: 0.8,
      opacity: 0,
      y: -50,
      stagger: {
        amount: 0.1,
        from: "start",
      },
      ease: "circ",
    });

    tl.from(
      [
        ...paraSplit.lines,
        document.querySelector("#hero-social-links"),
        document.querySelector("#hero-scroll-indicator"),
      ],
      {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: {
          amount: 0.2,
          from: "start",
        },
        ease: "circ",
      }
    );
  }, []);

  return (
    <div>
      <ParallaxBg />
      <Header />
      <main className="p-5 pt-0 max-w-[65ch] mx-auto">
        <HeroSection />

        <AboutSection />

        <ToolsAndTechnologiesSection />

        <EducationSection />

        <Footer />
      </main>
    </div>
  );
}
