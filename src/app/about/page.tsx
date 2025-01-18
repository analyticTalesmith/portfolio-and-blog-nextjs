import Container from "@/components/ui/container";

// about

// Sections
// Introduction
// Professional backgreound
// Purpose of site
// values and appraoch
// contact and engagement
{
  /* <section className="post">
<header className="major">
    
    <h1>About Me</h1>
    <p>Data Analyst | Storyteller | Multidisciplinary Problem Solver
    </p>
</header>
<div className="image main"></div>
<p>
Storytelling has always been an integral part of my life. My innate curiosity spurred me to explore a wide range of subjects—including computer science, physics, macro- and microbiology, bioinformatics, linguistics, sociology, and psychology—constantly seeking new perspectives to better enrich my understanding of the world. This cross-disciplinary background gives me an edge in uncovering and communicating data-driven insights across problem-solving domains, as well as the experience to know that knowing when to say, "I don't know, but I know who I can ask or where I can look for some answers," is an invaluable skill.</p>
<p>
Whether I'm performing statistical analysis on experimental findings; extracting insights from open-ended surveys and interviews; or analyzing granular coding of each players' turn in a Dungeons and Dragons 5th Edition combat encounter to identify where and why combat is slowing down, feeling unfun, and like it is disrupting my table's ability to focus on collaborative storytelling, my multidisciplinary background, and especially my training in industrial/organizational psychology, taught me how to ultimately refine data into insights and actionable solutions.</p>
<p><center><blockquote>"The purpose of a storyteller is not to tell you how to think,<br/>but to give you questions to think upon" - Brandon Sanderson</blockquote></center></p>
<h2>Skills</h2>
<ul>
    <li><strong>Languages</strong> — C#, CSS, Excel VBA, HTML, Java, Python, R, SPSS Syntax, SQL, Wolfram Language</li>
    <li><strong>Tools/Software</strong> — Adobe Dreamweaver, Microsoft Excel, RStudio, SPSS, SQL Server Management Studio, Tableau, Visual Studio, VS Code, Wolfram Mathematica</li>
    <li><strong>Areas of Training</strong> — Psychology (esp. industrial/organizational psychology, including cognitive and social), Statistics, Computer Science, Linguistics, Sociology </li>
</ul>
</section>



<div classNameName="order-3 lg:-order-2 lg:row-span-2 space-y-8">
<div classNameName="bg-surface-container border-brutal p-4 lg:p-8">
    <h4 classNameName="text-on-surface">
        I&apos;m Jonathan. A data analyst and social scientist with a passion
        for storytelling.
    </h4>
    <div classNameName="mt-6 space-y-2 lg:space-y-4 text-on-surface font-jost prose">
        <p>Data and storytelling have always been at the core of the work I do and of many of the hobbies I enjoy. &quot;Analytic Talesmith&quot; began as a handle I used to sign up for Tableau, then it became a handle on more sites, until it eventually became the URL for my original online portfolio.</p>

        <p>But with my passion for all things data came the realization that I could use the site to share blog posts, tutorials, and other resources to demystify data analytics and make the complex world of analytics more accessible.</p>

        <p>So the site in its current form was born: a project where I taught myself the necessary skills to build my own site from scratch so I could share my love of scientific thinking, data-driven problem solving, and communicating actionable insights.</p>
    </div>
</div>
<div classNameName="bg-surface-container border-brutal p-4 lg:p-8">                        
    <div classNameName="space-y-2 lg:space-y-4 text-on-surface font-jost prose">
        <h5>My Story</h5>
        <p>My journey as a storyteller began even before I took my first steps; my family has always cherished the art of storytelling. From a young age, I found myself drawn to a wide range of interests, from the logical rigor of computer science to the deep exploration of the human experience through social sciences. These seemingly disparate passions created a tension that followed me throughout my education and hobbies.</p>

        <p>When the time came to declare my undergraduate major, I faced a pivotal crossroad. I felt compelled to choose a single path that would shape my career, build the right network, secure relevant internships, and develop specialized skills. Yet, each option seemed to leave behind an integral part of who I was.</p>

        <p>Ultimately, I chose to focus on psychology, with a particular interest in industrial&#x2F;organizational psychology. This field allowed me to delve into the complexities of human behavior in organizational settings. It was here that I began to see how my diverse interests could converge.</p>

        <p>The revelation came gradually but surely. I discovered that data analytics is not just about numbers and algorithms; it&#39;s a field that thrives on the integration of technical acumen, social insight, and the art of storytelling. In this space, I found a way to blend my analytical skills with a deep understanding of human behavior, crafting narratives that are as insightful as they are data-driven.</p>

        <p>Through my journey, I&#39;ve realized that my diverse interests are not a hindrance but a unique asset. They allow me to approach data analytics with a holistic perspective, combining technical expertise with a nuanced understanding of human behavior and the power of storytelling. I am passionate about transforming data into compelling narratives that drive actionable insights and strategic decisions. Whether uncovering hidden patterns or presenting data-driven solutions, I am dedicated to making a meaningful impact through analytics.</p>
    </div>
</div> */
}

import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

type SVGComponent = (
  props: React.SVGProps<SVGSVGElement>
) => React.ReactElement;

interface IconProps {
  className?: string;
}

interface SocialLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<IconProps>; // or React.FC<{}> for functional components
}

const SocialLink: FC<SocialLinkProps> = ({
  className,
  href,
  children,
  icon: Icon,
}) => {
  return (
    <li className={className + " flex"}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-on-background my-2"
      >
        <Icon className="h-6 w-6 flex-none transition group-hover:fill-primary" />
        <span className="max-lg:hidden lg:ml-4 transition group-hover:underline group-hover:text-primary">
          {children}
        </span>
      </Link>
    </li>
  );
};

const About = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        <div className="-order-1 lg:pl-20">
          <div className="max-w-full mx-auto lg:max-w-xs px-2.5">
            <Image
              src="/static/images/headshot.png"
              alt=""
              width={0}
              height={0}
              className="mx-auto brut-border brut-shadow aspect-square w-fit max-w-xs rotate-3 rounded-2xl bg-surface-container object-cover"
            />
          </div>
        </div>
        <div className="order-3 lg:-order-2 lg:row-span-2 space-y-8">
          <div className="bg-primary-card rounded-base brut-border brut-shadow p-4 lg:p-8">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-tr to-secondary from-primary">
                  Driven by Curiosity, Powered by Data</h1>
            <div className="mt-6 space-y-2 lg:space-y-4 text-on-primary-card font-jost prose">
              <p>
                I&apos;m a lifelong learner driven by chronic curiosity and a
                passion for solving problems. My journey has been anything but
                linear, weaving through the fields of game
                design, copywriting, digital marketing, microbiology, bioinformatics, psychology, data
                analytics, and computer science. Along the way, I’ve honed a
                blend of creative and technical skills that enable me to
                explore, analyze, and communicate complex ideas in a way that
                resonates with diverse audiences.
              </p>

              <p>
                My professional experience spans crafting content strategies
                that connect people to the right information, diving deep into
                datasets to uncover insights, and designing tools that make
                complex processes more intuitive. Whether optimizing a website
                for search engines, building data pipelines, or writing about
                the intersections of technology and human behavior, I’m always
                eager to learn and grow.
              </p>

              <p>
                This site is a place where I share my thoughts, projects, and
                insights. If you share my curiosity or see opportunities for
                collaboration, feel free to reach out—I’d love to connect.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto px-2.5 lg:pl-20">
          <div className="order-2 lg:order-3 bg-surface-container-high border-brutal h-fit w-fit mx-auto p-4 lg:p-8">
            <ul
              role="list"
              className="flex flex-wrap items-center max-lg:space-x-4 max-lg:mx-4 flex-row lg:flex-col"
            >
              LinkedIn GitHub Tableau
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
