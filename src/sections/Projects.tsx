import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import compCrafterLandingPage from "@/assets/images/compcrafter.png";
import grainImage from "@/assets/images/grain.jpg";
import syntaxhlLandingPage from "@/assets/images/syntaxhl.png";
import truefeedbackLandingPage from "@/assets/images/turefeedback.png";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Extensive React Component Library",
    results: [
      { title: "Featuring over 15+ hands-on components" },
      { title: "Easily integrate each component via NPM" },
      { title: "Built with Tailwind CSS & TypeScript" },
    ],
    link: "https://compcrafter.nayandeepsen.com/",
    image: compCrafterLandingPage,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Fully Customizable Code Screenshot",
    results: [
      { title: "Over 10+ Themes & 12+ Font Styles" },
      { title: "Dark & Light Modes" },
      { title: "Support for numerous languages" },
    ],
    link: "https://syntaxhl.nayandeepsen.com/",
    image: syntaxhlLandingPage,
  },
  {
    company: "Personal project",
    year: "2024",
    title: "Anonymous Feedback Platform",
    results: [
      { title: "Collect instant feedbacks from users" },
      { title: "Secure Login & Email Verification" },
      { title: "Easy-to-use interface" },
    ],
    link: "https://truefeedback.nayandeepsen.com/",
    image: truefeedbackLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 lg:py-24 lg:pt-20">
      <div className="container overflow-x-clip">
        <div className="flex justify-center">
          <p
            className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 
            text-transparent bg-clip-text"
          >
            Real-world results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center text-balance mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I&apos;ve transformed concepts into impactful digital
          experiences
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 
                    text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex gap-2 text-sm md:text-base text-white/50"
                        key={project.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
