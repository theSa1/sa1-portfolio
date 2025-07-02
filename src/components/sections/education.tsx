import { useGSAP } from "@gsap/react";
import { AtmiyaSchoolLogo } from "../icons/atmiya-school-logo";
import { MarwadiUniversityLogo } from "../icons/marwadi-logo";
import { gsap, registerGSAPPlugins } from "@/lib/gsap";

export const EducationSection = () => {
  useGSAP(() => {
    registerGSAPPlugins();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#education",
        start: "top 90%",
        // TODO: Change this to 70% when other sections are done
        end: "bottom 80%",
        scrub: true,
      },
    });

    tl.from("#education-title", {
      duration: 0.5,
      opacity: 0,
      x: -50,
      ease: "circ",
    });

    ["#education-line-1", "#education-line-2"].forEach((line) => {
      tl.from(line, {
        duration: 0.5,
        opacity: 0,
        x: -50,
        ease: "circ",
      });
    });
  }, []);

  return (
    <div className="mt-28" id="education">
      <h3
        className="text-2xl font-semibold relative inline"
        id="education-title"
      >
        Education
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <div className="flex mt-8 items-center" id="education-line-1">
        <MarwadiUniversityLogo className="w-12 mr-5 hidden sm:block" />
        <p className="text-secondary-text">
          <strong className="text-primabg-primary-text">
            Diploma, Information & Communication Technology
          </strong>
          <br />
          <span className="text-secondary-text">
            Marwadi University, Rajkot
          </span>
          <br />
          <span className="text-secondary-text text-sm">
            2022 - 2025 | CGPA: 9.34/10
          </span>
        </p>
      </div>

      <div className="flex mt-8 items-center" id="education-line-2">
        <AtmiyaSchoolLogo className="w-12 mr-5 hidden sm:block" />
        <p className="text-secondary-text">
          <strong className="text-primabg-primary-text">
            GSEB SSC (10th Grade)
          </strong>
          <br />
          <span className="text-secondary-text">
            Atmiya Vidya Sankul, Paddhari
          </span>
          <br />
          <span className="text-secondary-text text-sm">
            2022 | 89.06 Percentile
          </span>
        </p>
      </div>
    </div>
  );
};
