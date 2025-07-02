"use client";

import gsap from "gsap";
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
    const allStarsClasses = [
      ".star-size-1",
      ".star-size-2",
      ".star-size-3",
      ".star-size-4",
      ".star-size-5",
    ];

    gsap.to(allStarsClasses.join(", "), {
      opacity: 0.4,
      duration: 1,
    });

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const stars: HTMLElement[] = gsap.utils.toArray(allStarsClasses.join(", "));

    stars.forEach((star) => {
      const size = parseInt(
        (star as HTMLElement).className.match(/star-size-(\d+)/)?.[1] || "1"
      );
      const rect = (star as HTMLElement).getBoundingClientRect();
      const dx = rect.left + rect.width / 2 - centerX;
      const dy = rect.top + rect.height / 2 - centerY;

      star.dataset.dx = dx.toString();
      star.dataset.dy = dy.toString();
      star.dataset.size = size.toString();
    });

    const getMultiplier = (size: number) => {
      switch (size) {
        case 1:
          return 0.5;
        case 2:
          return 0.6;
        case 3:
          return 0.75;
        case 4:
          return 1;
        case 5:
          return 1.25;
        default:
          return 1;
      }
    };

    gsap.to(stars, {
      x: (i, target) =>
        parseInt(target.dataset.dx) *
        getMultiplier(parseInt(target.dataset.size)),
      y: (i, target) =>
        parseInt(target.dataset.dy) *
        getMultiplier(parseInt(target.dataset.size)),
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      overwrite: "auto",
    });
  }, [stars]);

  useEffect(() => {
    const starCount = 250;
    setStars(generateStars(starCount));
  }, []);

  return <div className="bg fixed -z-10 h-dvh w-dvw blur-[1px]">{stars}</div>;
};
