"use client";

import { useGSAP } from "@gsap/react";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";
import { ScrollIndicator } from "../icons/scroll-indicator";
import { XIcon } from "../icons/x";
import { registerGSAPPlugins, gsap } from "@/lib/gsap";
import SplitText from "gsap/dist/SplitText";

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

export const HeroSection = () => {
  useGSAP(() => {
    registerGSAPPlugins();

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
    <div className="h-svh flex flex-col justify-center" id="home">
      <div className="h-16 sm:h-0"></div>
      <h1 className="sm:text-4xl text-3xl font-bold" id="hero-line-1">
        Hey! 👋
      </h1>
      <h2 className="sm:text-5xl text-4xl mt-2 font-semibold" id="hero-line-2">
        I&apos;m Savan
      </h2>
      <p className="sm:mt-8 mt-6 text-secondary-text" id="hero-para">
        I&apos;m a fullstack developer focused on building solutions that
        address real-world challenges. I have a strong interest in DevOps and
        enjoy working across infrastructure and cutting-edge backend
        technologies. I create efficient, scalable applications for the web.
      </p>
      <div className="sm:mt-8 mt-6 flex space-x-4" id="hero-social-links">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-secondary-text hover:text-primary-text transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
      </div>
      <div
        className="flex items-center justify-center sm:mt-8 mt-6"
        id="hero-scroll-indicator"
      >
        <ScrollIndicator className="w-8 h-8 text-secondary-text animate-bounce duration-1000" />
      </div>
    </div>
  );
};
