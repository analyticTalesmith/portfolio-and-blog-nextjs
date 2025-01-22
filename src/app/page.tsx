// index

import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientHeading from "@/components/layout/headings/gradient-heading";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import FullWidthColorBlock from "@/components/layout/sections/full-width-color-block";
import ConstrainedWidthBlock from "@/components/layout/sections/constrained-width-block";
import HoverCard from "@/components/layout/cards/hover-card";
import { Newspaper, BriefcaseBusiness, CircleUserRound } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <FullWidthColorBlock
        bgColor="surface-container"
        className="mt-8 p-12"
        childClassName="justify-items-center"
      >
        <h1 className="font-black pb-2 text-center">
          Empowered by Data, Driven by Humanity
        </h1>
        <p className="text-lg font-semibold text-primary-vibrant pb-8 text-center">
          Building Organizations People Trust Through Data-Driven Storytelling
        </p>
        <p className=" max-w-4xl text-base text-left leading-relaxed">
          At <b>Analytic Talesmith</b> I merge data science with storytelling to
          help organizations reach their full potential and create workplaces
          people respect and products and services people genuinely value. By
          blending analytics with a deep understanding of human behavior, I
          empower you to unlock insight, inspire change, and drive impact—all
          while honoring the human spirit.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-12">
          <Link href="/blog">
            <HoverCard
              variant="primary"
              icon={<Newspaper className="w-full h-full" />}
              number={1}
              heading="Blog"
              description="Science with a Soul, Data with a Story"
              bgImage="/static/images/typewriter-florian-klauer-unsplash.jpg" // Replace with your image URL
            />
          </Link>
          <Link href="/portfolio">
            <HoverCard
              variant="secondary"
              icon={<BriefcaseBusiness className="w-full h-full" />}
              number={2}
              heading="Portfolio"
              description="Bridging Organizations and Humanity Through Data-Driven Actionable Insights"
              bgImage="/static/images/design-hal-gatewood-unsplash.jpg" // Replace with your image URL
            />
          </Link>
          <Link href="/about">
            <HoverCard
              variant="tertiary"
              icon={<CircleUserRound className="w-full h-full" />}
              number={2}
              heading="About Me"
              description="A Storyteller with a Passion for Data and People"
              bgImage="/static/images/headshot.png" // Replace with your image URL
            />
          </Link>
        </div>
      </FullWidthColorBlock>
      {/* </div> */}

      <ConstrainedWidthBlock className="">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Est ipsum sapien
          eleifend nisi mi cubilia fames suscipit vel. Condimentum eu fringilla,
          nec cubilia placerat faucibus. Auctor eleifend lacinia lacus nulla
          etiam litora facilisi class gravida. Ligula ultricies at ipsum nisl
          vel nostra. Mi finibus lacinia hendrerit morbi sapien laoreet risus.
          Lobortis nullam maximus risus, curae rutrum ultricies. Maecenas
          vivamus conubia per luctus, ante aliquet inceptos nibh. Potenti morbi
          fames magna a iaculis litora.
        </p>
        <br />
        <p>
          Cubilia libero euismod, posuere dignissim consectetur facilisis.
          Sodales tortor iaculis ut feugiat mattis eleifend? Magna sapien donec
          sed praesent mi ipsum efficitur. Mus scelerisque morbi tristique
          pulvinar porta commodo. Malesuada mus purus dui varius pulvinar; nisi
          habitasse. Hendrerit curabitur curae porta etiam elementum netus diam
          at nullam.
        </p>
        <h1>Card Component</h1>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ConstrainedWidthBlock>
    </>
  );
}
