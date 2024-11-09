"use client";

import AwsEc2Icon from "@/assets/icons/aws-ec2.svg";
import DockerIcon from "@/assets/icons/docker-icon.svg";
import GitIcon from "@/assets/icons/git-icon.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NginxIcon from "@/assets/icons/nginx.svg";
import TurborepoIcon from "@/assets/icons/turborepo-icon.svg";
import VercelIcon from "@/assets/icons/vercel-icon.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/mapv3.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "AWS EC2",
    iconType: AwsEc2Icon,
  },
  {
    title: "Nginx",
    iconType: NginxIcon,
  },
  {
    title: "Turborepo",
    iconType: TurborepoIcon,
  },
  {
    title: "Vercel",
    iconType: VercelIcon,
  },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Hiking", emoji: "👟", left: "35%", top: "40%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎵", left: "70%", top: "45%" },
  { title: "Fitness", emoji: "🏋️‍♂️", left: "5%", top: "65%" },
  { title: "Reading", emoji: "📚", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const contrainstRef = useRef(null);
  return (
    <section className="py-16 lg:py-24 lg:pt-20" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book coker" className="hover:scale-110 transition-transform"/>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the cutting-edge tools that power my projects"
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my intrests & hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={contrainstRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contrainstRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-right-bottom opacity-80" // object-left-top
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              rounded-full after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div className="absolute inset-0 -z-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:1.5s]"></div>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
