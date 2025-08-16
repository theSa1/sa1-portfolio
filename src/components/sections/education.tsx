import { GraduationCapIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const EducationSection = () => {
  return (
    <div className="mt-28" id="education">
      <h3
        className="text-2xl font-semibold relative inline"
        id="education-title"
      >
        Education
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <div className="mt-6">
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="relative">
            <GraduationCapIcon className="text-white w-7 h-7 bg-neutral-700 p-[2px] rounded-lg aspect-square" />
            <div className="absolute w-[1px] h-full bg-neutral-600 left-1/2 transform -translate-x-1/2 top-0 -z-10" />
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold">
              Government Engineering College, Rajkot
            </h4>
            <div className="flex">
              <p className="text-sm text-neutral-400">
                B.Tech,{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dashed">AI&DS</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      Artificial Intelligence & Data Science
                    </p>
                  </TooltipContent>
                </Tooltip>{" "}
                <span className="text-neutral-600">|</span> 2025 - 2028
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="relative">
            <GraduationCapIcon className="text-white w-7 h-7 bg-neutral-700 p-[2px] rounded-lg aspect-square" />
            <div className="absolute w-[1px] h-full bg-neutral-600 left-1/2 transform -translate-x-1/2 top-0 -z-10" />
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold">
              Marwadi University, Rajkot
            </h4>
            <div className="flex">
              <p className="text-sm text-neutral-400">
                Diploma,{" "}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="underline decoration-dashed">ICT</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      Information & Communication Technology
                    </p>
                  </TooltipContent>
                </Tooltip>{" "}
                <span className="text-neutral-600">|</span> 9.34/10 CGPA{" "}
                <span className="text-neutral-600">|</span> 2022 - 2025
              </p>
            </div>

            <div className="mt-3">
              <ul className="list-disc list-outside ml-7 space-y-2 marker:text-neutral-500 marker:text-lg">
                <li>
                  Started a startup under the university&rsquo;s incubation
                  center
                </li>
                <ul className="list-disc list-outside ml-7 space-y-2 marker:text-neutral-500 marker:text-lg">
                  <li>
                    Developed a set of applications for the university printing
                    shop to streamline operations
                  </li>
                  <li>Received funding of ₹2,00,000 from SSIP Gujarat</li>
                  <li>
                    Created a hardware module for self-service printing
                    solutions
                  </li>
                  <li>Published a patent for the hardware module in 2024</li>
                </ul>

                <li>
                  Came runner-up in Marwadi University X Postman Hackathon
                </li>
                <ul className="list-disc list-outside ml-7 space-y-2 marker:text-neutral-500 marker:text-lg">
                  <li>
                    Created a AI powered student companion web app
                    &quot;AdhyAI&quot;
                  </li>
                  <li>
                    Used Retrieval Augmented Generation (RAG) to answer student
                    queries based on the provided materials
                  </li>
                </ul>

                <li>Academic Excellence</li>
                <ul className="list-disc list-outside ml-7 space-y-2 marker:text-neutral-500 marker:text-lg">
                  <li>Secured 3rd position in the university in 2nd year</li>
                  <li>
                    Always maintained a position in the top 10 of my class
                  </li>
                </ul>

                <li>
                  Created a fully featured University Timetable Management
                  System as a final year project
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-3">
          <GraduationCapIcon className="text-white w-7 h-7 bg-neutral-700 p-[2px] rounded-lg aspect-square" />
          <div>
            <h4 className="text-lg font-semibold">
              Atmiya Vidya Sankul, Paddhari
            </h4>
            <div className="flex">
              <p className="text-sm text-neutral-400">
                GSEB SSC (10th Class){" "}
                <span className="text-neutral-600">|</span> 89.06 Percentile{" "}
                <span className="text-neutral-600">|</span> 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
