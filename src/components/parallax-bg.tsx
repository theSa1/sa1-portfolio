"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { JSX, useEffect, useState } from "react";

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.floor(Math.random() * 5) + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 150 - 50;

    return (
      <div
        key={i}
        className={`absolute rounded-full bg-white opacity-50 star-size-${size}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}vw`,
          top: `${top}vh`,
          opacity: 0,
        }}
      />
    );
  });
};

export const ParallaxBg = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(
      ".star-size-1, .star-size-2, .star-size-3, .star-size-4, .star-size-5",
      {
        opacity: 0.4,
        duration: 1,
      }
    );

    Array.from({ length: 5 }).forEach((_, i) => {
      gsap.to(`.star-size-${i + 1}`, {
        y: 20 * (i + 1),
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, [stars]);

  useEffect(() => {
    const starCount = 150;
    setStars(generateStars(starCount));
  }, []);

  return <div className="bg fixed -z-10 h-dvh w-dvw blur-[1px]">{stars}</div>;
};
