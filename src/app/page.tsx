import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import BlogCard from "@/components/layout/cards/blogcard";
import BlogGrid from "@/components/layout/blog/bloggrid";

import { TripleFeature } from "@/components/layout/features/triple-feature";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

const featuresData = [
  {
    title: "The Future of People Analytics",
    desc: "Explore how data shapes human resources and employee experiences.",
    imageUrl: "/images/placeholder.png",
    imageAlt: "peopleAnalytics",
    slug: "/blog/future-of-people-analytics",
  },
  {
    title: "Data-Driven Marketing Strategies",
    desc: "Uncover insights to optimize your marketing campaigns.",
    imageUrl: "/images/placeholder.png",
    imageAlt: "peopleAnalytics",
    slug: "/blog/data-driven-marketing",
  },
  {
    title: "The Psychology of Leadership",
    desc: "Discover the science behind effective leadership styles.",
    imageUrl: "/images/placeholder.png",
    imageAlt: "peopleAnalytics",
    slug: "/blog/psychology-of-leadership",
  },
];

export default function Home() {
  return (
    <>
      <Container>
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
            <Button buttoncolor="danger">Cancel</Button>
            <Button variant="default" buttoncolor="secondary">
              Deploy
            </Button>
          </CardFooter>
        </Card>

        <TripleFeature 
          header="Insights That Shape Decisions: The Blog"
          desc="A deep dive into data analytics, data science, people analytics, I/O psychology, digital marketing, business insights, and other related topics."
          features={featuresData}
        />

        <div className="py-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <div className="items-center md:flex hidden">
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </div>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>{" "}
        </div>
        <BlogGrid>
          <BlogCard
            PostTitle="Unlocking the Power of People Analytics"
            PostSlug="/people-analytics-power"
            PostCategory="People Analytics"
            PostDescription="Discover how to leverage people analytics to make data-driven decisions that enhance workforce productivity and engagement."
            PostTags={["HR", "workforce", "analytics"]}
          />

          <BlogCard
            PostTitle="Top SEO Trends to Watch in 2025"
            PostSlug="/seo-trends-2025"
            PostCategory="SEO"
            PostDescription="Stay ahead of the competition by understanding the latest trends in search engine optimization for the coming year."
            PostTags={["SEO", "trends", "digital marketing"]}
            PostImageURL="/images/seo-trends.jpg"
          />

          <BlogCard
            PostTitle="Data-Driven Marketing Strategies"
            PostSlug="/data-driven-marketing"
            PostCategory="Digital Marketing"
            PostDescription="Learn how to use data analytics to create more effective marketing strategies and improve campaign performance."
            PostTags={["marketing", "data", "strategy"]}
          />

          <BlogCard
            PostTitle="How to Build a Talent Analytics Dashboard"
            PostSlug="/talent-analytics-dashboard"
            PostCategory="People Analytics"
            PostDescription="Step-by-step guide to building a dashboard that provides actionable insights into your talent acquisition and retention efforts."
            PostTags={["HR", "dashboard", "analytics"]}
            PostImageURL="/images/talent-dashboard.jpg"
          />

          <BlogCard
            PostTitle="Mastering Keyword Research for SEO"
            PostSlug="/keyword-research-seo"
            PostCategory="SEO"
            PostDescription="An in-depth look at how to perform effective keyword research to boost your search rankings."
            PostTags={["SEO", "keywords", "tools"]}
          />

          <BlogCard
            PostTitle="The ROI of Employee Engagement"
            PostSlug="/employee-engagement-roi"
            PostCategory="People Analytics"
            PostDescription="Explore the financial benefits of employee engagement and how to measure it using analytics."
            PostTags={["HR", "engagement", "ROI"]}
            PostImageURL="/images/employee-engagement.jpg"
          />

          <BlogCard
            PostTitle="Google Analytics 4: What You Need to Know"
            PostSlug="/google-analytics-4"
            PostCategory="Data Analytics"
            PostDescription="An overview of the new features in Google Analytics 4 and how to make the most of them for your business."
            PostTags={["analytics", "GA4", "tracking"]}
            PostImageURL="/images/google-analytics-4.jpg"
          />

          <BlogCard
            PostTitle="The Role of Sentiment Analysis in Marketing"
            PostSlug="/sentiment-analysis-marketing"
            PostCategory="Digital Marketing"
            PostDescription="Discover how sentiment analysis can help you understand customer perceptions and fine-tune your marketing efforts."
            PostTags={["marketing", "sentiment", "AI"]}
          />

          <BlogCard
            PostTitle="Predictive Analytics in Talent Management"
            PostSlug="/predictive-talent-management"
            PostCategory="People Analytics"
            PostDescription="How predictive analytics can help HR teams anticipate workforce trends and improve decision-making."
            PostTags={["HR", "predictive analytics", "talent"]}
          />

          <BlogCard
            PostTitle="The Future of Voice Search Optimization"
            PostSlug="/voice-search-optimization"
            PostCategory="SEO"
            PostDescription="Learn how to optimize your website for the rise of voice search and stay ahead of the competition."
            PostTags={["SEO", "voice search", "trends"]}
          />

          <BlogCard
            PostTitle="A Beginner's Guide to A/B Testing"
            PostSlug="/ab-testing-guide"
            PostCategory="Data Analytics"
            PostDescription="Understand the basics of A/B testing and how to use it to improve website performance and conversion rates."
            PostTags={["testing", "analytics", "optimization"]}
            PostImageURL="/images/ab-testing.jpg"
          />

          <BlogCard
            PostTitle="Employee Turnover Analytics Made Simple"
            PostSlug="/turnover-analytics"
            PostCategory="People Analytics"
            PostDescription="Find out how to use analytics to identify and address the root causes of employee turnover in your organization."
            PostTags={["HR", "turnover", "data"]}
          />

          <BlogCard
            PostTitle="Using Heatmaps to Improve User Experience"
            PostSlug="/heatmaps-user-experience"
            PostCategory="Digital Marketing"
            PostDescription="Learn how heatmaps can provide insights into user behavior and guide website design improvements."
            PostTags={["UX", "analytics", "heatmaps"]}
            PostImageURL="/images/heatmaps.jpg"
          />

          <BlogCard
            PostTitle="Maximizing ROI with Social Media Analytics"
            PostSlug="/social-media-analytics"
            PostCategory="Digital Marketing"
            PostDescription="Tips for using social media analytics to measure ROI and refine your social media strategy."
            PostTags={["social media", "analytics", "ROI"]}
          />
        </BlogGrid>

        <div className="py-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <div className="items-center md:flex hidden">
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </div>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>{" "}
        </div>
      </Container>
    </>
  );
}
