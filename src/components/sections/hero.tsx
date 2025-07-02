import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { MailIcon } from "../icons/mail";
import { ScrollIndicator } from "../icons/scroll-indicator";
import { XIcon } from "../icons/x";

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
  return (
    <div className="h-svh flex flex-col justify-center">
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
