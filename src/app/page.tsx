"use client";

import { AtmiyaSchoolLogo } from "@/components/icons/atmiya-school-logo";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { MailIcon } from "@/components/icons/mail";
import { MarwadiUniversityLogo } from "@/components/icons/marwadi-logo";
import { ScrollIndicator } from "@/components/icons/scroll-indicator";
import { XIcon } from "@/components/icons/x";
import { ParallaxBg } from "@/components/parallax-bg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/thesa1",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/savan-bhanderi/",
    icon: LinkedinIcon,
  },
  {
    name: "X",
    href: "https://x.com/sa1wasTooShort",
    icon: XIcon,
  },
  {
    name: "Email",
    href: "mailto:i@sa1.dev",
    icon: MailIcon,
  },
];

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);

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
        delay: 0.2,
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
      <header className="fixed top-5 left-0 right-0 z-50 w-full flex items-stretch justify-center gap-2">
        <div className="h-8 aspect-square rounded-full border border-stone-200 backdrop-blur-md bg-white/5 shadow-2xl flex items-center justify-center font-bold text-2xl cursor-default">
          S
        </div>
        <nav className=" rounded-full border border-stone-200 backdrop-blur-md p-1 space-x-2 bg-white/5 shadow-2xl h-8 flex">
          <a
            href="#about"
            className="px-4 h-full text-xs flex items-center hover:bg-stone-200 hover:text-stone-950 transition-colors duration-300 rounded-full border border-stone-200 bg-white/20"
          >
            Home
          </a>
          <a
            href="#projects"
            className="px-4 h-full text-xs flex items-center hover:bg-stone-200 hover:text-stone-950 transition-colors duration-300 rounded-full"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-4 h-full text-xs flex items-center hover:bg-stone-200 hover:text-stone-950 transition-colors duration-300 rounded-full"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-4 h-full text-xs flex items-center hover:bg-stone-200 hover:text-stone-950 transition-colors duration-300 rounded-full"
          >
            Contact
          </a>
        </nav>
      </header>
      <div className="p-5 pt-0 max-w-[65ch] mx-auto">
        <div className="h-dvh flex flex-col justify-center">
          <h1 className="text-4xl font-bold" id="hero-line-1">
            Hey! 👋
          </h1>
          <h2 className="text-5xl mt-2 font-semibold" id="hero-line-2">
            I&apos;m Savan
          </h2>
          <p className="mt-8 text-[#bbb]" id="hero-para">
            I&apos;m a fullstack developer focused on building solutions that
            address real-world challenges. I have a strong interest in DevOps
            and enjoy working across infrastructure and cutting-edge backend
            technologies. I create efficient, scalable applications for the web.
          </p>
          <div className="mt-8 flex space-x-4" id="hero-social-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-[#bbb] hover:text-[#fff] transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <div
            className="flex items-center justify-center mt-8"
            id="hero-scroll-indicator"
          >
            <ScrollIndicator className="w-8 h-8 text-[#bbb] animate-bounce duration-1000" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold relative inline">
            About Me
            <div className="absolute left-0 bottom-0 h-0.5 bg-stone-200 w-[55px]" />
          </h3>
          <p className="mt-8 text-[#bbb]">
            I am a fullstack developer with a passion for creating efficient and
            scalable web applications. My expertise lies in both frontend and
            backend development, allowing me to build complete solutions that
            meet user needs. I am particularly interested in DevOps practices,
            which help streamline development processes and improve application
            performance.
          </p>
        </div>

        <div className="mt-28">
          <h3 className="text-2xl font-semibold relative inline">
            Tools, Technologies & Skills
            <div className="absolute left-0 bottom-0 h-0.5 bg-stone-200 w-[55px]" />
          </h3>

          <p className="mt-8 text-[#bbb]">
            <strong className="text-stone-200">🖥 Frontend:</strong>
            <br />
            React, Next.js, Tailwind CSS, TypeScript
            <br />
            <br />
            <strong className="text-stone-200">🗄 Backend:</strong>
            <br />
            Node.js, Express, PostgreSQL, Prisma
            <br />
            <br />
            <strong className="text-stone-200">🛠 DevOps & Infra:</strong>
            <br />
            Docker, GitHub Actions, Vercel, Nginx, Linux CLI
            <br />
            <br />
            <strong className="text-stone-200">⚙️ Tools & Misc:</strong>
            <br />
            Git, Figma, Postman, REST, Zod
          </p>
        </div>

        <div className="mt-28">
          <h3 className="text-2xl font-semibold relative inline">
            Education
            <div className="absolute left-0 bottom-0 h-0.5 bg-stone-200 w-[55px]" />
          </h3>

          <div className="flex mt-8 items-center">
            <MarwadiUniversityLogo className="w-12 mr-5 hidden sm:block" />
            <p className="text-[#bbb]">
              <strong className="text-stone-200">
                Diploma, Information & Communication Technology
              </strong>
              <br />
              <span className="text-stone-400">Marwadi University, Rajkot</span>
              <br />
              <span className="text-stone-400 text-sm">
                2022 - 2025 | CGPA: 9.34/10
              </span>
            </p>
          </div>

          <div className="flex mt-8 items-center">
            <AtmiyaSchoolLogo className="w-12 mr-5 hidden sm:block" />
            <p className="text-[#bbb]">
              <strong className="text-stone-200">GSEB SSC (10th Grade)</strong>
              <br />
              <span className="text-stone-400">
                Atmiya Vidya Sankul, Paddhari
              </span>
              <br />
              <span className="text-stone-400 text-sm">
                2022 | 89.06 Percentile
              </span>
            </p>
          </div>

          <div className="mb-5 mt-14">
            <p className="text-[#bbb] text-center">
              © 2025 Savan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
