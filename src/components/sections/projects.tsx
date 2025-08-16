import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const projects = [
  {
    name: "Intel 8085 Simulator",
    description:
      "Web-based 8085 microprocessor simulator with an interactive interface inspired by Jubin Mitra's Java-based simulator.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Assembly"],
    link: "https://8085.sa1.dev/",
    github: "https://github.com/theSa1/8085-simulator",
    image: "/images/8085-simulator.png",
  },
  {
    name: "SSH Based Portfolio",
    description: "A SSH-based TUI portfolio showcasing my projects and skills.",
    tech: ["Go", "SSH", "Bubble Tea"],
    link: "#",
    cmd: "ssh t.sa1.dev",
    github: "https://github.com/theSa1/sa1-portfolio-tui",
    image: "/images/ssh-portfolio.png",
  },
  {
    name: "University Timetable Manager",
    description:
      "A university timetable management tool to help class schedulers manage and optimize the schedule and eliminate conflicts.",
    tech: ["Next.js", "TypeScript", "Shadcn UI"],
    link: "#",
    github: "https://github.com/theSa1/samaypatra",
    image: "/images/university-timetable-manager.png",
  },
];

export const ProjectsSection = () => {
  return (
    <div className="my-28" id="projects">
      <h3 className="text-2xl font-semibold relative inline" id="about-title">
        Projects
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>
      <p className="mt-8 text-secondary-text about-text">
        Here are some of the projects I have worked on.
      </p>
      <div className="mt-10 grid gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group bg-[#18181b] border border-primary-text/20 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.025] transition-transform duration-200"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full aspect-[16/7] object-cover object-center group-hover:brightness-90 transition duration-200"
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex flex-col p-5">
              <h4 className="text-xl font-semibold mb-2 text-primary-text">
                {project.name}
              </h4>
              <p className="text-secondary-text mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-text/10 text-primary-text text-xs px-2 py-1 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                {project.cmd ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p
                        className="text-primary-text font-mono text-sm font-medium underline decoration-dashed"
                        onClick={() => {
                          navigator.clipboard
                            .writeText(project.cmd)
                            .then(() => {
                              toast.success("Command copied to clipboard");
                            });
                        }}
                      >
                        {project.cmd}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-primary-text font-mono text-sm">
                        Click to copy command
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-text hover:underline text-sm font-medium"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-primary-text text-sm font-medium transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
