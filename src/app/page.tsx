import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ScrollReveal from "@/components/animation/ScrollReveal";
import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2, LightbulbIcon, Briefcase, Layers, MessageCircle, PackagePlus } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import SkillsFooter from "@/components/SkillsFotter";
import ProjectCards from "@/components/ProjectsCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Icon Zalo SVG
const ZaloIcon = ({ className }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
      fill="#0068FF"
    />
    <path
      d="M12.5 7C10.014 7 8 9.014 8 11.5C8 13.986 10.014 16 12.5 16C14.986 16 17 13.986 17 11.5C17 9.014 14.986 7 12.5 7ZM12.5 14C11.119 14 10 12.881 10 11.5C10 10.119 11.119 9 12.5 9C13.881 9 15 10.119 15 11.5C15 12.881 13.881 14 12.5 14Z"
      fill="white"
    />
    <path
      d="M7 11.5C7 11.5 7.5 13 9.5 13C11.5 13 12 11.5 12 11.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 11.5C12 11.5 12.5 13 14.5 13C16.5 13 17 11.5 17 11.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function Home() {
  const hobbies = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));
  const zaloLink = "https://zalo.me/your-zalo-id"; // Thay bằng link Zalo thực tế của bạn

  return (
    <div className="w-full">
      {/* SECTION 1: HOME */}
      <section id="home" className="min-h-screen h-screen flex items-center justify-between w-full relative">
        {/* LEFT SIDE  */}
        <FramerWrapper
          className=" h-full w-auto flex flex-col justify-start gap-4"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="h-fit w-full p-4 flex gap-4">
            <SocialLinks />
          </div>
          <DownLoadResumeBtn />
        </FramerWrapper>
        {/* RIGHT SIDE image  */}
        <FramerWrapper
          className="h-full w-[47%] relative block   max-lg:hidden"
          y={0}
          x={100}
        >
          {/* IMAGE  */}
          <HeroImage />
        </FramerWrapper>

        {/* GITHUB BUTTON  */}
        <GithubBtn />
      </section>

      {/* SECTION 2: ABOUT */}
      <ScrollReveal direction="fade">
        <section id="about" className="min-h-screen h-screen flex items-center justify-start w-full relative py-20">
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
              <User2 className="h-4 w-4" />
              About me
            </Badge>
            <div className="flex flex-col gap-5">
              <Heading>
                {portfolioConfig.title} And Web <br /> Developer{" "}
                {portfolioConfig.about.personalInfo.nationality}.
              </Heading>

              <ScrollReveal direction="left" delay={0.2}>
                <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
                  {portfolioConfig.about.bio}
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.3} className="w-full flex flex-row justify-between max-lg:flex-col">
              <Aboutfooter />
            </ScrollReveal>
            <ScrollReveal direction="fade" delay={0.4} className="block">
              <h1 className="gap-2 text-3xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
                {" "}
                <Heart className="h-8 w-8" /> Hobbies
              </h1>
              <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
                {hobbies.map((val, indx) => {
                  return (
                    <ScrollReveal key={indx} direction="left" delay={indx * 0.1} randomDelay>
                      <div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start ">
                        <Circle className="h-3 w-3" /> {val.hobby}
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 3: SKILLS */}
      <ScrollReveal direction="fade">
        <section id="skills" className="min-h-screen h-screen flex items-center justify-start w-full relative py-20">
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
              <LightbulbIcon className="w-4 h-4" />
              My Skills
            </Badge>
            <div className="flex flex-col gap-3">
              <Heading>My Technical Experience/Skills.</Heading>
              <ScrollReveal direction="left" delay={0.2}>
                <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
                  Currently i am a fresher and i have a solid understand of HTML5,
                  CSS3, JS, TS and React, including responsive design principles. I
                  specialize in building web applications and sites using Javascript,
                  Typescript, React, Nextjs & Node.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={0.3} className="block w-full">
                <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                  Programming Languages
                </h1>
                <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                  <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={0.4} className="block w-full">
                <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                  Framework/Libraries
                </h1>
                <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                  <SkillsFooter items={portfolioConfig.skills.frameworks} />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="fade" delay={0.5} className="block w-full">
                <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                  Tools & Technologies
                </h1>
                <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
                  <SkillsFooter items={portfolioConfig.skills.tools} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 4: EDUCATION */}
      <ScrollReveal direction="fade">
        <section id="education" className="min-h-screen h-screen flex items-center justify-start w-full relative py-20">
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
              <Briefcase className="h-4 w-4" />
              Education
            </Badge>
            <div className="flex flex-col gap-3">
              <Heading>My Education</Heading>
            </div>
            <div className="w-full h-fit flex flex-col">
              {portfolioConfig.education.map((edu, index) => (
                <ScrollReveal key={index} direction="left" delay={index * 0.15} randomDelay>
                  <div className="w-full h-fit flex">
                    <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base">
                      {edu.period}
                    </div>
                    <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point">
                      <div className="text-2xl font-rubik max-sm:text-xl">
                        {edu.degree}, <br /> {edu.institution}
                      </div>
                      <p className="font-poppins text-base w-full text-primary max-sm:text-xs">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 5: PROJECTS */}
      <ScrollReveal direction="fade">
        <section id="projects" className="min-h-screen h-screen flex items-center justify-start w-full relative py-20">
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
              <Layers className="h-4 w-4" />
              Projects
            </Badge>
            <div className="flex flex-col gap-3">
              <Heading>My Projects</Heading>
              <ScrollReveal direction="left" delay={0.2}>
                <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
                  I love to Build Cool Projects. Here, you&#x27;ll find a curated
                  collection of my creative endeavors and technical projects. Each
                  piece represents a journey of innovation, problem-solving, and
                  continuous learning. Feel free to explore this showcase of my
                  passion and expertise in action.
                </p>
              </ScrollReveal>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {portfolioConfig.projects.map((val, indx) => {
                return (
                  <ScrollReveal key={indx} direction="left" delay={indx * 0.15} randomDelay>
                    <ProjectCards value={val} num={indx} />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 6: CONTACT */}
      <ScrollReveal direction="fade">
        <section id="contact" className="min-h-screen h-screen flex items-center justify-center w-full relative py-20">
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1">
              <MessageCircle className="h-4 w-4" />
              Liên hệ
            </Badge>
            <div className="flex flex-col gap-6 w-full items-center justify-center min-h-[60vh]">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="flex flex-col items-center gap-6">
                  <Heading>Liên hệ với tôi qua Zalo</Heading>
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-6 rounded-full bg-blue-50 dark:bg-blue-950">
                      <ZaloIcon className="w-16 h-16" />
                    </div>
                    <p className="font-poppins text-lg text-primary max-sm:text-base text-center">
                      Nhấn vào nút bên dưới để liên hệ với tôi qua Zalo
                    </p>
                    <Link href={zaloLink} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2 bg-[#0068FF] hover:bg-[#0056CC]">
                        <ZaloIcon className="w-5 h-5" />
                        Mở Zalo
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SECTION 7: MORE */}
      <ScrollReveal direction="fade">
        <section id="more" className="min-h-screen h-screen flex items-center justify-start w-full relative py-20">
          <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
            <Badge variant="secondary" className="gap-1.5 py-1 ">
              <PackagePlus className="h-4 w-4" />
              More
            </Badge>
            <div className="flex flex-col gap-3">
              <Heading>More</Heading>
            </div>
            <div className="h-auto w-full flex flex-wrap gap-3 p-2">
              {portfolioConfig.moreLinks.map((value, indx) => {
                return (
                  <ScrollReveal
                    key={indx}
                    direction="left"
                    delay={indx * 0.1}
                    randomDelay
                    className="max-w-[32%] max-lg:max-w-full"
                  >
                    <Card className="w-full">
                      <CardHeader>
                        <CardTitle>{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base font-poppins ">{value.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link
                          href={value.link}
                          target="blank"
                          className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                            "w-full gap-3"
                          )}
                        >
                          {" "}
                          <PackagePlus />
                          Visit here
                        </Link>
                      </CardFooter>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
