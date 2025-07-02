"use client";

import { gsap, registerGSAPPlugins } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/dist/SplitText";

export const ToolsAndTechnologiesSection = () => {
  useGSAP(() => {
    registerGSAPPlugins();

    const split = new SplitText(".tools-text", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#tools",
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    tl.from("#tools-title", {
      duration: 0.5,
      opacity: 0,
      x: -50,
      ease: "circ",
    });

    tl.from(split.lines, {
      duration: 0.5,
      opacity: 0,
      x: -50,
      stagger: {
        amount: 0.04,
        from: "start",
      },
      ease: "circ",
    });
  }, []);

  return (
    <div className="mt-28" id="tools">
      <h3 className="text-2xl font-semibold relative inline" id="tools-title">
        Tools & Technologies
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <p className="mt-8 text-secondary-text tools-text">
        <strong className="text-primabg-primary-text">🖥 Frontend:</strong>
        <br />
        React, Next.js, Tailwind CSS, TypeScript
        <br />
        <br />
        <strong className="text-primabg-primary-text">🗄 Backend:</strong>
        <br />
        Node.js, Express, PostgreSQL, Prisma
        <br />
        <br />
        <strong className="text-primabg-primary-text">🛠 DevOps & Infra:</strong>
        <br />
        Docker, GitHub Actions, Vercel, Nginx, Linux CLI
        <br />
        <br />
        <strong className="text-primabg-primary-text">⚙️ Tools & Misc:</strong>
        <br />
        Git, Figma, Postman, REST, Zod
      </p>
    </div>
  );
};
