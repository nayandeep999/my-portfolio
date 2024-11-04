import ExpressJsIcon from "@/assets/icons/express.svg";
import MongodbIcon from "@/assets/icons/mongodb-icon.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import PostgresIcon from "@/assets/icons/postgresql-icon.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TailwindCssIcon from "@/assets/icons/tailwind.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Spotlight, { SpotlightCard } from "@/components/Spotlight";
import { TechIcon } from "@/components/TechIcon";

const techStack = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: TailwindCssIcon,
  },
  {
    title: "Express",
    iconType: ExpressJsIcon,
  },
  {
    title: "MongoDB",
    iconType: MongodbIcon,
  },
  {
    title: "Postgres",
    iconType: PostgresIcon,
  },
  {
    title: "Prisma",
    iconType: PrismaIcon,
  },
];

export const StackSection = () => {
  return (
    <section className="py-16 lg:py-24 lg:pt-20">
      <div className="container overflow-x-clip">
        <SectionHeader
          eyebrow="Fuel for Innovation"
          title="The Power Behind the Pixels"
          description="Explore the technologies I trust to build innovative, scalable, and
          efficient solutions."
        />
        <Spotlight className="mx-auto mt-10 md:mt-20 grid gap-6 grid-cols-2 md:grid-cols-4 items-start lg:max-w-3xl group">
          {techStack.map((tech, index) => (
            <SpotlightCard key={index}>
              <div className="relative flex flex-col items-center justify-center h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                {/* Radial gradient */}
                <div
                  className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center h-full text-center gap-y-4">
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center">
                    <div
                      className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <TechIcon className="size-12" component={tech.iconType} />
                  </div>

                  {/* Text */}
                  <h2 className="text-sm text-white/60 font-medium">
                    {tech.title}
                  </h2>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </Spotlight>
      </div>
    </section>
  );
};
