import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="29s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="33s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="37s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="35s"
          shouldSpin
          spinDuration="7s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="3s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="42s"
          shouldSpin
          spinDuration="7.2s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="39s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="43s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="50s"
          shouldSpin
          spinDuration="6.8s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="conatiner">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person with laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 rounded-full size-2.5 relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-balance">
            Creative Full Stack Developer
          </h1>
          <div className="flex justify-center items-center">
            <p
              className="mt-3 uppercase font-bold text-sm md:text-base tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 
              text-transparent bg-clip-text opacity-85"
            >
              based in 📌india
            </p>
          </div>
          <p className="mt-3 px-3 text-center text-balance text-white/60 md:text-lg">
            Building Scalable Web Experiences with Next.js & TypeScript
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link
            href="#projects"
            className="z-10 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl
          hover:bg-gray-700/90 transition duration-300"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </Link>
          <Link
            href="mailto:nayandeepsen@gmail.com"
            className="z-10 inline-flex items-center gap-2 border border-white bg-white font-semibold text-gray-900 px-6 h-12 rounded-xl hover:cursor-pointer hover:bg-white/70 hover:text-gray-900 transition duration-300"
          >
            <span>👋</span>
            <span>Let&apos;s Connect</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
